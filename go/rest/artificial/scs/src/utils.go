package src

import (
	"fmt"
	"net/http"
)

func okResponse(w http.ResponseWriter, msg string) {
	w.Header().Set("Content-Type", "application/json")
	_, err := fmt.Fprintf(w, msg)
	if err != nil {
		internalServerResponse(w)
		return
	}
}

func internalServerResponse(w http.ResponseWriter) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusInternalServerError)
}

func badRequestResponse(w http.ResponseWriter, msg string) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusBadRequest)
	_, _ = fmt.Fprintf(w, msg)
}
