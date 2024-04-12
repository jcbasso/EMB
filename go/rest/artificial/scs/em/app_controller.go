package main

//evomaster:ignore

import (
	"fmt"
	"github.com/jcbasso/EMB/go/rest/artificial/scs/src"
	"github.com/jcbasso/EvoMaster/client-go/src/controller"
	"github.com/jcbasso/EvoMaster/client-go/src/controller/api/dto"
	"github.com/jcbasso/EvoMaster/client-go/src/controller/api/dto/problem"
	"log"
	"net/http"
)

var _ controller.SutControllerInterface = &AppController{}

type AppController struct {
	host   string
	port   int
	server *http.Server

	isRunning bool
}

func NewAppController(address string, port int) AppController {
	return AppController{
		host: address,
		port: port,
	}
}

func (a *AppController) StartSut() string {
	addr := fmt.Sprintf("%s:%d", a.host, a.port)
	a.server = &http.Server{
		Addr:    addr,
		Handler: src.CreateServer(),
	}

	go func() {
		a.isRunning = true
		err := a.server.ListenAndServe()
		if err != nil {
			a.isRunning = false
			log.Fatal(err)
		}
	}()

	return addr
}

func (a *AppController) StopSut() {
	if a.server == nil {
		return
	}

	log.Fatal(a.server.Close())
}

func (a *AppController) ResetStateOfSUT() {
	return
}

func (a *AppController) GetInfoForAuthentication() []dto.AuthenticationDto {
	return []dto.AuthenticationDto{}
}

func (a *AppController) GetPreferredOutputFormat() dto.OutputFormat {
	return dto.JavaJunit5
}

func (a *AppController) IsSutRunning() bool {
	return a.isRunning
}

func (a *AppController) GetProblemInfo() problem.ProblemInfo {
	return problem.RestProblemDto{
		OpenApiUrl:      fmt.Sprintf("%s:%d/swagger.json", a.host, a.port),
		EndpointsToSkip: []string{},
	}
}
