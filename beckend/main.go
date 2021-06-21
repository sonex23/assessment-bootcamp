package main

import (
	"assesment-bootcamp/config"
	"fmt"
)

func main() {
	config.Connect()
	fmt.Println("Sukses koneksi db")
}
