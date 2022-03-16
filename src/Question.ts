export interface Question {
  prompt: string
  options: Array<string>
  correctAnswerIndex: number
  asked?: boolean
}
