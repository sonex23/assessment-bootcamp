package user

import "assesment-bootcamp/entity"

type UserFormat struct {
	ID       uint   `json:"id"`
	Fullname string `json:"fullname"`
	Address  string `json:"address"`
	Email    string `json:"email"`
}

func FormattingUser(user entity.User) UserFormat {
	userFormat := UserFormat{
		ID:       user.ID,
		Fullname: user.Fullname,
		Address:  user.Address,
		Email:    user.Email,
	}
	return userFormat
}
