package user

import (
	"assesment-bootcamp/entity"

	"gorm.io/gorm"
)

type UserRepository interface {
	CreateUser(user entity.User) (entity.User, error)
	FindByEmail(email string) (entity.User, error)
	UpdateUserProfile(id string, dataUpdate map[string]interface{}) (entity.User, error)
	GetUser(id string) (entity.User, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) CreateUser(user entity.User) (entity.User, error) {
	if err := r.db.Create(&user).Error; err != nil {
		return user, err
	}
	return user, nil
}

func (r *repository) FindByEmail(email string) (entity.User, error) {
	var user entity.User

	if err := r.db.Where("email = ?", email).Find(&user).Error; err != nil {
		return user, err
	}
	return user, nil
}

func (r *repository) UpdateUserProfile(id string, dataUpdate map[string]interface{}) (entity.User, error) {
	var user entity.User
	if err := r.db.Model(&user).Where("id = ?", id).Updates(dataUpdate).Error; err != nil {
		return user, err
	}
	if err := r.db.Where("id = ?", id).Find(&user).Error; err != nil {
		return user, err
	}
	return user, nil
}

func (r *repository) GetUser(id string) (entity.User, error) {
	var user entity.User
	if err := r.db.Where("id = ?", id).Find(&user).Error; err != nil {
		return user, err
	}
	return user, nil
}
