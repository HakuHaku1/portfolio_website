from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/profile")
def profile():
    return render_template("profile.html")

@app.route("/portfolio")
def portfolio():
    return render_template("portfolio.html")


@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/user/<name>")
def user(name):
    return render_template("user.html", name=name)

@app.route("/user")
def user_default():
    return render_template("user.html", name="Guest")


@app.route("/gamedev")
def gamedev():
    return render_template("portfolio_game.html")

@app.route("/mobiledev")
def mobiledev():
    return render_template("portfolio_mobile.html")
@app.route("/website")
def website():
    return render_template("portfolio_website.html")

@app.route("/preview")
def preview():
    return render_template("preview.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True, ssl_context='adhoc')




