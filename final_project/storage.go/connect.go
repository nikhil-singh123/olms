package storage

import (
	"fmt"
	"main/models"

	// "main/models"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {

	var err error

	dsn := "Nikhilsingh:password@tcp(127.0.0.1:3306)/NIKHIL?parseTime=true"
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		fmt.Println("not connected")
	} else {
		fmt.Println("connected")
	}

	DB.AutoMigrate(&models.Library{})
	DB.AutoMigrate(&models.Users{})
	DB.AutoMigrate(&models.Bookinventry{})
	DB.AutoMigrate(&models.Requestevents{})
	DB.AutoMigrate(&models.Issueregistery{})

}
