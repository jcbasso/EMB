package src

import (
	"github.com/gorilla/mux"
	"net/http"
)

func CreateServer() http.Handler {
	r := mux.NewRouter()
	r.HandleFunc("/swagger.json", SwaggerHandler)

	api := r.PathPrefix("/api").Subrouter()
	api.HandleFunc("/calc/{op}/{arg1}/{arg2}", CalcHandler)
	api.HandleFunc("/cookie/{name}/{val}/{site}", CookieHandler)         // string / string / string
	api.HandleFunc("/costfuns/{i}/{s}", CostFunsHandler)                 // int32 / string
	api.HandleFunc("/dateparse/{dayname}/{monthname}", DateParseHandler) // string / string
	api.HandleFunc("/filesuffix/{directory}/{file}", FileSuffixHandler)  // string / string
	api.HandleFunc("/notypevar/{i}/{s}", NotyPevarHandler)               // int32 / string
	api.HandleFunc("/ordered4/{w}/{x}/{z}/{y}", Ordered4Handler)         // string all
	api.HandleFunc("/pat/{txt}/{pat}", PatHandler)                       // string all
	api.HandleFunc("/pat/{txt}", RegexHandler)                           // string all
	api.HandleFunc("/text2txt/{word1}/{word2}/{word3}", Text2TxtHandler) // string all
	api.HandleFunc("/title/{sex}/{title}", TitleHandler)                 // string all

	return r
}
