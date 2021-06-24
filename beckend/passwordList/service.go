package passwordList

import "assesment-bootcamp/entity"

type PasswordListService interface {
	SaveNewPassword(userID int, passwordList entity.PasswordListInput) (PasswordListFormat, error)
	GetByID(ID string) (PasswordListFormat, error)
	GetByUserID(userID int) ([]PasswordListFormat, error)
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
