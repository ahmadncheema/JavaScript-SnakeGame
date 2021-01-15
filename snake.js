//PROJECT OF AHMAD NAEEM CHEEMA

import { getInputDirection } from "./input.js"

//Snake Speed ("Change Value of 'SNAKE_SPEED' to Increase or Decrease Speed")
export const SNAKE_SPEED = 10
const snakeBody = [{ x: 11, y: 11 }]
let newSegments = 0

//Function to Update Sanke on the Board
export function update() {
  addSegments()

  const inputDirection = getInputDirection()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }

  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y
}

//Function to Draw Sanke on the Board
export function draw(gameBoard) {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  })
}

//Function to Expand Snake
export function expandSnake(amount) {
  newSegments += amount
}

//Function to get Snake Location to Move it
export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return equalPositions(segment, position)
  })
}

//Function to Get Snake Head Location from Grid
export function getSnakeHead() {
  return snakeBody[0]
}

//Function to Check if Snake has Intersected
export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true })
}

//Function to Find Euqal Positions of Food and Snake
function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

//Function to Add Snake Segments
function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
  }
  newSegments = 0
}