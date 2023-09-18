// let helloBtn = document.querySelector('button');
// helloBtn.addEventListener('click',showMsg);

// function showMsg(){
//     alert("Hello world!");
// }


let helloBtn = document.querySelector('button');
helloBtn.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt('Enter Name of student');
    helloBtn.textContent = 'Roll No. 1:' + name;
}