package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	// Get port from environment variable
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Set up your static file server
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	// Your existing handlers
	http.HandleFunc("/", HandleRoot)
	http.HandleFunc("/portfolio", HandlePortfolio)

	fmt.Printf("Server running on port: %s\n", port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		fmt.Printf("Error starting server: %v\n", err)
		os.Exit(1)
	}
}
