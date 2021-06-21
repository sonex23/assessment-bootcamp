package main

import (
	"assesment-bootcamp/route"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	route.UserRoute(r)

	r.Run(":8000")
}
