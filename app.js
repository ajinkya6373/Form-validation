console.log("This is my 4 th Project");
const name = document.getElementById("name");
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const car = document.getElementById("car")
const address = document.getElementById("address")
const message = document.getElementById("message")
let validEmail = false;
let validPhone = false;
let validUser = false;

name.addEventListener('blur', () => {
    // console.log("blur");
    //validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/    // here ()are group ,[] character set ,{} Quantifiers
    let str = name.value
    console.log(regex, str)
    if (regex.test(str)) {
        console.log("Your name is valid");
        validUser = true;
        name.classList.add("is-valid");
        name.classList.remove("is-invalid");
    } else {
        console.log("Your name is not valid");
        validUser = false;
        name.classList.add("is-invalid");
        name.classList.remove("is-valid");
    }
})

email.addEventListener('blur', () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value
    console.log(regex, str)
    if (regex.test(str)) {
        console.log("Your email is valid");
        validEmail = true;
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
    } else {
        validEmail = false;
        console.log("Your email is not valid");
        email.classList.add("is-invalid");
        phone.classList.remove("is-valid");
    }
})

phone.addEventListener('blur', () => {
    let regex = /^([0-9]){10}$/;
    let str = phone.value
    console.log(regex, str)
    if (regex.test(str)) {
        console.log("Your phone is valid");
        validPhone = true;
        phone.classList.add("is-valid");
        phone.classList.remove("is-invalid");
    } else {
        validPhone = false;
        console.log("Your phone is not valid");
        phone.classList.add("is-invalid");
        phone.classList.remove("is-valid");
    }
})

let submit = document.getElementById("submit")
submit.addEventListener('click', (e) => {
    e.preventDefault();
    // let myobj = {
    //     Name : name.value,
    //     Email :email.value,
    //     Car :car.value,
    //     Address:address.value,
    //     phone : phone.value,
    //     Message: message.value
    
    // }
    // console.log(myobj);
    // info.push(myobj);



  
    let suc = document.getElementById('suc')
    suc.innerHTML= ""
    if (validEmail && validPhone && validUser) {
        console.log('Phone, email and user are valid. Submitting the form');
        suc.innerHTML = `<div id="success" class="alert show alert-success alert-dismissible fade" role="alert">
        <strong>Success!</strong> Your travel request has been successfully submitted
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
        </button>
    </div>`

    }
    else {
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        suc.innerHTML= `<div id="failure" class="alert show alert-danger alert-dismissible fade" role="alert">
        <strong>Error!</strong> Your travel request has not been sent due to errors
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
        </button>
    </div>`
    }

})
