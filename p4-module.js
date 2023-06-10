/* 
Amar Oberoi
Progect: CIT P4 
*/ 

const data = require('./p4-data');

function getQuestions() {
    const questions = ['Q1', 'Q2', 'Q3'];
    return questions;
  }
  
  const questions = getQuestions();
  console.log(questions);


function getAnswers() {
  const answers = ['A1', 'A2', 'A3'];
  return answers;
}

const answers = getAnswers();
console.log(answers);


function getQuestionsAnswers() {
    const originalData = [
      { question: 'Q1', answer: 'A1' },
      { question: 'Q2', answer: 'A2' },
      { question: 'Q3', answer: 'A3' }
    ];
  
    const copiedData = JSON.parse(JSON.stringify(originalData));
  
    return copiedData;
  }
  
  const copiedArray = getQuestionsAnswers();
  console.log(copiedArray);
  


function getQuestion(number = "") {
  const data = [
    { question: 'Q1', answer: 'A1' },
    { question: 'Q2', answer: 'A2' },
    { question: 'Q3', answer: 'A3' }
  ];

  const questionNumber = parseInt(number);
  const index = questionNumber - 1;

  const result = {
    question: '',
    number: questionNumber,
    error: ''
  };

  if (Number.isNaN(questionNumber) || index < 0 || index >= data.length) {
    result.error = 'Invalid question number';
  } else {
    result.question = data[index].question;
  }

  return result;
}

const question1 = getQuestion(1);
console.log(question1);

const question2 = getQuestion(2);
console.log(question2);

const question3 = getQuestion(3);
console.log(question3);

const invalidQuestion = getQuestion(4);
console.log(invalidQuestion);


function getAnswer(number = "") {
    const data = [
      { question: 'Q1', answer: 'A1' },
      { question: 'Q2', answer: 'A2' },
      { question: 'Q3', answer: 'A3' }
    ];
  
    const questionNumber = parseInt(number);
    const index = questionNumber - 1;
  
    const result = {
      answer: '',
      number: questionNumber,
      error: ''
    };
  
    if (Number.isNaN(questionNumber) || index < 0 || index >= data.length) {
      result.error = 'Invalid question number';
    } else {
      result.answer = data[index].answer;
    }
  
    return result;
  }
  
  const answer1 = getAnswer(1);
  console.log(answer1);
  
  const answer2 = getAnswer(2);
  console.log(answer2);
  
  const answer3 = getAnswer(3);
  console.log(answer3);
  
  const invalidAnswer = getAnswer(4);
  console.log(invalidAnswer);

  
  function getQuestionAnswer(number = "") {
    const data = [
      { question: 'Q1', answer: 'A1' },
      { question: 'Q2', answer: 'A2' },
      { question: 'Q3', answer: 'A3' }
    ];
  
    const questionNumber = parseInt(number);
    const index = questionNumber - 1;
  
    const result = {
      question: '',
      answer: '',
      number: questionNumber,
      error: ''
    };
  
    if (Number.isNaN(questionNumber) || index < 0 || index >= data.length) {
      result.error = 'Invalid question number';
    } else {
      result.question = data[index].question;
      result.answer = data[index].answer;
    }
  
    return result;
  }
  
  const questionAnswer1 = getQuestionAnswer(1);
  console.log(questionAnswer1);
  
  const questionAnswer2 = getQuestionAnswer(2);
  console.log(questionAnswer2);
  
  const questionAnswer3 = getQuestionAnswer(3);
  console.log(questionAnswer3);
  
  const invalidQuestionAnswer = getQuestionAnswer(4);
  console.log(invalidQuestionAnswer);

  
  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }

  

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit