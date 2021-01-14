
/*
function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["form"].elements.length; 
        loopCounter++) {
        if (document.forms["form"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["form"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 


function resetForm() {
    clearErrors();
    document.forms["contact"]["name"].value = "";
    document.forms["contact"]["email"].value = "";
    document.forms["contact"]["phone"].value = "";
    document.forms["contact"]["selection"].value = "";
    document.forms["contact"]["hasVisited"].value = "";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["contact"]["name"].focus();
}
*/

function validateItems() {
    //clearErrors();
    var fname = document.forms["contact"]["fname"].value;
    var email = document.forms["contact"]["email"].value;
    var phone = document.forms["contact"]["phone"].value;
    var inquiry = document.forms["contact"]["inquiry"].value;
    
    var radios = document.getElementsByName("answer");
    var formValid = false;
    var i = 0;

    var checkBoxes = document.getElementById("contactDays");

    if (fname == ""  ) {
        alert("Name must be filled out");
        return false;
    }
    if (email == "") {
        alert("email must be filled out");
        return false;
    }
    if (phone == "") {
        alert("phone must be filled out");
        return false;
    }
    if (inquiry == "select1" ) {
        alert("Select reason for inquiry");
        return false;
    }
    //Ask about this later how to check for validation properly on radio buttons
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) {
        alert("Must check some option!");
        return formValid;
    }

    
   /*Check why form can't be submitted unless monday is checked
   if (document.getElementById("contactDays").checked == false) {
       alert("Please Check Available Days");
       return false;
   }
   else {
       alert("form has been validated and submitted!")
   }
   */
   
  alert("form has been validated and submitted!");
  return false;
}
