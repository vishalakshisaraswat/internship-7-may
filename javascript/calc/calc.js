function calc(option) {
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    let output ;
    if (option == "Add") {
        output = 'Sum of number ${Number(a) + Number(b)}';
    }
    else {
        output = 'Sub of number is ${Number(a) - Number(b)}';
    }
}















// function add() {
//     let a = document.getElementById("first").value;
//     let b = document.getElementById("second").value;
//     let output = Number(a) + Number(b);
//     document.getElementsByClassName("out").innerText = 'Sum of numbers is ${output}';
// }

