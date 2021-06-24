package route

import (
	"assesment-bootcamp/auth"
	"assesment-bootcamp/config"
	"assesment-bootcamp/handler"
	"assesment-bootcamp/user"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

var (
	DB             *gorm.DB = config.Connect()
	userRepository          = user.NewRepository(DB)
	userService             = user.NewUserService(userRepository)
	authService             = auth.NewService()
	userHandler             = handler.NewUserHandler(userService, authService)
)

func UserRoute(r *gin.Engine) {
	r.POST("/users/register", userHandler.CreateUserHandler)
	r.POST("/users/login", userHandler.LoginUserHandler)
	r.GET("/users/:id", handler.Middleware(userService, authService), userHandler.ShowUserProfileHandler)
	r.PUT("/users/:id", handler.Middleware(userService, authService), userHandler.UpdateUserProfileHandler)
}
