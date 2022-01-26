function validateForm() {
	let x = document.forms["myForm"]["name"].value;
		if (x == "") {
			swal({
				title: "oops!",
				text: "Please Enter missing data!",
				icon: "error",
			  });
		return false;
		}
		else if(x.length<3) {
			swal({
				title: "oops!",
				text: "Please enter Full Name!",
				icon: "error",
			  });
			return false;
		}

    // let y = document.forms["myForm"]["email"].value;
	// 	if (y == "") {
	// 		swal({
	// 			title: "oops!",
	// 			text: "Please Enter missing data!",
	// 			icon: "error",
	// 		  });
	// 	return false;
	// 	}
		

    let z = document.forms["myForm"]["text"].value;
		if (z == "") {
			swal({
				title: "oops!",
				text: "Please Enter missing data!",
				icon: "error",
			  });
		return false;
		}
		else if(z.length<10) {
			swal({
				title: "oops!",
				text: "Message Should be of min 10 words!",
				icon: "error",
			  });
			return false;
		}
        else {
            swal({
                title: "Message Sent!",
                text: "We are looking into query!",
                icon: "success",
                button: "OK",
            });
            return false;
        }
    }

    