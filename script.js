function validateForm(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

if(name==""){
    alert("Please Enter Your Name");
    return false;
}

if(email==""){
    alert("Please Enter Your Email");
    return false;
}

alert("Message Sent Successfully!");

return true;
}
function darkMode() {
    document.body.classList.toggle("dark");
}
function searchFood(){

let food=document.getElementById("searchBox").value;

if(food=="pizza"){
    alert("Pizza Available - ₹299");
}
else if(food=="burger"){
    alert("Burger Available - ₹149");
}
else if(food=="pasta"){
    alert("Pasta Available - ₹199");
}
else{
    alert("Item Not Available");
}

}