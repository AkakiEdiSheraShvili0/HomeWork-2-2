

const currentYear = new Date();
let year = currentYear.getFullYear();



function myFunction() {
    let x = document.getElementById("myage").value;
    document.getElementById("age").innerHTML = year - x;
  }
