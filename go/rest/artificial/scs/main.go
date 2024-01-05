package main

import (
	"github.com/jcbasso/EvoMaster-go/benchmark/rest/artificial/scs/src"
	"log"
	"net/http"
)

func main() {
	r := src.CreateServer()
	log.Fatal(http.ListenAndServe(":8080", r))
}
