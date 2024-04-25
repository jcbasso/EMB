package generated_go_30m

//evomaster:ignore

import (
	"context"
	"errors"
	"fmt"
	"github.com/jcbasso/EMB/go/rest/artificial/ncs/src"
	"github.com/jcbasso/EvoMaster/client-go/src/controller"
	"github.com/jcbasso/EvoMaster/client-go/src/controller/api/dto"
	"github.com/jcbasso/EvoMaster/client-go/src/controller/api/dto/problem"
	"log"
	"net/http"
	"time"
)

var _ controller.SutControllerInterface = &AppController{}

type AppController struct {
	host   string
	port   int
	server *http.Server
}

func (a *AppController) SetHost(host string) {
	a.host = host
}

func (a *AppController) SetPort(port int) {
	a.port = port
}

func (a *AppController) StartSut() string {
	addr := fmt.Sprintf("%s:%d", a.host, a.port)
	server := src.CreateServer()
	a.server = &http.Server{
		Addr:    addr,
		Handler: server,
	}

	go func() {
		err := a.server.ListenAndServe()
		if !errors.Is(err, http.ErrServerClosed) {
			log.Fatal(err)
		}
	}()

	for !a.IsSutRunning() {
		time.Sleep(10 * time.Millisecond)
	}

	return addr
}

func (a *AppController) StopSut() {
	if a.server == nil {
		return
	}

	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	err := a.server.Shutdown(ctx)
	if err != nil {
		log.Fatal(err)
	}
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
	host := "localhost"
	if a.host != "" {
		host = a.host
	}
	reqUrl := fmt.Sprintf("http://%s:%d/api/health", host, a.port)

	req, err := http.NewRequest(http.MethodGet, reqUrl, nil)
	if err != nil {
		log.Fatal(err)
	}
	res, err := http.DefaultClient.Do(req)
	if err != nil {
		log.Fatal(err)
	}

	return res.StatusCode == 200
}

func (a *AppController) GetProblemInfo() problem.ProblemInfo {
	return problem.RestProblemDto{
		OpenApiUrl:      fmt.Sprintf("%s:%d/swagger.json", a.host, a.port),
		EndpointsToSkip: []string{},
	}
}
