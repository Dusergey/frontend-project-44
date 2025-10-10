import launchGame from '../index.js'
import getRandomNumber from '../random.js'

// Функция, которая создает прогрессию
const getProgression = (num, difference, len) => {
  const progression = []
  let number = num
  // Создаем счетчик
  let count = 0
  // Создаем арифметическую прогрессию
  while (count !== len) {
    progression.push(number)
    number += difference
    count += 1
  }

  return progression
}
// Функция, которая генерирует вопрос к игре арифметическая прогрессия
const generateQuestionProgression = () => {
  const number = getRandomNumber(50)
  const len = getRandomNumber(11, 5)
  const skip = getRandomNumber(len)
  const difference = getRandomNumber(21, -20)
  const progression = getProgression(number, difference, len)
  const correctAnswer = String(progression[skip])
  // Создаем копию прогрессии и заменяем элемент по индексу
  const progressionWithHidden = [...progression]
  progressionWithHidden[skip] = '..'
  // Преобразуем в строку с пробелами
  const question = progressionWithHidden.join(' ')
  return [question, correctAnswer]
}
// Правила игры
const rulesGame = 'What number is missing in the progression?'
// Функция запуска игры
const startProgressionGame = () => launchGame(rulesGame, generateQuestionProgression)
export default startProgressionGame
