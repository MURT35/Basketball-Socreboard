let Homescore=document.getElementById("home-score")
let Guestscore=document.getElementById("guest-score")
let Newround=document.getElementById("btn-round")
let homeCount=0
let guestCount=0
let Save=document.getElementById("save-btn")
const win=document.getElementById("winner")

document.querySelectorAll(".score-btn").forEach(btn => {
    btn.addEventListener("click",function(){
        let team=btn.dataset.team
        let points=parseInt(btn.dataset.points)
        if (team === "home") {
      homeCount += points;
      Homescore.textContent = homeCount;
    } else {
      guestCount += points;
      Guestscore.textContent = guestCount;
    }

    })
});

Newround.addEventListener("click",function(){
Homescore.textContent=0
Guestscore.textContent=0
win.textContent=""
homeCount = 0;
guestCount = 0;

})
Save.addEventListener("click",function(){
  const scores={
    home: homeCount,
    guest:guestCount
  }
 localStorage.setItem("scores", JSON.stringify(scores));
 console.log(localStorage.getItem("scores"));

   if (homeCount > guestCount) {
    win.innerHTML = "<h1>Home Wins!</h1>";
  } else if (guestCount > homeCount) {
    win.innerHTML = "<h1>Guest Wins!</h1>";
  } else {
    win.innerHTML = "<h1>Draw!</h1>";
  }

}
)