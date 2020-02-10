initEvnironment();

function initEvnironment() {
    questionList();
    document.getElementsByClassName("topic")[0].classList.add("topic-selected");
    document.getElementsByClassName("q-circle")[0].classList.add("question-selected");

    displayQuestion(phyQuestion[currentQuestion]);
}
function questionList() {
    const target = document.getElementById('question-list');
    // console.log(currentQuestion);
    for(let i=1; i<=questionNo; i++) {
        let div = document.createElement("DIV");
        div.innerHTML = i;
        div.classList.add("q-circle");
        div.setAttribute("onclick", "selectQuestion(this)")
        target.appendChild(div);
        if(i<questionNo) {
            let line = document.createElement("DIV");
            line.classList.add("line-next");
            target.appendChild(line);
        }
    }
}

function displayQuestion(obj) {
    var q = document.getElementById('question-target'),
        op1 = document.getElementById('op1-target'),
        op2 = document.getElementById('op2-target'),
        op3 = document.getElementById('op3-target'),
        op4 = document.getElementById('op4-target');
    
    console.log("Object :-",obj);
    q.innerHTML = (currentQuestion+1)+". "+obj.question;
    op1.innerHTML = obj.option1;
    op2.innerHTML = obj.option2;
    op3.innerHTML = obj.option3;
    op4.innerHTML = obj.option4;
}

function selectQuestion(event) {
    //  event - div object
    document.getElementsByClassName("q-circle")[currentQuestion].classList.remove("question-selected");
    event.classList.add("question-selected");
    currentQuestion = parseInt(event.innerHTML)-1;

    //  May Need to be changed later based on Question number
    switch(currentTopic) {
        case 0 : 
            displayQuestion(phyQuestion[currentQuestion]);
            break;
        case 1 :
            displayQuestion(chemQuestion[currentQuestion]);
            break;
        case 2 :
            displayQuestion(mathsQuestion[currentQuestion]);
            break;
        case 3 :
            displayQuestion(gkQuestion[currentQuestion]);
            break;
    }
    
}

function nextTopic() {
    console.log("Wait... Sheriyakam");
}


var answer = null;

//  Find Marked Answer
function findAns() {
    var a = document.getElementsByName('ans');
    for(let i=0; i<4; i++) {
        if(a[i].checked) {
            answer = a[i].value;
            console.log(answer);
        }
    }
}


//  =-=-=-=-=-=-=-=-=-=-=-=-=-=
// Randomise Question using random deletion of questions from "question"
//     object..