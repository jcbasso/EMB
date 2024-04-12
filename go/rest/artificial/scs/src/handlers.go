package src

import (
	_ "embed"
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"github.com/jcbasso/EMB/go/rest/artificial/scs/src/imp"
	"net/http"
)

func CalcHandler(w http.ResponseWriter, r *http.Request) {
	type request struct {
		Op   string  `json:"op"`
		Arg1 float64 `json:"arg1,string"`
		Arg2 float64 `json:"arg2,string"`
	}

	jsonVars, _ := json.Marshal(mux.Vars(r))

	var req request
	err := json.Unmarshal(jsonVars, &req)
	if err != nil {
		badRequestResponse(w, "")
		return
	}

	res := imp.Calc(req.Op, req.Arg1, req.Arg2)
	okResponse(w, res)
}

func CookieHandler(w http.ResponseWriter, r *http.Request) {
	type request struct {
		Name string `json:"name"`
		Val  string `json:"val"`
		Site string `json:"site"`
	}

	jsonVars, _ := json.Marshal(mux.Vars(r))

	var req request
	err := json.Unmarshal(jsonVars, &req)
	if err != nil {
		badRequestResponse(w, "")
		return
	}

	res := imp.Cookie(req.Name, req.Val, req.Site)
	okResponse(w, res)
}

func CostFunsHandler(w http.ResponseWriter, r *http.Request) {
	type request struct {
		I int32  `json:"i,string"`
		S string `json:"s"`
	}

	jsonVars, _ := json.Marshal(mux.Vars(r))

	var req request
	err := json.Unmarshal(jsonVars, &req)
	if err != nil {
		badRequestResponse(w, "")
		return
	}

	res := imp.CostFuns(req.I, req.S)
	okResponse(w, res)
}

func DateParseHandler(w http.ResponseWriter, r *http.Request) {
	type request struct {
		DayName   string `json:"dayname"`
		MonthName string `json:"monthname"`
	}

	jsonVars, _ := json.Marshal(mux.Vars(r))

	var req request
	err := json.Unmarshal(jsonVars, &req)
	if err != nil {
		badRequestResponse(w, "")
		return
	}

	res := imp.DateParse(req.DayName, req.MonthName)
	okResponse(w, res)
}

func FileSuffixHandler(w http.ResponseWriter, r *http.Request) {
	type request struct {
		Directory string `json:"directory"`
		File      string `json:"file"`
	}

	jsonVars, _ := json.Marshal(mux.Vars(r))

	var req request
	err := json.Unmarshal(jsonVars, &req)
	if err != nil {
		badRequestResponse(w, "")
		return
	}

	res := imp.FileSuffix(req.Directory, req.File)
	okResponse(w, res)
}

func NotyPevarHandler(w http.ResponseWriter, r *http.Request) {
	type request struct {
		I int32  `json:"i,string"`
		S string `json:"s"`
	}

	jsonVars, _ := json.Marshal(mux.Vars(r))

	var req request
	err := json.Unmarshal(jsonVars, &req)
	if err != nil {
		badRequestResponse(w, "")
		return
	}

	res := imp.NotyPevar(req.I, req.S)
	okResponse(w, res)
}

func Ordered4Handler(w http.ResponseWriter, r *http.Request) {
	type request struct {
		W string `json:"w"`
		X string `json:"x"`
		Z string `json:"z"`
		Y string `json:"y"`
	}

	jsonVars, _ := json.Marshal(mux.Vars(r))

	var req request
	err := json.Unmarshal(jsonVars, &req)
	if err != nil {
		badRequestResponse(w, "")
		return
	}

	res := imp.Ordered4(req.W, req.X, req.Z, req.Y)
	okResponse(w, res)
}

func PatHandler(w http.ResponseWriter, r *http.Request) {
	type request struct {
		TXT string `json:"txt"`
		Pat string `json:"pat"`
	}

	jsonVars, _ := json.Marshal(mux.Vars(r))

	var req request
	err := json.Unmarshal(jsonVars, &req)
	if err != nil {
		badRequestResponse(w, "")
		return
	}

	res := imp.Pat(req.TXT, req.Pat)
	okResponse(w, res)
}

func RegexHandler(w http.ResponseWriter, r *http.Request) {
	type request struct {
		TXT string `json:"txt"`
	}

	jsonVars, _ := json.Marshal(mux.Vars(r))

	var req request
	err := json.Unmarshal(jsonVars, &req)
	if err != nil {
		badRequestResponse(w, "")
		return
	}

	res := imp.Regex(req.TXT)
	okResponse(w, res)
}

func Text2TxtHandler(w http.ResponseWriter, r *http.Request) {
	type request struct {
		Word1 string `json:"word1"`
		Word2 string `json:"word2"`
		Word3 string `json:"word3"`
	}

	jsonVars, _ := json.Marshal(mux.Vars(r))

	var req request
	err := json.Unmarshal(jsonVars, &req)
	if err != nil {
		badRequestResponse(w, "")
		return
	}

	res := imp.Text2Txt(req.Word1, req.Word2, req.Word3)
	okResponse(w, res)
}

func TitleHandler(w http.ResponseWriter, r *http.Request) {
	type request struct {
		Sex   string `json:"sex"`
		Title string `json:"title"`
	}

	jsonVars, _ := json.Marshal(mux.Vars(r))

	var req request
	err := json.Unmarshal(jsonVars, &req)
	if err != nil {
		badRequestResponse(w, "")
		return
	}

	res := imp.Title(req.Sex, req.Title)
	okResponse(w, res)
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
