
/* Testing for data submission */

document.addEventListener('DOMContentLoaded', submitData);

function submitData() {
var button = document.getElementById("subButton");

button.addEventListener("click", function() {

        var request = new XMLHttpRequest();

        request.open('GET', "flip3.engr.oregonstate.edu:38748/confirmation",true);
        var userEmail = document.getElementById("email").value;
        var confEmail = document.getElementById("confirm").value;

/*        if(userEmail != confEmail || userEmail == "") {
                alert("Emails do not match");
                event.preventDefault();
        }

        else {
                alert("working");
                event.preventDefault();
        }
*/
});
};
