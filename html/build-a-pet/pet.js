console.log("pet script running")
//declares or stores all elements used in program
const petButton = document.querySelector("#pet") //selects "pet" id from page, stores in constant called "petButton"
const playButton = document.querySelector("#play") //selects "play" id from page, stores in constant called "playButton"
const feedButton = document.querySelector("#feed") //selects "feed" id from page, stores in constant called "feedButton"
const petStatus = document.querySelector("#pet-status") //selects status div from HTML page, stores in a constant "status"
const playStatus = document.querySelector("#play-status")
const feedStatus = document.querySelector("#feed-status")
const imageDiv = document.querySelector("#image-container") //selects image-container from HTML page, stores in a constant "imageDiv"


console.log(petButton) //confirmation of storing petButton --- will print to screen, or "log" activity
console.log(pet-status) //confirmation of storing status --- will print to screen/log activity
console.log(pet-status.innerHTML) //confirmation of storing HTML within status div --- will print to screen/log activity
console.log(playButton) //confirmation of storing playButton
console.log(play-status)
console.log(play-status.innerHTML)
console.log(feedButton) //confirmation of storing feedButton
console.log(feed-status)
console.log(feed-status.innerHTML)


let petCount = 0 //let terminology allows value to be changed, as opposed to const for constants
let playCount = 0
let feedCount = 0

petButton.addEventListener('click', (e) =>{
    console.log("Pet button pressed!")
    petCount += 1 //increments count right after button is pressed
    console.log(`Pet button pressed ${petCount} times!`) //prints current count within a sentence --- $ {} used to contain a variable val in a string; NOTE: backtick below tilde, top left of keyboard
    petStatus.innerHTML = `<h3>You pet the bunny ${petCount} times!</h3>` //Cool - this updates the text in the status div ON THE HTML page - YESSSS
    if (petCount == 9) {
        petStatus.innerHTML = `<h3>I think Bun's getting tired. Maybe lay off.</h3>`
    } else if (petCount > 10) {
        petStatus.innerHTML = `<h3>Ok, no more pets, please!</h3>`
        imageDiv.innerHTML = `<img src="img/grumpyBun.jpg" />`
    } else {
        petStatus.innerHTML = `<h3>You pet the bunny ${petCount} times!</h3>`
    }
})

playButton.addEventListener('click', (e) =>{
    console.log("Let's run around!")
    playCount += 1
    console.log(`Play button pressed ${playCount} times!`)
    playStatus.innerHTML = `<h2>You played with my bunny for ${playCount} seconds!</h2>`
    if(playCount > 2 && playCount < 5) {
        playStatus.innerHTML = `<h2> Wow! You 2 are becoming pals!</h2>`
    } else if(playCount == 5) {
        playStatus.innerHTML = `<h4> Ok, Bun's getting a little loopy!</h4>`
    } else if(playCount > 5) {
        playStatus.innerHTML = `<h1>He's pooped. Lordy!</h1>`
        imageDiv.innerHTML = `<img src="img/tiredBun.jpg" />`
    }
})

feedButton.addEventListener('click', (e) =>{
    console.log("Carrots?! Why...please and thankee.")
    feedCount += 1
    console.log(`Feed button pressed ${feedCount} times!`)
    feedStatus.innerHTML = `<h3>You fed my bunny ${feedCount} carrots.</h3>`
    if(feedCount == 3) {
        feedStatus.innerHTML = `<h4> I'm hitting my limit, friend.</h4>`
    } else if(feedCount > 3 && feedCount < 6) {
        feedStatus.innerHTML = `<h5> Whoa...room's spinning...</h5>`
    } else if (feedCount >= 6) {
        feedStatus.innerHTML = `<h6>Game. Over.</h6>`
        imageDiv.innerHTML = `<img src="img/fatBun.jpg" />`
    }
})




