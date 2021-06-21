package entity

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Fullname string `json:"fullname"`
	Address  string `json:"address"`
	Email    string `gorm:"unique" json:"email"`
	Password string `json:"password"`
}

type LoginUserInput struct {
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required"`
}

type UserInput struct {
	Fullname string `json:"fullname"`
	Address  string `json:"address"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

type UpdateUserInput struct {
	Fullname string `json:"fullname"`
	Address  string `json:"address"`
}
