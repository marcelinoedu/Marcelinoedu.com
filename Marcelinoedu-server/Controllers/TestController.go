package controllers

import (
	"github.com/gin-gonic/gin"
)

func TestHandler(request *gin.Context) {
	request.JSON(200, gin.H{
		"message": "Hello World!",
	})
}
