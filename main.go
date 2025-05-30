package main

import (
	"fmt"
	"net/http"
)

func main() {

	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	http.HandleFunc("/", HandleRoot)
	http.HandleFunc("/portfolio", HandlePortfolio)


fmt.Println("Server running on: http://localhost:8080")
	http.ListenAndServe(":8080", nil)
	
}
