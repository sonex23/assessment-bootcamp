package entity

import "gorm.io/gorm"

type PasswordList struct {
	gorm.Model
	Website  string `json:"website"`
	Password string `json:"password"`
	UserID   uint   `json:"user_id"`
}

type PasswordListInput struct {
	Website  string `json:"website" binding:"required"`
	Password string `json:"password" binding:"required"`
	UserID   uint   `json:"user_id"`
}

type PasswordListInputUpdate struct {
	Website  string `json:"website" binding:"required"`
	Password string `json:"password" binding:"required"`
}
