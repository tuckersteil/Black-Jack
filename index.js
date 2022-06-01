let cardImages = document.getElementsByTagName("img")
let count = 0
let cardsValueNew
let allUserCards
let userTotal
let cards
function dealCards(data){
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
    nextAction()
}   
function nextAction(){
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
        if(count == 0){
            intialStay()
        }
        else{
            stayClick();
        }
    }
}
function increase(){ 
    return count++
}
function userHit(){
    allUserCards = [ 1, 2, 3, 4, 5, 6, 7]
    increase()
    for (let i = 0; i <allUserCards.length; i++){
        allUserCards[i] = cardsValueNew[i+7]
    }
    userTotal = parseInt(allUserCards[0])+ parseInt(allUserCards[1])
    hitAndCount(allUserCards, userTotal)
}
function hitAndCount(allUserCards, userTotal){
    for(i = 0; i <= count - 1; i++){
        userTotal = userTotal + parseInt(allUserCards[i+2])
    }
    for(i = count; i <= count ; i++){
        cardImages[i + 8].classList.remove('hidden')
        
    } 
    
    if (userTotal > 21){
            if (userTotal > 21 && true === allUserCards.includes("11")){
                for(i=0; i <= count +1; i++){
                    if(allUserCards[i] === "11"){
                        allUserCards[i] = 1
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
}
function stayClick(){
    for (let i = 0; i <= count-1; i++){
        userTotal = userTotal + parseInt(allUserCards[i+2]) 
    }
    if (userTotal > 21){
        if (userTotal > 21 && true === allUserCards.includes("11")){
            for(i=0; i <= count +1; i++){
                if(allUserCards[i] === "11"){
                    allUserCards[i] = 1
                }
                userTotal = 0
                for (let i = 0; i <= count+1; i++){
                    userTotal = userTotal + parseInt(allUserCards[i])
                }
            }             
        } 
    }
    let dealerCard2 = document.querySelector('#dCard2')
    dealerCard2.src = cards[1].image
    document.getElementById("hitBtn").disabled = true;
    document.getElementById("stayBtn").disabled = true;
    let dealerTotal = parseInt(cardsValueNew[0]) + parseInt(cardsValueNew[1])
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
    else if (dealerTotal <=16){
        let dealerCard3 = document.querySelector('#dCard3')
        dealerCard3.src = cards[2].image
        dealerCard3.classList.remove("hidden")
        dealerTotal = dealerTotal + parseInt(cardsValueNew[2])
        if(dealerTotal > 21 && true === cardsValueNew.includes("11"))
            for(i=0; i < cardsValueNew.length; i++){
                if(cardsValueNew[i] === "11"){
                    cardsValueNew[i] = 1
                }
                dealerTotal =  parseInt(cardsValueNew[0]) + parseInt(cardsValueNew[1]) + parseInt(cardsValueNew[2])
 
            }
        if (dealerTotal > 21){
            setTimeout(() => {
                alert("Congrats, Dealer Busted. You Won!")}, 1000)
                myResetFunc()
                userWin()
        }
        if (dealerTotal === 21 && dealerTotal === userTotal){
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
        else if (dealerTotal <=16){
            let dealerCard4 = document.querySelector('#dCard4')
            dealerCard4.src = cards[3].image
            dealerCard4.classList.remove("hidden")
            dealerTotal = dealerTotal + parseInt(cardsValueNew[3])
            if(dealerTotal > 21 && true === cardsValueNew.includes("11"))
                for(i=0; i < cardsValueNew.length; i++){
                    if(cardsValueNew[i] === "11"){
                        cardsValueNew[i] = 1
                    }
                dealerTotal =  parseInt(cardsValueNew[0]) + parseInt(cardsValueNew[1]) + parseInt(cardsValueNew[2])+ parseInt(cardsValueNew[3])
 
                }
            if (dealerTotal > 21){
                setTimeout(() => {
                    alert("Congrats, Dealer Busted. You Won!")}, 1000)
                    myResetFunc()
                    userWin()
            }
            if (dealerTotal === 21 && dealerTotal === userTotal){
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
            else if (dealerTotal <=16){
                let dealerCard5 = document.querySelector('#dCard5')
                dealerCard5.src = cards[4].image
                dealerCard5.classList.remove("hidden")
                dealerTotal = dealerTotal + parseInt(cardsValueNew[4])
                if(dealerTotal > 21 && true === cardsValueNew.includes("11"))
                    for(i=0; i < cardsValueNew.length; i++){
                        if(cardsValueNew[i] === "11"){
                            cardsValueNew[i] = 1
                        }
                    dealerTotal =  parseInt(cardsValueNew[0]) + parseInt(cardsValueNew[1]) + parseInt(cardsValueNew[2]) + parseInt(cardsValueNew[3])+ parseInt(cardsValueNew[4])
 
                    }
                if (dealerTotal > 21){
                    setTimeout(() => {
                        alert("Congrats, Dealer Busted. You Won!")}, 1000)
                        myResetFunc()
                        userWin()
                }
                if (dealerTotal === 21 && dealerTotal === userTotal){
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
                else if (dealerTotal <=16){
                    let dealerCard6 = document.querySelector('#dCard6')
                    dealerCard6.src = cards[5].image
                    dealerCard6.classList.remove("hidden")
                    dealerTotal = dealerTotal + parseInt(cardsValueNew[5])
                    if(dealerTotal > 21 && true === cardsValueNew.includes("11"))
                        for(i=0; i < cardsValueNew.length; i++){
                            if(cardsValueNew[i] === "11"){
                                cardsValueNew[i] = 1
                            }
                        dealerTotal =  parseInt(cardsValueNew[0]) + parseInt(cardsValueNew[1]) + parseInt(cardsValueNew[2]) + parseInt(cardsValueNew[3])+ parseInt(cardsValueNew[4])+ parseInt(cardsValueNew[5])
 
                        }
                    if (dealerTotal > 21){
                        setTimeout(() => {
                            alert("Congrats, Dealer Busted. You Won!")}, 1000)
                            myResetFunc()
                            userWin()
                    }
                    if (dealerTotal === 21 && dealerTotal === userTotal){
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
                    else if (dealerTotal <=16){
                        let dealerCard7 = document.querySelector('#dCard7')
                        dealerCard7.src = cards[6].image
                        dealerCard7.classList.remove("hidden")
                        dealerTotal = dealerTotal + parseInt(cardsValueNew[6])
                        if(dealerTotal > 21 && true === cardsValueNew.includes("11"))
                            for(i=0; i < cardsValueNew.length; i++){
                                if(cardsValueNew[i] === "11"){
                                    cardsValueNew[i] = 1
                                }
                            dealerTotal =  parseInt(cardsValueNew[0]) + parseInt(cardsValueNew[1]) + parseInt(cardsValueNew[2]) + parseInt(cardsValueNew[3])+ parseInt(cardsValueNew[4])+ parseInt(cardsValueNew[5])+ parseInt(cardsValueNew[6])
 
                            }
                        if (dealerTotal > 21){
                            setTimeout(() => {
                                alert("Congrats, Dealer Busted. You Won!")}, 1000)
                                myResetFunc()
                                userWin()
                        }
                        if (dealerTotal === 21 && dealerTotal === userTotal){
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
                }
            }
        }
    } 
}
function intialStay(){
    userTotal = parseInt(cardsValueNew[7])+ parseInt(cardsValueNew[8])
    let dealerCard2 = document.querySelector('#dCard2')
    dealerCard2.src = cards[1].image
    document.getElementById("hitBtn").disabled = true;
    document.getElementById("stayBtn").disabled = true;
    let dealerTotal = parseInt(cardsValueNew[0]) + parseInt(cardsValueNew[1])
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
    else if (dealerTotal <=16){
        let dealerCard3 = document.querySelector('#dCard3')
        dealerCard3.src = cards[2].image
        dealerCard3.classList.remove("hidden")
        dealerTotal = dealerTotal + parseInt(cardsValueNew[2])
        if(dealerTotal > 21 && true === cardsValueNew.includes("11"))
            for(i=0; i < cardsValueNew.length; i++){
                if(cardsValueNew[i] === "11"){
                    cardsValueNew[i] = 1
                }
                dealerTotal =  parseInt(cardsValueNew[0]) + parseInt(cardsValueNew[1]) + parseInt(cardsValueNew[2])
 
            }
        if (dealerTotal > 21){
            setTimeout(() => {
                alert("Congrats, Dealer Busted. You Won!")}, 1000)
                myResetFunc()
                userWin()
        }
        if (dealerTotal === 21 && dealerTotal === userTotal){
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
        else if (dealerTotal <=16){
            let dealerCard4 = document.querySelector('#dCard4')
            dealerCard4.src = cards[3].image
            dealerCard4.classList.remove("hidden")
            dealerTotal = dealerTotal + parseInt(cardsValueNew[3])
            if(dealerTotal > 21 && true === cardsValueNew.includes("11"))
                for(i=0; i < cardsValueNew.length; i++){
                    if(cardsValueNew[i] === "11"){
                        cardsValueNew[i] = 1
                    }
                dealerTotal =  parseInt(cardsValueNew[0]) + parseInt(cardsValueNew[1]) + parseInt(cardsValueNew[2]) + parseInt(cardsValueNew[3])
 
                }
            if (dealerTotal > 21){
                setTimeout(() => {
                    alert("Congrats, Dealer Busted. You Won!")}, 1000)
                    myResetFunc()
                    userWin()
            }
            if (dealerTotal === 21 && dealerTotal === userTotal){
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
            else if (dealerTotal <=16){
                let dealerCard5 = document.querySelector('#dCard5')
                dealerCard5.src = cards[4].image
                dealerCard5.classList.remove("hidden")
                dealerTotal = dealerTotal + parseInt(cardsValueNew[4])
                if(dealerTotal > 21 && true === cardsValueNew.includes("11"))
                    for(i=0; i < cardsValueNew.length; i++){
                        if(cardsValueNew[i] === "11"){
                            cardsValueNew[i] = 1
                        }
                    dealerTotal =  parseInt(cardsValueNew[0]) + parseInt(cardsValueNew[1]) + parseInt(cardsValueNew[2]) + parseInt(cardsValueNew[3])+ parseInt(cardsValueNew[4])
 
                    }
                if (dealerTotal > 21){
                    setTimeout(() => {
                        alert("Congrats, Dealer Busted. You Won!")}, 1000)
                        myResetFunc()
                        userWin()
                }
                if (dealerTotal === 21 && dealerTotal === userTotal){
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
                else if (dealerTotal <=16){
                    let dealerCard6 = document.querySelector('#dCard6')
                    dealerCard6.src = cards[5].image
                    dealerCard6.classList.remove("hidden")
                    dealerTotal = dealerTotal + parseInt(cardsValueNew[5])
                    if(dealerTotal > 21 && true === cardsValueNew.includes("11"))
                        for(i=0; i < cardsValueNew.length; i++){
                            if(cardsValueNew[i] === "11"){
                                cardsValueNew[i] = 1
                            }
                        dealerTotal =  parseInt(cardsValueNew[0]) + parseInt(cardsValueNew[1]) + parseInt(cardsValueNew[2]) + parseInt(cardsValueNew[3])+ parseInt(cardsValueNew[4])+ parseInt(cardsValueNew[5])
 
                        }
                    if (dealerTotal > 21){
                        setTimeout(() => {
                            alert("Congrats, Dealer Busted. You Won!")}, 1000)
                            myResetFunc()
                            userWin()
                    }
                    if (dealerTotal === 21 && dealerTotal === userTotal){
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
                    else if (dealerTotal <=16){
                        let dealerCard7 = document.querySelector('#dCard7')
                        dealerCard7.src = cards[6].image
                        dealerCard7.classList.remove("hidden")
                        dealerTotal = dealerTotal + parseInt(cardsValueNew[6])
                        if(dealerTotal > 21 && true === cardsValueNew.includes("11"))
                            for(i=0; i < cardsValueNew.length; i++){
                                if(cardsValueNew[i] === "11"){
                                    cardsValueNew[i] = 1
                                }
                            dealerTotal =  parseInt(cardsValueNew[0]) + parseInt(cardsValueNew[1]) + parseInt(cardsValueNew[2]) + parseInt(cardsValueNew[3])+ parseInt(cardsValueNew[4])+ parseInt(cardsValueNew[5])+ parseInt(cardsValueNew[6])
 
                            }
                        if (dealerTotal > 21){
                            setTimeout(() => {
                                alert("Congrats, Dealer Busted. You Won!")}, 1000)
                                myResetFunc()
                                userWin()
                        }
                        if (dealerTotal === 21 && dealerTotal === userTotal){
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
                }
            }
        }
    }
}
function myResetFunc(){
    let reset = document.getElementById("reset")
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
    let newMoney = 5 
    let balanceDiv = document.getElementById("balancethis")
    balanceDiv.classList.add("parent")
    let userBalance = document.getElementById("total").innerHTML     
    let overallBalance = parseInt(userBalance) + newMoney
    document.getElementById("total").innerHTML = overallBalance
    color()
}

function dealerWin(){
    let newMoney1 = 5 
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
document.addEventListener("DOMContentLoaded", () => {
    const dealBtn = document.querySelector("#dealBtn");
    dealBtn.addEventListener("click", () => {
        document.getElementById("stayBtn").disabled = false
        document.getElementById("hitBtn").disabled = false
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=14')
        .then(response => response.json())
        .then(data => dealCards(data))
    })
})