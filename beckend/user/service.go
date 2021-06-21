package user

import (
	"assesment-bootcamp/entity"
	"errors"
	"fmt"

	"golang.org/x/crypto/bcrypt"
)

type UserService interface {
	SaveNewUser(user entity.UserInput) (UserFormat, error)
	LoginUser(input entity.LoginUserInput) (entity.User, error)
}

type userService struct {
	repository UserRepository
}

func NewUserService(repository UserRepository) *userService {
	return &userService{repository}
}

func (s *userService) SaveNewUser(newUser entity.UserInput) (UserFormat, error) {
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

func (s *userService) LoginUser(input entity.LoginUserInput) (entity.User, error) {
	user, err := s.repository.FindByEmail(input.Email)
	if err != nil {
		return user, err
	}

	if user.ID == 0 {
		newError := fmt.Sprintf("User id %v not found", user.ID)
		return user, errors.New(newError)
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(input.Password)).Error; err != nil {
		return user, errors.New("Invalid Password")
	}
	return user, nil
}
