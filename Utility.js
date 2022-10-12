

function btn() {
    return`
    <div class="btn-container">
        <button id="cross-btn" aria-label="dislike-button"></button>
        <button id="like-btn" aria-label="like-button"></button>
    </div>`
}

function likeAvatar() {
    return`
    <div class="like-avatar">
        <img class="like-img" src="images/badge-like.png">
    </div>`
}

function nopeAvatar() {
    return`
    <div class="like-avatar">
        <img class="like-img" src="images/badge-nope.png">
    </div>`
}


function welcomePage() {
    return`
    <div class="welcome-page">
        <h2>Wecome to Tindog</h2>
        <h5 class="welcome-text">If you're looking to find new
        friends in a pinch, for your dogs join tindog</h5>  
    </div>
    <div class="btn-container">
        <button id="join-us-btn">Join us</button>
    </div>`
}

function lastPage() {
    return`
    <div class="end-page">
        <h2 class="end-page-text">Congratulations</h2>
        <p>Thansk for visiting Tindogs website don't forget to rate us.</p>
    </div>
    <div class="btn-container">
        <button id="back-home">Back Home</button>
    </div>`
}





export {btn, likeAvatar, nopeAvatar, welcomePage, lastPage}