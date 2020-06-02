function solve() {

  const firstCorrenctAns = 'onclick';
  const secondCorrectAns = 'JSON.toString()';
  const thirdCorrectAns = 'A programming API for HTML and XML documents';

  let countCorrectAns = 0;

  let allQuizSection = document.getElementById('quizzie').getElementsByTagName('section');

  for (const quiz of allQuizSection) {

    let sectionClassName = quiz.className;
    
    if(sectionClassName !== 'hidden'){
      continue;
    }else{
      
    }

    let firstAns = quiz.getElementsByClassName('quiz-answer low-value')[0];
    let secondAns = quiz.getElementsByClassName('quiz-answer high-value')[0];

    let selectAns = '';

    firstAns.addEventListener('click', function(){
      let ansFirsttext = document.getElementsByClassName('answer-text')[0].textContent;
    });

    secondAns.addEventListener('click', function(){
      let ansFirsttext = document.getElementsByClassName('answer-text')[1].textContent;
    });

      let ansFirsttext = document.getElementsByClassName('answer-text')[0].textContent;
    
    
      if(firstCorrenctAns === ansFirsttext){
        countCorrectAns++;
      }

  }
}
