let offers = document.querySelector(".offers-items");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let index = 0;

function slide(to){
    let total = offers.children.length;
    index = (index + to + total) % total;
    offers.style.transform = `translateX(-${index * 100}%)`;
}

prev.onclick = () => slide(-1);
next.onclick = () => slide(1);

setInterval(() => slide(1),50000);

//////////////////////////////////////////////

let menu = [
    {
        name:"LASAL CHEESE",
        price:"$18.00",
        descriprion:"Lorem ipsum dolor amet consectetur consec.",
        img:"./image/food1.png"
    },
     {
        name:"JUMBO CRAB SHRIMP",
        price:"$24.00",
        descriprion:"Lorem ipsum dolor amet consectetur consec.",
        img:"./image/food2.png"
    },
     {
        name:"KOKTAIL JUICE",
        price:"$12.00",
        descriprion:"Lorem ipsum dolor amet consectetur consec.",
        img:"./image/food3.png"
    },
     {
        name:"CAPO STEAK",
        price:"$60.00",
        descriprion:"Lorem ipsum dolor amet consectetur consec.",
        img:"./image/food4.png"
    },
     {
        name:"ORGANIC FRUIT SALAD",
        price:"$8.00",
        descriprion:"Lorem ipsum dolor amet consectetur consec.",
        img:"./image/food5.png"
    },
     {
        name:"CHEESE PIZZA",
        price:"$18.00",
        descriprion:"Lorem ipsum dolor amet consectetur consec.",
        img:"./image/food6.png"
    },
     {
        name:"KOFTA MEAT",  
        price:"$40.00",
        descriprion:"Lorem ipsum dolor amet consectetur consec.",
        img:"./image/food7.jpeg"
    },
     {
        name:"SPANISH PIES",
        price:"$14.00",
        descriprion:"Lorem ipsum dolor amet consectetur consec.",
        img:"./image/food8.jpeg"
    },
     {
        name:"CHEESE TOST",
        price:"$6.00",
        descriprion:"Lorem ipsum dolor amet consectetur consec.",
        img:"./image/food9.jpeg"
    },
     {
        name:"FRUIT SALAD",
        price:"$14.00",
        descriprion:"Lorem ipsum dolor amet consectetur consec.",
        img:"./image/food10.jpeg"
    },
     {
        name:"CHICKEN SHAWARMA",
        price:"$20.00",
        descriprion:"Lorem ipsum dolor amet consectetur consec.",
        img:"./image/food11.jpeg"
    },
     {
        name:"MEGA CHEESE PIZZA",
        price:"$30.00",
        descriprion:"Lorem ipsum dolor amet consectetur consec.",
        img:"./image/food12.jpeg"
    }
]

let left = document.querySelector(".menu-items-left");
let right = document.querySelector(".menu-items-right");

for (let i = 0; i < menu.length; i++) {
    let item = `
        <div class="menu-item">
            <img src="${menu[i].img}" alt="">
            <div>
                <h3>${menu[i].name} <span>${menu[i].price}</span></h3>
                <p>${menu[i].descriprion}</p>
            </div>
        </div>
    `;

    if (i < 6) {
        left.innerHTML += item;
    } else {
        right.innerHTML += item;
    }
}

//////////////////////////////////////////////////////

let closebtn = document.getElementById("g-close");
let nextbtn = document.getElementById("g-next");
let prevbtn = document.getElementById("g-prev");
let container = document.getElementById("box-con");
let boxit = document.getElementById("boxit");
let image = document.querySelectorAll(".image img");

let images = [];
for (let i = 0; i < image.length; i++) {
    images.push(image[i]);
}

let currentindex = 0;

function showimg(index) {
    boxit.style.backgroundImage = `url(${images[index].src})`;
}

for (let m = 0; m < images.length; m++) {
    images[m].addEventListener("click", function () {
        container.style.display = "flex";
        currentindex = m;
        showimg(currentindex);
    });
}

closebtn.addEventListener("click", function () {
    container.style.display = "none";
});

nextbtn.addEventListener("click", function () {
    currentindex++;
    if (currentindex === images.length) {
        currentindex = 0;
    }
    showimg(currentindex);
});

prevbtn.addEventListener("click", function () {
    currentindex--;
    if (currentindex < 0) {
        currentindex = images.length - 1;
    }
    showimg(currentindex);
});

container.addEventListener("click", function (event) {
    if (event.target === container) {
        container.style.display = "none";
    }
});

document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error");
    let subjectError = document.getElementById("subject-error");
    let messageError = document.getElementById("message-error");

    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    let valid = true;

    if(name === ""){
        nameError.textContent = "Please enter your name";
        valid = false;
    }
    if(email === ""){
        emailError.textContent = "Please enter your email";
        valid = false;
    }
    if(subject === ""){
        subjectError.textContent = "Please enter your subject";
        valid = false;
    }
    if(message === ""){
        messageError.textContent = "Please enter your message";
        valid = false;
    }

    if(valid){
        alert("Form submitted successfully!");
    }
});