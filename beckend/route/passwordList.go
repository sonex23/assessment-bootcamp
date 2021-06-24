package route

import (
	"assesment-bootcamp/handler"
	"assesment-bootcamp/passwordList"

	"github.com/gin-gonic/gin"
)

var (
	passwordListRepository = passwordList.NewRepository(DB)
	passwordListService    = passwordList.NewPasswordService(passwordListRepository)
	passwordListHandler    = handler.NewPasswordListHandler(passwordListService, authService)
)

func PasswordRoute(r *gin.Engine) {
	r.POST("/password", handler.Middleware(userService, authService), passwordListHandler.SaveNewPasswordHandler)
	r.GET("/password", handler.Middleware(userService, authService), passwordListHandler.GetByUserIDHandler)
	r.DELETE("/password/:id", handler.Middleware(userService, authService), passwordListHandler.DeleteByIDHandler)
}
