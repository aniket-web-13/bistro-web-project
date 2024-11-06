/*let hamMenubtn = document.getElementsByClassName('hamMenubtn')
let hambtn = document.getElementById("hambtn")
let hamBox = document.getElementById('hamBox')
let hambtn2 = document.getElementsByClassName('hambtnx')
let hamHide = document.getElementsByClassName('hamHide')
console.log(hamHide);
let hamShow = document.getElementsByClassName('hamShow')
console.log(hamShow);
let storeButtonContent = hambtn;
let a = 0;
let hide = 'hide';
function hideShow() {
    hamBox.classList.toggle('hide');
    a = (a + 1) % 2
    if (a === 1) {
        hambtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        hamBox.classList.add("hamShow")
    } else {
        hambtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        hamBox.classList.remove("hamHide")
    }   
}

console.log(storeButtonContent);*/

/*hambtn.addEventListener('click', function () {
    a = (a + 1) % 2
    if (a !== 1) {
        hamBox.classList.remove('hamShow');       
    } else {
        hamBox.classList.remove('hamHide');       
    }
})/*




hambtn2.addEventListener('click', function () {
    a = (a + 1) % 2
    if (a !== 1) {
        hamBox.classList.remove('hamShow');       
    } else {
        hamBox.classList.remove('hamHide');       
    }
})


// hambtnx.addEventListener('click', function () {
//     hamBox.classList.toggle('hamHide');
//     if (storeBtnHide === hide) {
//         hambtnx = 'show';
//     } else if (storeBtnHide !== hide) {
//         hambtnx = 'hide';
//     }
// })


console.log(hamMenubtn);
console.log(hambtn);
console.log(hamBox);
console.log(hambtnx);


console.log(hide);





// ============================================================================= //

// let btn = document.getElementsByClassName('btn');
// let hgroup = document.getElementsByClassName('hgroup');
// let p = document.getElementsByTagName('p');


// btn[0].addEventListener('click', function () {
// hgroup[0].classList.toggle('hide');
// let storeButtonContent = btn[0].innerHTML;
// let hide = 'hide';
// if (storeButtonContent === hide) {
//     btn[0].innerHTML = 'show';
// } else if (storeButtonContent !== hide) {
//     btn[0].innerHTML = 'hide';
// }

// })

// function hideShow() {
//     hgroup[0].classList.toggle('hide');
//     let storeButtonContent = btn[0].innerHTML;
//     let hide = 'hide';
//     if (storeButtonContent === hide) {
//         btn[0].innerHTML = 'show';
//     } else if (storeButtonContent !== hide) {
//         btn[0].innerHTML = 'hide';
//     }
// }


/*
 ham btn icon change function

 let hamMenubtn = document.getElementsByClassName('hamMenubtn')
let hambtn = document.getElementById("hambtn")
let hamBox = document.getElementById('hamBox')
let hambtn2 = document.getElementsByClassName('hambtnx')


let hamHide = document.getElementsByClassName('hamHide')
console.log(hamHide);

let hamShow = document.getElementsByClassName('hamShow')
console.log(hamShow);
let storeButtonContent = hambtn;
let a = 0;
let hide = 'hide';  

function hideShow() {
    hamBox.classList.toggle('hide');
    a = (a + 1) % 2
    if (a === 1) {
        hambtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
        hambtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
}
}*/


let hambtn = document.getElementById('hambtn')
console.log(hambtn);

let hamBox = document.getElementById('hamBox')
hambtn.addEventListener('click', function(){
    let a = 1;
    if (a === 1) {
        hamBox.classList.toggle('hamShow')
    } else {
        hamBox.classList.toggle('hamHide')
    }
   
})
console.log(hamBox);

// function hideShow() {
//     hamBox.classList.toggle('show');


//     // a = (a + 1) % 2
//     // if (a === 1) {
//     //     hambtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      
//     // } else {
//     //     hambtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
       
//     // }   
// }