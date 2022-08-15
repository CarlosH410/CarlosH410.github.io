const data = [
    {
      question: "Cual de las siguientes opciones no es un editor de codigo?",
      choices: ["vim", "vscode", "emacs", "word"],
      answer: "word",
    },
    {
      question: "Que lenguaje no es orientado a Objetos",
      choices: ["Java", "Haskell", "C++", "Python"],
      answer: "Haskell",
    },
    {
      question: "Que lenguaje no sirve para estilizar sitios web?",
      choices: ["Stylus", "Less", "Sass", "CSS", 'PostCSS', 'NextCSS'],
      answer: "NextCSS",
    },
];

class Question {
    /**
     *
     * @param {string} text The Text of the Question
     * @param {string[]} choices a lis of choices for the question
     * @param {string} answer the answef of the question
     */
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
  
    /**
     *
     * @param {string} choice the choice selected
     * @returns {boolean} returns if the choice is correct
     */
    correctAnswer(choice) {
      return choice === this.answer;
    }
}
  
export { Question };
  
export const questions = data.map(
  (question) =>
    new Question(question.question, question.choices, question.answer)
);
