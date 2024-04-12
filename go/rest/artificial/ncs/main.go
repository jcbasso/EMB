package main

import (
	"errors"
	"github.com/jcbasso/EMB/go/rest/artificial/ncs/src"
	"log"
	"net/http"
)

func main() {
	r := src.CreateServer()
	err := http.ListenAndServe(":8080", r)
	if !errors.Is(err, http.ErrServerClosed) {
		log.Fatal(err)
	}
}
