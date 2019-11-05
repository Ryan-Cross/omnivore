# this module tells NGINX what files are what as it serves HTML and CSS

# first it needs the central flask object
from omniapp import app

# lets import some handy 'tooling-objects' from Flask
from flask import render_template, url_for, request, flash

# now from here down we are directing traffic for NGINX

@app.route('/')
def index():
    return render_template("omnivoreindex.html")

@app.route('/contact')
def contact():
    return render_template("contact.html")

@app.route('/cheap')
def cheap():
    return render_template("cheap.html")

@app.route('/portfolio')
def portfolio():
    return render_template("portfolio.html")

@app.route('/whyweb')
def whyweb():
    return render_template("whyweb.html")