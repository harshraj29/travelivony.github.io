function validateForm() {
	let x = document.forms["myForm"]["nameoncard"].value;
		if (x == "") {
			swal({
				title: "oops!",
				text: "Please Enter missing data!",
				icon: "error",
			  });
		return false;
		}
		else if (x.length<3){
			swal({
				title: "oops!",
				text: "Name must be of minimum 3 characters",
				icon: "error",
			  });
		return false;
		}

	let y = document.forms["myForm"]["cardnumber"].value;
		if (y == "") {
			swal({
				title: "oops!",
				text: "Please Enter missing data!",
				icon: "error",
			  });
		return false;
		}
		else if (y.length!=16){
			swal({
				title: "oops!",
				text: "Card number must be 16 digits long",
				icon: "error",
			  });
		return false;
		}
	let z = document.forms["myForm"]["expmonth"].value;
	const month=["January","February","March","April","May","June","July","August","September","October","November","December"]	
		if (z == "") {
			swal({
				title: "oops!",
				text: "Please Enter Expiring month!",
				icon: "error",
			  });
		return false;
		}
		
		else if (month.includes(z)==false){
			swal({
				title: "oops!",
				text: "Enter month name as per viewed format",
				icon: "error",
			  });
		return false;
		}
		

	let a = document.forms["myForm"]["expyear"].value;
		if (a == "") {
			swal({
				title: "oops!",
				text: "Please enter Expiry Year!",
				icon: "error",
			  });
		return false;
		}
		else if (a.length<4) {
			swal({
				title: "oops!",
				text: "Please enter expiry year as per prescribed format",
				icon: "error",
			  });
		return false;
		}
		
	let b = document.forms["myForm"]["cvv"].value;
		if (b.length != 3) {
			swal({
				title: "oops!",
				text: "Please enter CVV properly",
				icon: "error",
			  });
		return false;
		}
		else{
			swal({
				title: "Payment Successful!",
				text: "We have recived Your Booking!",
				icon: "success",
				button: "OK",
			});
			
		}
	
    }