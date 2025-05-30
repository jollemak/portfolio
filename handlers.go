package main

import "net/http"
import "html/template"

func HandleRoot(w http.ResponseWriter, r *http.Request) {

	tmpl, err := template.ParseFiles("templates/index.html")
	if err != nil {
		http.Error(w, "Template parsing error", http.StatusInternalServerError)
	}

	tmpl.Execute(w, nil)
	
}

func HandlePortfolio(w http.ResponseWriter, r *http.Request){

	tmpl, err := template.ParseFiles("templates/portfolio.html")
	if err != nil {
		http.Error(w, "Template parsing error", http.StatusInternalServerError)
	}

	tmpl.Execute(w, nil)
}