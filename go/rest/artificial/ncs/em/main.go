package main

//evomaster:ignore

import (
	"github.com/jcbasso/EvoMaster/client-go/src/controller"
	"log"
)

func main() {
	appController := AppController{}
	appController.SetHost("localhost")
	appController.SetPort(5001)
	emController := controller.NewEMController("localhost", 40101, &appController)

	log.Fatal(emController.StartTheControllerServer())
}
