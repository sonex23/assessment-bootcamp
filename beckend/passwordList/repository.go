package passwordList

import (
	"assesment-bootcamp/entity"

	"gorm.io/gorm"
)

type PasswordListRepository interface {
	CreateNewPassword(passwordList entity.PasswordList) (entity.PasswordList, error)
	FindById(id string) (entity.PasswordList, error)
	FindByUserID(id int) ([]entity.PasswordList, error)
	ReadAllPassword() ([]entity.PasswordList, error)
	UpdatePassword(id string, dataUpdate map[string]interface{}) (entity.PasswordList, error)
	DeleteById(id string) (string, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) DeleteById(id string) (string, error) {
	if err := r.db.Where("id = ?", id).Delete(&entity.PasswordList{}).Error; err != nil {
		return "error", err
	}
	return "success", nil
}

func (r *repository) FindByUserID(id int) ([]entity.PasswordList, error) {
	var passwordLists []entity.PasswordList
	if err := r.db.Where("user_id = ?", id).Find(&passwordLists).Error; err != nil {
		return passwordLists, err
	}
	return passwordLists, nil
}
func (r *repository) CreateNewPassword(passwordList entity.PasswordList) (entity.PasswordList, error) {
	if err := r.db.Create(&passwordList).Error; err != nil {
		return passwordList, err
	}
	return passwordList, nil
}

func (r *repository) FindById(id string) (entity.PasswordList, error) {
	var passwordList entity.PasswordList
	if err := r.db.Where("id = ?", id).Find(&passwordList).Error; err != nil {
		return passwordList, err
	}
	return passwordList, nil
}

func (r *repository) ReadAllPassword() ([]entity.PasswordList, error) {
	var passwordLists []entity.PasswordList
	if err := r.db.Find(&passwordLists).Error; err != nil {
		return passwordLists, err
	}
	return passwordLists, nil
}

func (r *repository) UpdatePassword(id string, dataUpdate map[string]interface{}) (entity.PasswordList, error) {
	var passwordList entity.PasswordList
	if err := r.db.Model(&passwordList).Where("id = ?", id).Updates(dataUpdate).Error; err != nil {
		return passwordList, err
	}

	if err := r.db.Where("id = ?", id).Find(&passwordList).Error; err != nil {
		return passwordList, err
	}
	return passwordList, nil
}
