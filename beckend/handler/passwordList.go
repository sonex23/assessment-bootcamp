package handler

import (
	"assesment-bootcamp/auth"
	"assesment-bootcamp/entity"
	"assesment-bootcamp/passwordList"

	"github.com/gin-gonic/gin"
)

type passwordListHandler struct {
	passwordListService passwordList.PasswordListService
	authService         auth.Service
}

func NewPasswordListHandler(passwordListService passwordList.PasswordListService, authService auth.Service) *passwordListHandler {
	return &passwordListHandler{passwordListService, authService}
}

func (h *passwordListHandler) SaveNewPasswordHandler(c *gin.Context) {
	var inputPassword entity.PasswordListInput

	if err := c.ShouldBindJSON(&inputPassword); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	userID := int(c.MustGet("currentUser").(int))
	response, err := h.passwordListService.SaveNewPassword(userID, inputPassword)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	c.JSON(201, response)
}

func (h *passwordListHandler) GetByUserIDHandler(c *gin.Context) {
	id := int(c.MustGet("currentUser").(int))
	passwordLists, err := h.passwordListService.GetByUserID(id)
	if err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}
	c.JSON(200, passwordLists)
}

func (h *passwordListHandler) DeleteByIDHandler(c *gin.Context) {
	id := c.Param("id")
	password, _ := h.passwordListService.GetByID(id)
	idParam := int(password.UserID)
	userData := int(c.MustGet("currentUser").(int))

	if idParam != userData {
		c.JSON(401, gin.H{"error": "Unauthorized User"})
		return
	}
	pass, err := h.passwordListService.DeletePasswordByID(id)
	if err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}
	c.JSON(200, gin.H{"status": pass})
}

func (h *passwordListHandler) UpdateByIDHandler(c *gin.Context) {
	id := c.Param("id")
	var updatePasswordInput entity.PasswordListInputUpdate

	if err := c.ShouldBindJSON(&updatePasswordInput); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}
	password, _ := h.passwordListService.GetByID(id)
	idParam := int(password.UserID)
	userData := int(c.MustGet("currentUser").(int))

	if idParam != userData {
		c.JSON(401, gin.H{"error": "Unauthorized User"})
		return
	}

	pass, err := h.passwordListService.UpdatePasswordByID(id, updatePasswordInput)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	c.JSON(201, pass)
}
