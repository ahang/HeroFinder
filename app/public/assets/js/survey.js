//Capturing form input
$("#submit").on("click", function(event) {
	//TODO: User Validation
	function userValidate() {
	}


	event.preventDefault();

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
	//TODO: Posting 
	$.post("/api/friends", userInput, function(data) {
		console.log("testing");
	})

	console.log(userInput);
});

