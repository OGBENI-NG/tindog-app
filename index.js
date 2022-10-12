// Remember to import the data and Dog class!
import dogsData from "./data.js";
import DogCharacter from "./Dog.js";
import {likeAvatar, nopeAvatar, welcomePage, lastPage} from "./Utility.js" 

let dogIndex = ['Bella', 'Teddy', 'Ojugbako', 'Dudu']
const mainHtml = document.getElementById("dogs-profile")

let isWaiting = false

function welcomeIntro() {
    mainHtml.innerHTML = welcomePage()
}
welcomeIntro()

function backBtn() {
   welcomeIntro()

}

function joinUs() {
    document.getElementById("join-us-btn").addEventListener("click", getNextDogHtml)
}
joinUs()

function getNextDogHtml() {
    const dogs = new DogCharacter(dogsData.shift())
    mainHtml.innerHTML = dogs.dogCharacterHtml()
    render() 
}

function likeBtn() {
    mainHtml.innerHTML += likeAvatar()
    nextDogProfile()
}

function nopeBtn() {
    mainHtml.innerHTML += nopeAvatar()
    nextDogProfile()
}

function nextDogProfile() {
    if(isWaiting) {
        
    } else if(dogIndex.pop()) {
        setTimeout(() => {
            getNextDogHtml()
        },1500)
    } else {
        setTimeout( () => {
            mainHtml.innerHTML = lastPage()
            backHome()
        }, 1000)  
    }
    
}



function render() {
    document.getElementById('like-btn').addEventListener("click", likeBtn)
    document.getElementById('cross-btn').addEventListener("click", nopeBtn)
    
}

function backHome() {
    document.getElementById('back-home').addEventListener("click", backBtn)
    
}














