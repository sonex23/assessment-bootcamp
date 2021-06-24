package main

import (
	"assesment-bootcamp/handler"
	"assesment-bootcamp/route"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Use(handler.CorsMiddleware())
	// r.Use(cors.Default())
	route.UserRoute(r)
	route.PasswordRoute(r)

	r.Run(":8000")
}
