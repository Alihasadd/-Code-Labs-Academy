function validationform(){
  const input = document.getElementById('user-input').value;
const messageElement = document.getElementById("message")
  if (isNaN(input) || input < 1 || input >10){
    messageElement.innerText = "Invalid input";
  messageElement.style.color = "red";
  } else {
    messageElement.innerText = "Valid input";
    messageElement.style.color = "green";
  }
}