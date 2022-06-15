let cardImages = document.getElementsByTagName("img")
let count = 0
let cardsValueNew
let allUserCards
let userTotal
let cards
let dealerTotal 
let newCount = 1
let wagerAmount = 5
function dealCards(data){
    console.log(data)
    document.getElementById("dealBtn").disabled = true
    count = 0
    cards = data.cards
    let cardValues = []
    let intialValues = []
    for(let i = 0; i< cardImages.length;i++){
        cardImages[i].src =  cards[i].image
        cardImages[1].src = "https://media.istockphoto.com/photos/bicycle-rider-back-playing-card-design-picture-id157772536?s=612x612"
    }
    for (let i = 0; i < cards.length; i++){
        intialValues[i] = cards[i].value
    }
    intialValues.forEach(item => {
        if(item === "QUEEN" || item === "KING" || item === "JACK"){
            item = "10"
            cardValues.push(item)
        }
        else if (item === "ACE"){
            item = "11"
            cardValues.push(item)
        }
        else{
            cardValues.push(item)
        }
    })
    cardsValueNew = cardValues
    console.log(cardsValueNew)
    
    

    nextAction()
}   

function nextAction(){
    let dd = document.getElementById("doubledown")
    dd.addEventListener("click", doubleDown)
    let hitStayArray = [...document.getElementsByClassName("array")];
    hitStayArray.forEach(button => {
        button.addEventListener("click", userAction)
    })
}
function userAction(button){
    if (button.target.id === "hitBtn"){
        userHit();
    }
    if (button.target.id === "stayBtn"){
        stayClick()
    }
}
function increase(){ 
    return count++
}
function doubleDown() {
    wagerAmount = wagerAmount * 2 
    document.querySelector("#betSizeTitle").textContent = "Wager Amount:  " +  wagerAmount
    userHit()
    let ddCount = parseInt(allUserCards[0])+ parseInt(allUserCards[1]) + parseInt(allUserCards[2])
    if (ddCount < 22){
        stayClick()
    }
}
function userHit(){
    allUserCards = [ 1, 2, 3, 4, 5, 6, 7]
    increase()

    for (let i = 0; i <allUserCards.length; i++){
        allUserCards[i] = cardsValueNew[i+7]
    }
    userTotal = parseInt(allUserCards[0])+ parseInt(allUserCards[1])
    hitAndCount(allUserCards, userTotal)
    console.log(allUserCards)
}
function hitAndCount(allUserCards, userTotal){
    for(i = 0; i <= count - 1; i++){
        userTotal = userTotal + parseInt(allUserCards[i+2])
    }
    for(i = count; i <= count ; i++){
        cardImages[i + 8].classList.remove('hidden')
        
    } 
    if (userTotal > 21){
        console.log(userTotal)
            if (userTotal > 21 && true === allUserCards.includes("11")){
                var theNewTotal = userTotal
                for(i=0; i <= count +1; i++){
                    if(allUserCards[i] === "11"){
                        if (theNewTotal > 21) {
                            allUserCards[i] = 1
                            theNewTotal = theNewTotal - 10
                        }
                    }
                    userTotal = 0
                    for (let i = 0; i <= count+1; i++){
                        userTotal = userTotal + parseInt(allUserCards[i])
                    }
                }             
            } 
            if(userTotal > 21){
                document.getElementById("hitBtn").disabled = true;
                document.getElementById("stayBtn").disabled = true;
                setTimeout(() => {
                    alert("You Busted")}, 1000)  
                    dealerWin()
                    myResetFunc()
            }
    }
    console.log(userTotal)
}
function stayClick(){    
    if (count === 0){
        userTotal = parseInt(cardsValueNew[7])+ parseInt(cardsValueNew[8])
    }
    if (count > 0 ){
        for (let i = 0; i <= count-1; i++){
            userTotal = userTotal + parseInt(allUserCards[i+2]) 
        }
    }
    if (userTotal > 21){
        if (userTotal > 21 && true === allUserCards.includes("11")){
            var theNewTotal = userTotal
            for(i=0; i <= count +1; i++){
                // if(allUserCards[i] === "11"){
                //     allUserCards[i] = 1
                // }
                if(allUserCards[i] === "11"){
                    if (theNewTotal > 21) {
                        allUserCards[i] = 1
                        theNewTotal = theNewTotal - 10
                    }
                }
                userTotal = 0
                for (let i = 0; i <= count+1; i++){
                    userTotal = userTotal + parseInt(allUserCards[i])
                }
            }             
        } 
    }
    updateDealerCardandValue()
    if (dealerTotal > 21){
        setTimeout(() => {
            alert("Congrats, Dealer Busted. You Won!")}, 1000)
            myResetFunc()
            userWin()
    }
    gameOver(dealerTotal, userTotal)

    if (dealerTotal <=16){
        updateDealerCardandValue()
        if (dealerTotal > 21){
            setTimeout(() => {
                alert("Congrats, Dealer Busted. You Won!")}, 1000)
                myResetFunc()
                userWin()
        }
        gameOver(dealerTotal, userTotal)
        if (dealerTotal <=16){
            updateDealerCardandValue()
            if (dealerTotal > 21){
                setTimeout(() => {
                    alert("Congrats, Dealer Busted. You Won!")}, 1000)
                    myResetFunc()
                    userWin()
            }
            gameOver(dealerTotal, userTotal)
            if (dealerTotal <=16){
                updateDealerCardandValue()
                if (dealerTotal > 21){
                    setTimeout(() => {
                        alert("Congrats, Dealer Busted. You Won!")}, 1000)
                        myResetFunc()
                        userWin()
                }
                gameOver(dealerTotal, userTotal)
                if (dealerTotal <=16){
                    updateDealerCardandValue()
                    if (dealerTotal > 21){
                        setTimeout(() => {
                            alert("Congrats, Dealer Busted. You Won!")}, 1000)
                            myResetFunc()
                            userWin()
                    }
                    gameOver(dealerTotal, userTotal)
                    if (dealerTotal <=16){
                        updateDealerCardandValue()
                        if (dealerTotal > 21){
                            setTimeout(() => {
                                alert("Congrats, Dealer Busted. You Won!")}, 1000)
                                myResetFunc()
                                userWin()
                        }
                        gameOver(dealerTotal, userTotal)
                    }
                }
            }
        }
    } 
    
}
function gameOver(dealerTotal, userTotal){
    if(dealerTotal === 21 && dealerTotal === userTotal){
        setTimeout(() => {
            alert("Draw, Deal Again")}, 1000) 
            myResetFunc()
    }
    else if (dealerTotal === 21 && dealerTotal > userTotal){
        setTimeout(() => {
            alert("Dealer Wins")}, 1000)
            myResetFunc()
            dealerWin()
    }
    else if (dealerTotal < 21 && dealerTotal >= 17 && dealerTotal > userTotal){
        setTimeout(() => {
            alert("Dealer Wins")}, 1000)
            myResetFunc()
            dealerWin()
    }
    else if (dealerTotal < 21 && dealerTotal >= 17 && dealerTotal < userTotal){
        console.log(dealerTotal)
        console.log(userTotal)
        setTimeout(() => {
            alert("Congrats You Won!")}, 1000) 
            myResetFunc()
            userWin()
    }
    else if (dealerTotal < 21 && dealerTotal >= 17 && dealerTotal === userTotal){
        setTimeout(() => {
            alert("Draw, Deal Again")}, 1000)  
            myResetFunc()
    }
}
function updateDealerCardandValue(){
    let dealerCard = document.querySelector("#dCard1")
    dealerTotal = 0 
    for (let i = 0; i<= newCount; i++){
        dealerCard[i] = document.querySelector(`#dCard${i+1}`)
        dealerCard[i].src = cards[i].image
        dealerCard[i].classList.remove("hidden")
        dealerTotal = dealerTotal + parseInt(cardsValueNew[i])
    }
        if(dealerTotal > 21 && true === cardsValueNew.includes("11")){
            for(i=0; i < cardsValueNew.length; i++){
                if(cardsValueNew[i] === "11"){
                    cardsValueNew[i] = 1
                }
            }
            dealerTotal = 0 
                for (let i = 0; i<= newCount; i++){
                    dealerTotal = dealerTotal + parseInt(cardsValueNew[i])
                }
        }
    newCount++
return dealerTotal
}
function myResetFunc(){
    let reset = document.getElementById("reset")
    document.getElementById("stayBtn").disabled = true
    document.getElementById("hitBtn").disabled = true
    newCount = 1
    reset.addEventListener("click", ()=> {
        document.getElementById("dealBtn").disabled = false
        for(let i = 0; i< cardImages.length;i++){
            cardImages[i].classList.add("hidden")
            cardImages[0].src = "https://media.istockphoto.com/photos/bicycle-rider-back-playing-card-design-picture-id157772536?s=612x612"
            cardImages[1].src = "https://media.istockphoto.com/photos/bicycle-rider-back-playing-card-design-picture-id157772536?s=612x612"
            cardImages[7].src = "https://media.istockphoto.com/photos/bicycle-rider-back-playing-card-design-picture-id157772536?s=612x612"
            cardImages[8].src = "https://media.istockphoto.com/photos/bicycle-rider-back-playing-card-design-picture-id157772536?s=612x612"
            cardImages[0].classList.remove("hidden")
            cardImages[1].classList.remove("hidden")
            cardImages[7].classList.remove("hidden")
            cardImages[8].classList.remove("hidden")
        }
    })
}
function userWin(){
    let newMoney = parseInt(wagerAmount)
    let balanceDiv = document.getElementById("balancethis")
    balanceDiv.classList.add("parent")
    let userBalance = document.getElementById("total").innerHTML     
    let overallBalance = parseInt(userBalance) + newMoney
    document.getElementById("total").innerHTML = overallBalance
    color()
}
function dealerWin(){
    let newMoney1 = parseInt(wagerAmount)
    let balanceDiv = document.getElementById("balancethis")
    balanceDiv.classList.add("parent")
    let userBalance1 = document.getElementById("total").innerHTML      
    let overallBalance1 = parseInt(userBalance1) - newMoney1
    document.getElementById("total").innerHTML = overallBalance1
    color()
}
function color(){
    let userBalance = document.getElementById("total").innerHTML
    let userColor = document.getElementById("balancethis")
    if (userBalance === "0"){
        userColor.classList.remove("balance")
        userColor.classList.remove("balance2")
        userColor.classList.add("balance3")
    }
    else if (userBalance.includes("-")){
        userColor.classList.remove("balance3")
        userColor.classList.remove("balance")
        userColor.classList.add("balance2")
    }
    else {
        userColor.classList.remove("balance3")
        userColor.classList.remove("balance2")
        userColor.classList.add("balance")
    }
}
// const cardstodeal = (cardsArr) => {
//     //returns 14 cards
// }
document.addEventListener("DOMContentLoaded", () => {
    const dealBtn = document.querySelector("#dealBtn");
    dealBtn.addEventListener("click", () => {
        if (document.getElementById("betAmount").value) {
            wagerAmount = document.getElementById("betAmount").value
        }
        let test = document.querySelector("#betSizeTitle").textContent = "Wager Amount:  " +  wagerAmount
        console.log(test, wagerAmount)
        document.getElementById("stayBtn").disabled = false
        document.getElementById("hitBtn").disabled = false
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=14')
        .then(response => response.json())
        .then(data => dealCards(data))
    })
})

