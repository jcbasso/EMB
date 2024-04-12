package src

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func writeResponse(w http.ResponseWriter, r Dto, err error) {
	if err != nil {
		badRequestResponse(w, err.Error())
		return
	}

	response, err := json.Marshal(r)
	if err != nil {
		fmt.Printf("[ERROR] Error encoding to json [object: %v]\n", r)
		internalServerResponse(w)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	_, err = fmt.Fprintf(w, string(response))
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
	stringifyMsg := "\"" + msg + "\""
	_, _ = fmt.Fprintf(w, stringifyMsg)
}
