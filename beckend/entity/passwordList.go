package entity

import "gorm.io/gorm"

type PasswordList struct {
	gorm.Model
	Website  string `json:"website"`
	Password string `json:"password"`
}
