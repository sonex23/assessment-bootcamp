package handler

import (
	"assesment-bootcamp/auth"
	"assesment-bootcamp/entity"
	"assesment-bootcamp/user"

	"github.com/gin-gonic/gin"
)

type userHandler struct {
	userService user.UserService
	authService auth.Service
}

func NewUserHandler(userService user.UserService, authService auth.Service) *userHandler {
	return &userHandler{userService, authService}
}

func (h *userHandler) CreateUserHandler(c *gin.Context) {
	var inputUser entity.UserInput

	if err := c.ShouldBindJSON(&inputUser); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	response, err := h.userService.SaveNewUser(inputUser)

	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	c.JSON(201, response)
}

func (h *userHandler) LoginUserHandler(c *gin.Context) {
	var inputLoginUser entity.LoginUserInput

	if err := c.ShouldBindJSON(&inputLoginUser); err != nil {
		c.JSON(400, err.Error())
		return
	}
	userData, err := h.userService.LoginUser(inputLoginUser)

	if err != nil {
		c.JSON(401, err.Error())
		return
	}
	token, err := h.authService.GenerateToken(int(userData.ID))
	if err != nil {
		c.JSON(401, err.Error())
		return
	}

	c.JSON(200, gin.H{
		"id":            userData.ID,
		"fullname":      userData.Fullname,
		"address":       userData.Address,
		"email":         userData.Email,
		"authorization": token,
	})
}

func (h *userHandler) ShowUserProfileHandler(c *gin.Context) {
	id := c.Param("id")
	user, err := h.userService.GetUserByID(id)
	if err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}
	c.JSON(200, user)
}

func (h *userHandler) UpdateUserProfileHandler(c *gin.Context) {
	id := c.Params.ByName("id")
	var updateUserInput entity.UpdateUserInput
	if err := c.ShouldBindJSON(&updateUserInput); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}
	user, err := h.userService.UpdateUserByID(id, updateUserInput)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	c.JSON(201, user)
}
