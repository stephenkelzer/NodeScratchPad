import { Question } from './Question'

const availableQuestions: Array<Question> = [
  {
    prompt: "What's the capital of the United States?",
    options: ['Washington D.C.', 'New York', 'Los Angeles', 'San Francisco'],
    correctAnswerIndex: 0,
  },
  {
    prompt: "What's the capital of California?",
    options: ['Los Angeles', 'Sacramento', 'San Francisco'],
    correctAnswerIndex: 1,
  },
  {
    prompt: 'What color is the sky?',
    options: ['Maroon', 'Green', 'Blue', 'Brown'],
    correctAnswerIndex: 2,
  },
]

const getUnaskedQuestions = () => availableQuestions.filter((question) => !question.asked)

export const areThereRemainingQuestions = (): boolean => {
  return getUnaskedQuestions().length > 0
}

export const getRandomQuestion = (): Question => {
  const remainingQuestions = getUnaskedQuestions()
  const randomQuestion = remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)]
  const correctAnswer = randomQuestion.options[randomQuestion.correctAnswerIndex]
  randomQuestion.options = randomQuestion.options.sort(() => Math.random() - 0.5)
  randomQuestion.correctAnswerIndex = randomQuestion.options.indexOf(correctAnswer)
  randomQuestion.asked = true
  return randomQuestion
}
