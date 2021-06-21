package main

import (
	"assesment-bootcamp/handler"
	"assesment-bootcamp/route"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Use(handler.CorsMiddleware())
	route.UserRoute(r)

	r.Run(":8000")
}
