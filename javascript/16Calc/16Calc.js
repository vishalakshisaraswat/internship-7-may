
function calc(option) {
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    if(option == "add"){
        let out= Number(a) + Number(b);
        document.getElementsByClassName("output")[0].innerText = `Sum = ${out}`;
    }
    else{
        let out= Number(a) - Number(b);
        document.getElementsByClassName("output")[0].innerText = `Difference = ${out}`;
    }
}




















// function  add() {
//     let a = document.getElementById("first").value;
//     let b = document.getElementById("second").value;
//     let out = Number(a) + Number(b);
//     document.getElementsByClassName("output")[0].innerText = `Sum of the 2 numbers is ${out}`;
// }

// function  sub() {
//     let a = document.getElementById("first").value;
//     let b = document.getElementById("second").value;
//     let out = Number(a) - Number(b);
//     document.getElementsByClassName("output")[0].innerText = `Diff of the 2 numbers is ${out}`;
// }