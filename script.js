document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill all the fields.");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    document.getElementById("success").innerHTML = "Form submitted successfully!";
    document.getElementById("contactForm").reset();

});

function addTask(){

    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if(task === ""){
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = task;

    let deleteBtn = document.createElement("button");

    deleteBtn.innerHTML = "Delete";

    deleteBtn.className = "deleteBtn";

    deleteBtn.onclick = function(){
        li.remove();
    };

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";

}