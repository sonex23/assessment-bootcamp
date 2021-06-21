package user

import (
	"assesment-bootcamp/entity"
	"errors"
	"fmt"
	"time"

	"golang.org/x/crypto/bcrypt"
)

type UserService interface {
	SaveNewUser(user entity.UserInput) (UserFormat, error)
	LoginUser(input entity.LoginUserInput) (entity.User, error)
	UpdateUserByID(id string, dataInput entity.UpdateUserInput) (UserFormat, error)
	GetUserByID(id string) (UserFormat, error)
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

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(input.Password)); err != nil {
		return user, errors.New("invalid password")
	}
	return user, nil
}

func (s *userService) UpdateUserByID(id string, dataInput entity.UpdateUserInput) (UserFormat, error) {
	var dataUpdate = map[string]interface{}{}

	user, err := s.repository.GetUser(id)
	if err != nil {
		return UserFormat{}, err
	}
	if user.ID == 0 {
		newError := fmt.Sprintf("user id %s is not found", id)
		return UserFormat{}, errors.New(newError)
	}

	if dataInput.Fullname != "" || len(dataInput.Fullname) != 0 {
		dataUpdate["fullname"] = dataInput.Fullname
	}

	if dataInput.Address != "" || len(dataInput.Address) != 0 {
		dataUpdate["address"] = dataInput.Address
	}
	dataUpdate["updated_at"] = time.Now()

	userUpdated, err := s.repository.UpdateUserProfile(id, dataUpdate)
	if err != nil {
		return UserFormat{}, err
	}
	formatUser := FormattingUser(userUpdated)
	return formatUser, nil

}

func (s *userService) GetUserByID(id string) (UserFormat, error) {
	user, err := s.repository.GetUser(id)
	if err != nil {
		return UserFormat{}, err
	}
	if user.ID == 0 {
		newError := fmt.Sprintf("user id %s is not found", id)
		return UserFormat{}, errors.New(newError)
	}
	userFormat := FormattingUser(user)
	return userFormat, nil
}
