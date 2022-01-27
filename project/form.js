function validateForm(){
	let x = document.forms["myForm"]["name"].value;
		if (x == "") {
		alert("Name must be filled out");
		return false;
		}
		else if(x.length<3) {
			alert("Name must be of minimum 3 characters");
			return false;
		}

    let y = document.forms["myForm"]["mail"].value;
		if (y == "") {
		alert("Email must be filled out");
		return false;
		}
		else if(y.includes("@" && ".")!=true){
			alert("Email is invalid");
			return false;
		}
		else if(y.includes("gmail" || "edu")==false){
			alert("Email is invalid");
			return false;
		}

    let z = document.forms["myForm"]["Phone Number"].value;
		if (z == "") {
			alert("Phone Number must be filled out");
		    return false;
		}
		else if((String(z)).length<10){
		 	alert("Phone Number must be 10 digits long");
		 	return false;
		}
		



    let d = document.forms["myForm"]["departing"].value;
    var date=new Date();
		if (d == "") {
			alert("Departing date must be filled out");
			return false;
		}
		else if (d<date) {
			alert("Departing date selected has passed.")
			return false;
		}

	let e = document.forms["myForm"]["returning"].value;
		if (e == "") {
			alert("Returning date must be filled out");
			return false;
		}

		if (e<d){
			alert("Returning Date entered incorrectly")
			return false;
		}

	}
	
	


//hotel page form validation

	function hotelvalidateForm() {
		let x = document.forms["hotelForm"]["checkindate"].value;
			if (x == "") {
			alert("Please fill in checkin date");
			return false;
			}
			else if (x < new Date()){
				alert("Checkin date selected has passed.");
				return false;
			 }
	
		let y = document.forms["hotelForm"]["checkintime"].value;
			if (y == "") {
			alert("Please fill in checkin time");
			return false;
			}

	
		let z = document.forms["hotelForm"]["checkoutdate"].value;
			if (z == "") {
			alert("Please fill in check out date");
			return false;
			}

			else if (z<x){
				alert("Checkout Date entered incorrectly")
				return false;
			}
	
		let a = document.forms["hotelForm"]["checkouttime"].value;
			if (a == "") {
			alert("Please fill in checkout time");
			return false;
			}

		let c = document.forms["hotelForm"]["room"].value;
		    if (c==""){
			alert("Choose the required accomodation");
			return false;
			}
	
		let b = document.forms["hotelForm"]["wifi"].value;
			if (b == "") {
			alert("Choose whether wifi access required or not");
			return false;
			}
		
		}
		