

let homeScore=0
let oppteamScore=0
let startGame=false

function start(){
    startGame=true
    homeScore=0
    oppteamScore=0
    playGame()

    
}

document.getElementById("lll").addEventListener("click",function(){
    startGame=false
    console.log(startGame)
    playGame()
})
    
function playGame(){

    if (startGame===true){
        document.getElementById("hbtn-1").addEventListener("click",function(){
            homeScore++
            render() 
            
        })

    } else{
        homeScore=0
        render()
    }
    return
    
}

function render(){
        document.getElementById("hscore").innerText=homeScore
        // document.getElementById("oscore").innerText=oppteamScore

    
}