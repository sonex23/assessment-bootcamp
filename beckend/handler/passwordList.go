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
