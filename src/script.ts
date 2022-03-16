import { areThereRemainingQuestions, getRandomQuestion } from './ questionService'
import { Question } from './Question'
import readlineSync from 'readline-sync'

const promptQuestion = async (question: Question): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    console.log(question.prompt)

    question.options.forEach((o, i) => {
      console.log(`${i + 1}: ${o}`)
    })

    const answer = readlineSync.question('>')
    if (answer === (question.correctAnswerIndex + 1).toString()) {
      console.log('Correct!')
      console.log('')
      resolve(true)
    } else {
      console.log('Incorrect')
      reject()
    }
  })
}

let correctAnswers = 0
const loop = async () => {
  if (areThereRemainingQuestions()) {
    promptQuestion(getRandomQuestion())
      .then(async () => {
        correctAnswers++
        await loop()
      })
      .catch(() => {
        console.log(`Number of correct answers: ${correctAnswers}`)
      })
  } else {
    console.log(`Number of correct answers: ${correctAnswers}`)
    console.log('Perfect score! Neat-o!')
  }
}

loop()
