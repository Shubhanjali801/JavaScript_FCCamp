const questions = [
  {
    category: "History",
    question: "In what year did World War II begin?",
    choices: ["1939", "1941", "1935"],
    answer: "1939",
  },
  {
    category: "Science",
    question: "Which planet is known as the Red Planet?",
    choices: ["Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    category: "Sports",
    question: "How many players are on a soccer team on the field?",
    choices: ["11", "9", "10"],
    answer: "11",
  },
  {
    category: "Art",
    question: "Who painted the Mona Lisa?",
    choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"],
    answer: "Leonardo da Vinci",
  },
  {
    category: "History",
    question: "In what year did the French Revolution start?",
    choices: ["1788", "1789", "1810"],
    answer: "1789",
  },
];

const getRandomNumber = (min, array) =>
  Math.floor(Math.random() * (array.length - min) + min);

const getRandomQuestion = (questions) =>
  questions[getRandomNumber(0, questions)];

const randomQuestion = getRandomQuestion(questions);

const getRandomComputerChoice = (arrayChoices) =>
  arrayChoices[getRandomNumber(0, arrayChoices)];

const randomAnswer = getRandomComputerChoice(randomQuestion.choices);

const getResults = (question, randomA) => {
  if (question.answer === randomA) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
};

console.log(randomQuestion);
console.log(randomAnswer);
console.log(getResults(randomQuestion, randomAnswer));
