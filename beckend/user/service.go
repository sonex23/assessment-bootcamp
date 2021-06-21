package user

import (
	"assesment-bootcamp/entity"

	"golang.org/x/crypto/bcrypt"
)

type UserService interface {
	SaveNewUser(user entity.User) (UserFormat, error)
}

type userService struct {
	repository UserRepository
}

func NewUserService(repository UserRepository) *userService {
	return &userService{repository}
}

func (s *userService) SaveNewUser(newUser entity.User) (UserFormat, error) {
	genPassword, err := bcrypt.GenerateFromPassword([]byte(newUser.Password), bcrypt.MinCost)
	if err != nil {
		return UserFormat{}, err
	}
	var user = entity.User{
		Fullname: newUser.Fullname,
		Address:  newUser.Address,
		Email:    newUser.Email,
		Password: string(genPassword),
	}

	response, err := s.repository.CreateUser(user)

	userFormat := FormattingUser(response)
	if err != nil {
		return userFormat, err
	}
	return userFormat, nil

}
