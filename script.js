// JavaScript DOM Assignment-3
// Name: Rizwan Ulah
// Roll No : 493961
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

// Task-1 Add a Class
function changeTextColor(){
    document.getElementById("para-1").setAttribute("class", "highlight")
}

// .................................................................................................

// Task-2 Remove a Class
function RemoveTextColor(){
    document.getElementById("para-1").removeAttribute("class", "highlight")
}

// .................................................................................................

// Task-3 Toggle a Class
function ToggleColor(){
    document.getElementById("para-1").classList.toggle( "highlight")
}

// .................................................................................................

// Task-4 Check Class Exists
function CheckClass() {
    let element = document.getElementById("para-1");
    if (element.classList.contains("highlight")) {
        alert("Class exists!");
    } else {
        console.log("Class not found.");
    }
}

// .................................................................................................

// Task-5 Button Active State (Real World)
function active(){
    document.getElementById("btn").classList.toggle(
         "active-btn")
}

// .................................................................................................

// Task-6 Dark Mode (Industry Example)
function DarkMode(){
    document.body.classList.toggle(
         "dark-mode")
    
}

// .................................................................................................
// Assignment-4 is completed