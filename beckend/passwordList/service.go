package passwordList

import (
	"assesment-bootcamp/entity"
	"errors"
	"fmt"
)

type PasswordListService interface {
	SaveNewPassword(userID int, passwordList entity.PasswordListInput) (PasswordListFormat, error)
	GetByID(ID string) (PasswordListFormat, error)
	GetByUserID(userID int) ([]PasswordListFormat, error)
	DeletePasswordByID(id string) (interface{}, error)
	UpdatePasswordByID(id string, dataInput entity.PasswordListInputUpdate) (PasswordListFormat, error)
}

type service struct {
	repository PasswordListRepository
}

func NewPasswordService(repository PasswordListRepository) *service {
	return &service{repository}
}

func (s *service) SaveNewPassword(userID int, passwordList entity.PasswordListInput) (PasswordListFormat, error) {
	var newPassword = entity.PasswordList{
		Password: passwordList.Password,
		Website:  passwordList.Website,
		UserID:   uint(userID),
	}
	createPassword, err := s.repository.CreateNewPassword(newPassword)
	formatPassword := FormattingPassword(createPassword)

	if err != nil {
		return formatPassword, err
	}
	return formatPassword, nil
}

func (s *service) GetByID(ID string) (PasswordListFormat, error) {
	passwordList, err := s.repository.FindById(ID)
	passwordListFormat := FormattingPassword(passwordList)
	if err != nil {
		return passwordListFormat, err
	}
	return passwordListFormat, nil
}

func (s *service) GetByUserID(userID int) ([]PasswordListFormat, error) {
	passwordLists, err := s.repository.FindByUserID(userID)
	var passwordListsFormat []PasswordListFormat
	for _, passwordList := range passwordLists {
		var passwordFormat = FormattingPassword(passwordList)
		passwordListsFormat = append(passwordListsFormat, passwordFormat)
	}

	if err != nil {
		return passwordListsFormat, err
	}
	return passwordListsFormat, nil
}

func (s *service) UpdatePasswordByID(id string, dataInput entity.PasswordListInputUpdate) (PasswordListFormat, error) {
	var dataUpdate = map[string]interface{}{}
	password, err := s.repository.FindById(id)
	if password.ID == 0 {
		newError := fmt.Sprintf("password id %s is not found", id)
		return PasswordListFormat{}, errors.New(newError)
	}

	if err != nil {
		return PasswordListFormat{}, err
	}
	if dataInput.Password != "" {
		dataUpdate["password"] = dataInput.Password
	}
	if dataInput.Website != "" {
		dataUpdate["website"] = dataInput.Website
	}
	passwordUpdate, err := s.repository.UpdatePassword(id, dataUpdate)
	if err != nil {
		return PasswordListFormat{}, err
	}
	formatPassword := FormattingPassword(passwordUpdate)
	return formatPassword, nil
}

func (s *service) DeletePasswordByID(id string) (interface{}, error) {
	password, err := s.repository.FindById(id)
	if err != nil {
		return nil, err
	}
	if password.ID == 0 {
		newError := fmt.Sprintf("password id %s is not found", id)
		return PasswordListFormat{}, errors.New(newError)
	}
	status, err := s.repository.DeleteById(id)
	if err != nil {
		return status, err
	}
	return status, nil
}
