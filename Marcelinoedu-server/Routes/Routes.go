package routes

import (
	controllers "marcelinoedu/Controllers"

	"github.com/gin-gonic/gin"
)

func HandleRequest() {
	request := gin.Default()
	request.GET("/test", controllers.TestHandler)
	request.Run(":5002")
}
