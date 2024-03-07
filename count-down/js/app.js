const endDate = "March 27 2024 3:00:00";
document.querySelector(".end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");
function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
if( diff < 0){
    return;
}

//calculate into days
inputs[0].value = Math.floor(diff / 3600 / 24);
inputs[1].value = Math.floor(diff / 3600) % 24;
inputs[2].value = Math.floor(diff / 60) % 60;
inputs[3].value = Math.floor(diff) % 60;
}

clock();


setInterval(()=>{
    clock()
},1000);