let error = document.querySelector(".error");
let input = document.querySelector("input");
let errorMsg = document.querySelector(".errorMsg");
let arrow = document.querySelector(".arrow");


function alert(){
    if(input.value == "" || input == null){
        input.style.borderColor = "red";
        error.style.visibility = "visible";
        errorMsg.innerHTML = "Please enter a valid email";
    }
    else(
        input.style.borderColor = "lightgray",
        error.style.visibility = "hidden",
        errorMsg.innerHTML = ""
    )
}

arrow.addEventListener("click", alert);

