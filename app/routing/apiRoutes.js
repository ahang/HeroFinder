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
        //TODO: Compare userArray.scores to each item in the heroArray.scores.
        //TODO: Do Math function and get a value.
        //TODO: Return smallest amount of difference between the two arrays
        friendData.push(request.body);

        console.log(request.body);
        var userArray = request.body.scores;
        var userInt = [];

        for (var i = 0; i < userArray.length; i++) {
            userInt.push(userArray[i]);
            console.log(userInt);
        }
        //console.log(userArray);
        //console.log(friendData);
        // for (var i = 0; i < friendData.length; i++) {
        //     console.log(`${friendData[i].name} || ${friendData[i].scores}`);
        // }

        // function compare() {
        //     for (var i = 0; i < friendData.length; i++) {
        //         if (friendData[i].scores === parseInt(friendData[i].scores, 10)) {
        //             console.log(`${friendData[i].name} contains an int`);
        //         } else {
        //             console.log(`${friendData[i].name} does not contain an int`)
        //         }
        //     }
        // }

        difference(userArray, friendData[1].scores);

        function difference(arr1, arr2) {
            for (var i = 0; i < arr1.length; i ++) {
                console.log(`This is values before .map ${arr1}`);
                //console.log(`This is subtracting before .map ${arr1.scores[i] - arr2.scores[i]}`);

                arr1 = arr1.map(function(n) {
                    return parseInt(n);
                });

                console.log(`This is values after .map ${arr1}`);
                console.log(`This is subtracting after .map ${arr1.scores[i] - arr2.scores[i]}`);
                //var distance = parseInt(arr1[i] - arr2[i])
                //console.log(`The ${[i]} distance is ${distance}`);
            }
        }
        response.send("HELP");
    });
};