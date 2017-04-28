//Capturing form input
$("#submit").on("click", function(event) {
    //TODO: User Validation
    function validate() {
    	//set a valid boolean
        var isValid = true;
        //checks to see each of the fields is filled out for name and photo
        $(".form-control").each(function() {
            if ($(this).val() === "") {
            	//if the field is empty then return false
                isValid = false;
            }
        });
        //checks to see if each field of the survey is filled
        $(".chosen-select").each(function() {
        	if ($(this).val() === "") {
        		//if any of the field is empty then return false
        		isValid = false;
        	}
        });
        //returns isValid
        return isValid;
    }
    //event.preventDefault();
    if (validate() === true) {
    	//if when the function is all true then...
    	//create an object with the user's name, photo and scores
        var userInput = {
            name: $("#name").val().trim(),
            photo: $("#photo").val(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        };
        //make an ajax call to api/friends and submit the userInput to the backend
        $.post("/api/friends", userInput, function(data) {
            //console.log("This is the data from the back" + data);
            //The backend will run a function to determine the best optimal match
            $("#matchName").text(data.name);
            $("#matchImg").attr("src", data.photo);

            $("#resultsModal").modal("toggle");
        })
    } else {
        //If user have empty fields. Input into the Modal and pop it up on screen. Better then using Alerts!
    	$("#matchName").text("Please fill out all the fields");
    	$("#resultsModal").modal("toggle");
    }

    //console.log(userInput);
});
