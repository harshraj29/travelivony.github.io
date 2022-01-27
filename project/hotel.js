function validateForm() {
		let x = document.forms["myForm"]["checkindate"].value;
			if (x == "") {
			alert("Missing Data | Please Check Again");
			return false;
			}
	
		let y = document.forms["myForm"]["checkintime"].value;
			if (y == "") {
			alert("Missing Data | Please Check Again");
			return false;
			}
	
		let z = document.forms["myForm"]["checkoutdate"].value;
			if (z == "") {
			alert("Missing Data | Please Check Again");
			return false;
			}
	
		let a = document.forms["myForm"]["checkouttime"].value;
			if (a == "") {
			alert("Missing Data | Please Check Again");
			return false;
			}
	
		let b = document.forms["myForm"]["wifi"].value;
			if (b == "") {
			alert("Missing Data | Please Check Again");
			return false;
			}
		}
		