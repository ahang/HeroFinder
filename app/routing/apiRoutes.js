//Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var friendData = require("../data/friends");
//console.log(friendData);

module.exports = function(app) {
    app.get("/api/friends", function(request, response) {
        response.json(friendData);
    });

    app.post("/api/friends", function(request, response) {
        //setting the user submission to a userArray to grab the necessary values
        var userArray = request.body.scores;
        //preparing object to send with the comparison score at 25.
        //the lower the abs score the better
        var bestMatch = {
            "name": "",
            "photo": "",
            "abs": 25
        }
        //starting for loop to go through the friendData object
        for (var i = 0; i < friendData.length; i++) {
            //console.log(`Starting for loop with heroArray ${[i]}`);
            var heroArray = friendData[i].scores;
            //getting ABS array using absolute difference between the two
            var absArray = distance(userArray, heroArray);
            //console.log(absArray);
            //getting the sum of the newly created array
            var bestDifference = sum(absArray);
            //console.log(`The sum of ${friendData[i].name} is ${sum(absArray)}`);
            //if the sum of the newly created array is less then the standard 25
            //push the new data to the bestMatch object
            if (bestDifference < bestMatch.abs) {
                bestMatch = {
                    "name": friendData[i].name,
                    "photo": friendData[i].photo,
                    "abs": bestDifference
                }
            }
            //console.log(bestMatch);
        }
        //push user data to the array
        friendData.push(request.body);
        //send the bestMatch object to the front end
        response.send(bestMatch);
    });
};

//Using .map to create a new array by taking the abs value on every element of the array
//Thanks stackoverflow! 
function distance(arr1, arr2) {
    return arr2.map(function(el, i) {
        return Math.abs(el - arr1[i]);
    });
}

//Using sum function to add each element of the absolute value array. 
function sum(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}