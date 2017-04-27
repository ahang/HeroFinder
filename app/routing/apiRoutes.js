//Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friendData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(request, response) {
        response.json(friendData);
    });

    app.post("/api/friends", function(request, response) {
        var bestMatch;
        friendData.push(request.body);
        var userArray = request.body.scores;
        var dataArray = friendData[0].scores;
        convertInt(userArray);
        convertInt(dataArray);
        var absArray = distance(userArray, dataArray);
        console.log(absArray);


       // console.log(values);


        response.send("HELP");
    });
};


//TODO: distance function

function distance(arr1, arr2) {
    // var values = [];
    // console.log(`This is array 1 | ${arr1}`);
    // console.log(`This is array 2 | ${arr2}`);
    // console.log("Starting loop...");
    return arr2.map(function (el, i) {
        return Math.abs(el - arr1[i]);
    });

    // for (var i = 0; i < arr1.length; i++) {
    //     console.log(`working on ${arr[i]} and ${arr2[i]}`);
    //     values.push(Math.abs[arr1[i] - arr2[i]]);
    //     console.log(values);
    // }
}

function convertInt(arr) {
    arr = arr.map(function(n) {
        return parseInt(n);
    });
}
//TODO: Convert array to int
//TODO: missing something
//TODO: Compare userArray.scores to each item in the heroArray.scores.
//TODO: Do Math function and get a value.
//TODO: Return smallest amount of difference between the two arrays