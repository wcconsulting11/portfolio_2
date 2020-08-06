alert('Thanks for stopping by!');

let submitButton = document.querySelector('#submit-button');

function emailValidation(email) {
  if(email.includes('@')) {
    return true;
  }
  else{
    return false;
  }
}


function clickListener(event) {
    
    event.preventDefault();

    let emailInput = document.querySelector('#email');
    let messageInput = document.querySelector('#message');
    
    let emailText = emailInput.value; 
    let messageText = messageInput.value;
    
    console.log('email:', emailText, 'message:', messageText);
}

let submitButton = document.querySelector('#submit-button')

submitButton.addEventListener('click', clickListener);

