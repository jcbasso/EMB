package src

import (
	"github.com/gorilla/mux"
	"net/http"
)

func CreateServer() *mux.Router {
	r := mux.NewRouter()
	r.HandleFunc("/swagger.json", SwaggerHandler)

	api := r.PathPrefix("/api").Subrouter()
	api.HandleFunc("/health", func(_ http.ResponseWriter, _ *http.Request) { return })
	api.HandleFunc("/triangle/{a}/{b}/{c}", TriangleClassificationHandler)
	api.HandleFunc("/bessj/{n}/{x}", BessJHandler)
	api.HandleFunc("/expint/{n}/{x}", ExpintHandler)
	api.HandleFunc("/fisher/{m}/{n}/{x}", FisherHandler)
	api.HandleFunc("/gammq/{a}/{x}", GammqHandler)
	api.HandleFunc("/remainder/{a}/{b}", RemainderHandler)

	return r
}
