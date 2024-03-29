const questions = [
  {
    question: `In the first 10 overs of a cricket game, the run rate was only 3.2. What should be the run rate in the remaining 40 overs to reach the target of 282 runs?`,
    answers : [
    
            {text: `6.25`,  correct : true },
            {text: `6.55`,  correct : false},
            {text: `6.75`,  correct : false},
            {text: `6.95`,  correct : false},
        
    ]
  },
  {
    question: `A grocer has a sale of Rs. 6435, Rs. 6927, Rs. 6855, Rs. 7230 and Rs. 6562 for 5 consecutive months. How much sale must he have in the sixth month so that he gets an average sale of Rs. 6500?`,
    answers : [
    
            {text: `Rs. 5991`,  correct : false},
            {text: `Rs. 6001`,  correct : false},
            {text: `Rs. 4991`,  correct : true },
            {text: `Rs. 4999`,  correct : false},
        
    ]
  },
  {
    question: `The average of 20 numbers is zero. Of them, at the most, how many may be greater than zero?`,
    answers : [
    
            {text: `00`,  correct : false},
            {text: `19`,  correct : true },
            {text: `17`,  correct : false},
            {text: `18`,  correct : false},
        
    ]
  },
  {
    question: `The average monthly income of P and Q is Rs. 5050. The average monthly income of Q and R is Rs. 6250 and the average monthly income of P and R is Rs. 5200. The monthly income of P is:`,
    answers : [
    
            {text: `3500`,  correct : false},
            {text: `4000`,  correct : true },
            {text: `4100`,  correct : false},
            {text: `3600`,  correct : false},
        
    ]
  }

];


const quesElement = $("#question"); 
const answButton  = $("#answer-buttons");
const nextButton  = $(".btn1");

let currentestionIndex = 0; let score = 0;


const startQuizz = () => {
    currentestionIndex = 0; score = 0;
    $(".btn1").text("NEXT");
    showQuestions();
}

const showQuestions = () =>{
    restState();
    let currentQuestion = questions[currentestionIndex];
    let questionNumbers = currentestionIndex + 1;
    quesElement.text(`${questionNumbers}. ${currentQuestion.question}`);

    currentQuestion.answers.forEach(answers =>{
        const btn = $("<button></button>");
        btn.text(answers.text);btn.addClass("btn");
        answButton.append(btn);
        if(answers.correct){
            btn.data("correct", answers.correct)
        }
        btn.on("click", selectAnswer);
    })
}

const restState =() => {
    nextButton.css("display","none"); 
    answButton.empty();
}

const selectAnswer = (e) =>{
    const selectedBtn = $(e.target);
    // const isCorrect = selectedBtn.dataset.correct === "true";
    if($(selectedBtn).data("correct") === true){
        selectedBtn.addClass("correct");
        score++; 
    }else{
        selectedBtn.addClass("incorrect");
   } 
    // Array.from(answButton).forEach(button =>{
    //     if ($(button).hasClass("correct") === true) {
    //         button.addClass("correct");
    //     }
    //     button.prop("disable", true);
    // })
    nextButton.css("display", "flex");
      
}

const showScore =()=>{
    restState();
    quesElement.text(`Your score: ${score} out of ${questions.length}`);
    nextButton.text ("START AGAIN.!");nextButton.css("display", "flex");
}

const handleNextButton = () =>{
    currentestionIndex++;
    if (currentestionIndex < questions.length) {
        showQuestions();
      } else { showScore(); }
}

nextButton.on("click", ()=>{
    if (currentestionIndex < questions.length) {
      handleNextButton();
    } else { startQuizz(); }
})


startQuizz();
