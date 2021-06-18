// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = 'Like! ♡'
const FULL_HEART = 'Like! ♥'

// Your JavaScript code goes here!

const errorModal = () => document.querySelector("#modal")
const likeButtons = () => document.querySelectorAll("li")
const hearts = () => document.querySelectorAll(".like-glyph")

document.addEventListener("DOMContentLoaded", () => {
  addRemoveErrorMessage()
  likeButtons().forEach (line => {
    line.addEventListener("click", event => {
      mimicServerCall()
      .then( data => data)
      .catch(error => addRemoveErrorMessage())
      changeLikeStatus(event)
    })
  })
  
})

const changeLikeStatus = (event) => {
  if (event.target.classList.contains("activated-heart")) {
    event.target.classList.remove("activated-heart")
  } else {
    event.target.classList.add("activated-heart")
  } 
  event.target.innerText = (event.target.innerText === EMPTY_HEART ? FULL_HEART : EMPTY_HEART)
}


//adds error message if not displayed and displays error message if being displayed
const addRemoveErrorMessage= () =>{
  if (errorModal().classList.contains("hidden")) {
    errorModal().classList.remove("hidden") 
  } else {
    errorModal().classList.add("hidden") 
  }
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
