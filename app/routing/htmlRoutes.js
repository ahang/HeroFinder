// Your htmlRoutes.js file should include two routes:
// A GET Route to /survey which should display the survey page.
// A default USE route that leads to home.html which displays the home page.

var path = require("path");

module.exports = function(app) {
    app.get("/", function(request, response) {
        response.sendFile(path.join(__dirname, "/../public/home.html"));
    });
    app.get("/survey", function(request, response) {
        response.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    //If no matching route send user to home page
    app.use(function(request, response) {
        response.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};