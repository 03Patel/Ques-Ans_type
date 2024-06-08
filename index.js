let question =[
    {
        'que':'Which of the following is a markup language',
        'a':'Html',
        'b':'CSS',
        'c':'JavaScript',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que':'What year was JavaScript was launched?',
        'a':'1996',
        'b':'1995',
        'c':'1994',
        'd':'none of these',
        'correct':'b'
    },
    {
        'que':'What does CSS stand for',
        'a':'Hypertext Markup Language',
        'b':'Cascading Style Sheet',
        'c':'Jason Object Notation',
        'd':'Helicopters Terminals Motorboats Lamborginis',
        'correct':'b'
    }
   
]

let index =0;
let Quebox=document.getElementById("Quebox");
let option=document.querySelectorAll(".option");
let option1=document.getElementById("Option1");
let option2=document.getElementById("Option2");
let option3=document.getElementById("Option3");
let option4=document.getElementById("Option4");
let btn=document.querySelector(".btn");
Option1.checked=false;
Option2.checked=false;
Option3.checked=false;
Option4.checked=false;


btn.addEventListener('click',()=>{
    Option1.checked=false;
    Option2.checked=false;
    Option3.checked=false;
    Option4.checked=false;
})

let total=question.length;
let right=0,wrong=0;


let loadQuestion=()=>{

    if(index === total){
        return endquiz();
    }
    //  let main=(input)=>{
    //     Option1.checked=false;
    //     Option2.checked=false;
    //     Option3.checked=false;
    //     Option4.checked=false;
    //  }

    let reset=(input)=>{
        Option1.checked=false;
        Option2.checked=false;
        Option3.checked=false;
        Option4.checked=false;

    }
    let data=question[index];
    
    Quebox.innerText= `${index+1})${data.que}`;
    option[0].nextElementSibling.innerText=data.a
    option[1].nextElementSibling.innerText=data.b
    option[2].nextElementSibling.innerText=data.c
    option[3].nextElementSibling.innerText=data.d
}


loadQuestion();

let submitQuiz=()=>{
    
    let data=question[index];
    let ans=getAnswer()
    if(ans=== data.correct){
        right++;
    }else{
        wrong++;
    }
    index++
    loadQuestion();
return;
}

let getAnswer=()=>{
    let answe;
option.forEach(
    (input)=>{
        if(input.checked){
            answe= input.value;
        }
    }
)
return answe;
}
// const reset=(input)=>{
//     option.checked=false;

// }

let  endquiz=()=>{
    document.getElementById("box").innerHTML=`
    <h3>Thanks you for playing quiz</h3>
    <h2>${right}/${total} are correct </h2>`
}
