package passwordList

import "assesment-bootcamp/entity"

type PasswordListFormat struct {
	ID       uint   `json:"id"`
	Website  string `json:"website"`
	Password string `json:"password"`
	UserID   uint   `json:"user_id"`
}

func FormattingPassword(password entity.PasswordList) PasswordListFormat {
	passwordFormat := PasswordListFormat{
		ID:       password.ID,
		Website:  password.Website,
		Password: password.Password,
		UserID:   password.UserID,
	}
	return passwordFormat
}
