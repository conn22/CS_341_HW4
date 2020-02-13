//Author: James Conn

function getData(data, status){
	console.log(status);
}

$(document).ready(function(){
  	$("#order").click(function(){
		var url = "/orders";
		var month = $("#drop-opts a:selected").text();
		debugger;
		$.post(url, {month: month}, getData);
		var vegan = false;
			//<!--The following code inspired by: https://stackoverflow.com/a/9196996-->
		var lines = $("#instrs").val().split('\n');
		for(var i = 0; i < lines.length; i++){
			if(lines[i].indexOf("vegan") > -1)
				vegan = true;
		}
		if(vegan){
			alert("Warning: Cheesecake by nature contains dairy");
		}else{
				//<!--Code concept coming from:-->
				//<!--https://www.tutorialrepublic.com/faq/how-to-get-the-value-of-selected-radio-button-using-jquery.php-->
			var n = $("#n option:selected").text();	
			var type = $("input[name='flavor']:checked").val();
    			$("#options").text("Thank you! Your order has been placed:");
			$("#notes").text("You have ordered " + n + " " + type + " cheesecakes");
			$("#order").hide();
			$("#fauxTable").hide();
			$("#instrs").hide();
		}
	});
});

//Much like baking a cake, when coding one should read the "recipe" and 
//make sure they have all the necessary "ingredients" before beginning

//Which is just a fancy way of saying that I didn't have the code for 
//the order display working and now I can't really do part three.
