const questions = [{
    'que': 'How can you open a link in a new browser window ?',
    'a': '_blank',
    'b': 'Target',
    'c': 'Same',
    'd': 'Open',
    'correct': 'a'
},
{
    'que': 'In which year javaScript launched ?',
    'a': '1996',
    'b': '1995',
    'c': '1994',
    'd': 'none of the above',
    'correct': 'b'
},
{
    'que': 'What does CSS stands for ?',
    'a': 'Hypertext Markup Language',
    'b': 'Helicopters Terminals Motorboats Lamborginis',
    'c': 'cascading Style sheets',
    'd': 'Jason object Notation',
    'correct': 'c'
},
{
    'que': 'Who is making the web standards?',
    'a': 'Mozilla',
    'b': 'Microsoft',
    'c': 'The world Wide Web consortium',
    'd': 'FireFox',
    'correct': 'c'
},
{
    'que': 'What is the correct HTML for creating the hperlink ?',
    'a': 'Itonlineclub.tk',
    'b': 'Itonlineclub.tk',
    'c': 'Itonlineclub.tk',
    'd': 'Http://itonlineclub.tk',
    'correct': 'c'
},
{
    'que': 'How can you create an E-Mail link ?',
    'a': 'Cas',
    'b': 'Csa',
    'c': 'Xxx@yyy',
    'd': 'Cas',
    'correct': 'd'
},
{
    'que': 'Which of the following is a Markup language ?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct': 'a'
},
{
    'que': 'Inside which HTML element do we put the JavaScript ?',
    'a': '<script>',
    'b': '<js>',
    'c': '<JavaScript>',
    'd': '<scripting>',
    'correct': 'a'
},
{
    'que': 'Where is the correct place to insert a javascript ?',
    'a': 'The <head> section',
    'b': 'Both the <head> section and the <body> section are correct',
    'c': 'the <body> section',
    'd': 'the <script> tag',
    'correct': 'b'
},
{
    'que': 'What is the correct syntax for reffering to an external script called "xxx.js" ?',
    'a': '<script src= "xxx.js">',
    'b': '<script herf= "xxx.js">',
    'c': '<script name= "xxx.js">',
    'd': '<script class= "xxx.js">',
    'correct': 'a'
},
{
    'que': 'The external javascript file must contain the <script> tag ?',
    'a': 'true',
    'b': 'false',
    'c': 'both true and false',
    'd': 'none of the above',
    'correct': 'b'
},
{
    'que': 'How to write an IF statement in javaScript ?',
    'a': 'if i == 5 then',
    'b': 'if i = 5',
    'c': 'if i = 5 then',
    'd': 'if(i == 5)',
    'correct': 'd'
},
{
    'que': 'Which of the following is a Markup language ?',
    'a': 'if i < > 5',
    'b': 'if i =! 5 then',
    'c': 'if (i != 5)',
    'd': 'if (i < > 5)',
    'correct': 'c'
},
{
    'que': 'How do you create a function in javascript ?',
    'a': 'function:my function()',
    'b': 'function = myfunction()',
    'c': 'function = ()myfunction',
    'd': 'function myfunction()',
    'correct': 'd'
},
{
    'que': 'How do you write "Hello world in the alert box" ?',
    'a': 'msgBox("Hello World");',
    'b': 'alert("Hello World");',
    'c': 'alertBox("Hello World");',
    'd': 'msg("Hello World");',
    'correct': 'b'
},
]
let index = 13;
let total = questions.length;
let right = 0,
    wrong = 0;
const queBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll(".options")
const loadQuestion = ()=>{
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index]
    // console.log(data);
    queBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = ()=>{
    const data = questions[index]
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion()
    return;
}

const getAnswer = ()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}
const reset = () =>{
    optionInputs.forEach(
        (input)=>{
            input.checked = false;
        }
    )
}

const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
    <div style ="text-align: center";
    "padding-top: 0.2rem" ;>
    <h3> Thank you for playing the quiz </h3>
    <h2> ${right} / ${total} are correct </h2>
    </div>
    `
    
}
//initial call
loadQuestion();