/*Reference: McArdle, F, Client Side Web Technologies Moodle
  Accessed: July 8th 2012	*/

$(document).ready( function() {
	$('#emailForm').submit( function() {
		if(!isEmail( this.email.value ) ) {
			return false;
		}
	});
});

function isEmail(string)
{
	// A variable containing a regular expression representing an email address
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 

	if (emailPattern.test(string))
	{
		return true;
	}
	else 
	{
		alert("Please enter a valid email address.");
		return false; // Stops form details from being submitted
	}
}