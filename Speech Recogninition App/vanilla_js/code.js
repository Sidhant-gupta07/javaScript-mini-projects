const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{
texts.appendChild(p);
const text = Array.from(e.results)
.map(result => result[0])
.map(result => result.transcript)
.join('');


p.innerText = text;
if(e.results[0].isFinal){
    if(text.includes("how are you")){
        p.classList.add("replay");
        p.innerText = "I am fine";
        texts.appendChild(p)
    }
    if (text.includes("what's your name") || text.includes('what is your name')) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = 'My name is Sidhant Gupta, What is your name ?'
        texts.appendChild(p)
    }
    if(text.includes("open my linkedIn profile") || text.includes("open your linkedIn profile")){
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "Opening the linkedIn profile";
        texts.appendChild(p)
        window.open("https://www.linkedin.com/in/sidhant-gupta-2543b2237/")
    }
    if(text.includes("open my GitHub") || text.includes("open your GitHub profile")|| text.includes("open your GitHub")){
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "Opening the GitHub profile";
        texts.appendChild(p)
        window.open("https://github.com/Sidhant-gupta07?tab=repositories")
}
p = document.createElement("p");
}
});

recognition.addEventListener("end", ()=> {
    recognition.start();
})
recognition.start();