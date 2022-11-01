

let startGa=false

document.getElementById("bn-btns").addEventListener("click",function bnbn(e){
    if (e.target.id==='s-btn'){
        startGa=true
    }else{
        startGa=false
        return 
    }
    if (startGa===true){
        lowda()
    }
})


homeScore=0
function lowda(){
    if (startGa===true){
        document.getElementById("score-btns").addEventListener("click",function(e){
            if(e.target.id==="hbtn-1"){
                homeScore+=1
                document.getElementById("hscore").innerText=homeScore

            }else if(e.target.id==="hbtn-2"){
                homeScore+=2
                document.getElementById("hscore").innerText=homeScore

            }else{
                homeScore+=3
                document.getElementById("hscore").innerText=homeScore
            }
        })
    }
}