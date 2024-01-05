package src

import (
	_ "embed"
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"github.com/jcbasso/EMB/benchmark/rest/artificial/ncs/src/imp"
	"net/http"
)

func TriangleClassificationHandler(w http.ResponseWriter, r *http.Request) {
	type request struct {
		A int32 `json:"a,string"`
		B int32 `json:"b,string"`
		C int32 `json:"c,string"`
	}

	jsonVars, _ := json.Marshal(mux.Vars(r))

	var req request
	err := json.Unmarshal(jsonVars, &req)
	if err != nil {
		badRequestResponse(w, "")
		return
	}

	res := imp.TriangleClassify(req.A, req.B, req.C)
	writeResponse(w, IntegerDto{res}, nil)
}

func BessJHandler(w http.ResponseWriter, r *http.Request) {
	type request struct {
		N int32   `json:"n,string"`
		X float64 `json:"x,string"`
	}

	jsonVars, _ := json.Marshal(mux.Vars(r))

	var req request
	err := json.Unmarshal(jsonVars, &req)
	if err != nil {
		badRequestResponse(w, "")
		return
	}

	if req.N <= 2 || req.N > 1000 {
		badRequestResponse(w, "")
		return
	}

	res, err := imp.Bessj(req.N, req.X)
	writeResponse(w, DoubleDto{res}, err)
}

func ExpintHandler(w http.ResponseWriter, r *http.Request) {
	type request struct {
		N int32   `json:"n,string"`
		X float64 `json:"x,string"`
	}

	jsonVars, _ := json.Marshal(mux.Vars(r))

	var req request
	err := json.Unmarshal(jsonVars, &req)
	if err != nil {
		badRequestResponse(w, "")
		return
	}

	res, err := imp.Expint(req.N, req.X)
	writeResponse(w, DoubleDto{res}, err)
}

func FisherHandler(w http.ResponseWriter, r *http.Request) {
	type request struct {
		M int32   `json:"m,string"`
		N int32   `json:"n,string"`
		X float64 `json:"x,string"`
	}

	jsonVars, _ := json.Marshal(mux.Vars(r))

	var req request
	err := json.Unmarshal(jsonVars, &req)
	if err != nil {
		badRequestResponse(w, "")
		return
	}

	if req.M > 1000 || req.N > 1000 {
		badRequestResponse(w, "")
		return
	}

	res := imp.Fisher(req.M, req.N, req.X)
	writeResponse(w, DoubleDto{res}, nil)
}

func GammqHandler(w http.ResponseWriter, r *http.Request) {
	type request struct {
		A float64 `json:"a,string"`
		X float64 `json:"x,string"`
	}

	jsonVars, _ := json.Marshal(mux.Vars(r))

	var req request
	err := json.Unmarshal(jsonVars, &req)
	if err != nil {
		badRequestResponse(w, "")
		return
	}

	gammq := imp.NewGammq()
	res, err := gammq.Exe(req.A, req.X)
	writeResponse(w, DoubleDto{res}, err)
}

func RemainderHandler(w http.ResponseWriter, r *http.Request) {
	type request struct {
		A int32 `json:"a,string"`
		B int32 `json:"b,string"`
	}

	jsonVars, _ := json.Marshal(mux.Vars(r))

	var req request
	err := json.Unmarshal(jsonVars, &req)
	if err != nil {
		badRequestResponse(w, "")
		return
	}

	var lim int32 = 10_000
	if req.A > lim || req.A < -lim || req.B < -lim {
		badRequestResponse(w, "")
		return
	}

	res := imp.Remainder(req.A, req.B)
	writeResponse(w, IntegerDto{res}, nil)
}

//go:embed swagger.json
var swaggerJSON []byte

func SwaggerHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	_, err := fmt.Fprintf(w, string(swaggerJSON))
	if err != nil {
		internalServerResponse(w)
		return
	}
}
