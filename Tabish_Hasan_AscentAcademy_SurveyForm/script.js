// FORM VALIDATION

const form = document.getElementById('form');
const username = document.getElementById('name');
const age = document.getElementById('age');
const email = document.getElementById('email');
const number = document.getElementById('number');

const Q1 = document.getElementById('Q1');
const Q2 = document.getElementById('Q2');
const Q3 = document.getElementById('Q3');
const Q4 = document.getElementById('Q4');



form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
    validPopup();

})



// SETERROR
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');

}

// SETSUCCESS
const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.remove('error');

}

// VALID EMAIL
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



const validateInputs = () => {

    //TRIMMING INPUT VALUE
    const nameValue = username.value.trim();
    const ageValue = age.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    const Q1Value = Q1.value.trim();
    const Q2Value = Q2.value.trim();
    const Q3Value = Q3.value.trim();
    const Q4Value = Q4.value.trim();
    
    
    // NAME
    if(nameValue === ''){
        setError(username, 'Name is required')
    }
    else{
        setSuccess(username);
    }

    // AGE
    if(ageValue === ''){
        setError(age, 'Age is required')
    }
    else{
        setSuccess(age);
    
    }


    const validQuestion = (value, q) => {
        if(value === ''){
            setError(q, 'Answer is required')
        }
        else if(value.length < 30){
            setError(q, 'Answer must be between 30 and 100 characters')
        }
        else{
            setSuccess(q);

        }
    }

    // QUESTIONS
    validQuestion(Q1Value, Q1);
    validQuestion(Q2Value, Q2);
    validQuestion(Q3Value, Q3);
    validQuestion(Q4Value, Q4);


    // EMAIL
    if(emailValue === '') {
        setError(email, 'Email is required');
    }
    else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } 
    else {
        setSuccess(email);

    }

    // CONTACT NUMBER
    if(numberValue === '') {
        setError(number, 'Contact is required');
    }
    else if (numberValue.length < 10) {
        setError(number, 'Contact must be atleast 10 numbers');
    } 
    else if (numberValue.length > 10) {
        setError(number, 'Contact must be atmost 10 numbers');
    } 
    else {
        setSuccess(number);
    }


}


// POPUP


const validPopup = () => {
    
        const popup = document.querySelector(".popup");
        const openPopup = document.getElementById("open-popup");
        const closePopup = document.getElementById("close-popup");
        
        
        openPopup.addEventListener("click", () => {
            popup.classList.add("active");
        })
        closePopup.addEventListener("click", () => {
            popup.classList.remove("active");
        })
    
}

