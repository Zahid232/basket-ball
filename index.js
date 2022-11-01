hometeamScore=0
oppteamScore=0
document.getElementById('hbtn-1').addEventListener("click",function(){
    hometeamScore+=1
    render()

})

document.getElementById('hbtn-2').addEventListener("click",function(){
    hometeamScore+=2
    render()

})
document.getElementById('hbtn-3').addEventListener("click",function(){
    hometeamScore+=3
    render()

})

document.getElementById('obtn-1').addEventListener("click",function(){
    oppteamScore+=1
    render()

})
document.getElementById('obtn-2').addEventListener("click",function(){
    oppteamScore+=2
    render()

})
document.getElementById('obtn-3').addEventListener("click",function(){
    oppteamScore+=3
    render()

})



function render(){
    document.getElementById("hscore").innerText=hometeamScore
    document.getElementById("oscore").innerText=oppteamScore
}
