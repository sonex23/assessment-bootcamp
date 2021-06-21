package main

import (
	"assesment-bootcamp/config"
	"fmt"
)

func main() {
	db := config.Connect()
	fmt.Println("Sukses koneksi db")
	fmt.Println(db)
}
