var RF, SL, BH, NE; // User's scores
RF = SL = BH = NE = 0;
var qn = 0; // Question number

init_question();

function init_question() {
    var q = document.getElementById("question-text").innerHTML;
    var o_1 = document.getElementById("question-option1").innerHTML; 
    var o_2 = document.getElementById("question-option2").innerHTML;

    q  = questions[qn].question;  
    o_1 = questions[qn].option1;
    o_2 = questions[qn].option2;
}

function next_question() {
    RF += questions[qn].effect.RF
    SL += questions[qn].effect.SL
    BH += questions[qn].effect.BH
    NE += questions[qn].effect.NE
    qn++;

    if (qn < questions.length) {
        init_question();
    } else {
        results();
    }
}

function results() {
    location.href = `result.html`;
}

questions = [
    {
        "question": "평소에 하는 생각과 더 가까운 것을 고르시오.",
        "option1" : "로또에 당첨되는 상상",
        "option2" : "시간을 멈추는 상상",
        "effect" : {
                    "RF": 1,
                    "SL": 0,
                    "BH": 0,
                    "NE": 0   
        }
    },
    {
        "question": "더 좋아하는 드라마 취향은?",
        "option1" : "스카이캐슬",
        "option2" : "도깨비",
        "effect" : {
                    "RF": 1,
                    "SL": 0,
                    "BH": 0,
                    "NE": 0   
        }
    }
];