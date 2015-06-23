function ajax_post(){
    // Create our XMLHttpRequest object
    var hr = new XMLHttpRequest();
    // Create some variables we need to send to our PHP file
    var url = "./app.js";
    var msg = document.getElementById("chat_line").value;
    var vars = "msg="+msg;
    hr.open("POST", url);
    // Set content type header information for sending url encoded variables in the request
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
		    var return_data = hr.responseText;
			document.getElementById("status").innerHTML = return_data;
			console.log(return_data);
	    }
    }
    // Send the data to PHP now... and wait for response to update the status div
    hr.send(vars); // Actually execute the request
    document.getElementById("status").innerHTML = "processing...";
}

/*$(function () {
	$('#main_form').submit(function (e) {
		var form = $(this);
		e.preventDefault();
		var d = document.getElementById('chat_line');
		var data = d.value;
		console.log(data);
		$('#chatbox').append("<div id='m" + idTracker + "'>" + data + "</div>");
		var msg = document.getElementById('m' + idTracker);
		msg.style.fontFamily = "Arial";
		idTracker++;
	})
});*/
/*function sendData(o) {
	var d = document.getElementById("chat_line");
	msgData.value = d.innerHTML;
	$.ajax({
		url: "./app.js"
		type: 'POST'
		contenttype: 'application/json; charset=utf-8',
		data: msgData,
		dataType: 'JSON'
	});
	console.log(JSON.stringify(msgData) + " was just sent to url: ./app.js");
}*/