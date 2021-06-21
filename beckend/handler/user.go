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
	}
	c.JSON(201, response)
}
