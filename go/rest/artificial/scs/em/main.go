package main

//evomaster:ignore

import (
	"github.com/jcbasso/EvoMaster-go/client-go/instrumentation/controller"
	"log"
)

func main() {
	appController := NewAppController("localhost", 5001)
	emController := controller.NewEMController("localhost", 40100, &appController)

	log.Fatal(emController.StartTheControllerServer())
}
