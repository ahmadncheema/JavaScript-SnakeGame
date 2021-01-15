//PROJECT OF AHMAD NAEEM CHEEMA

import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

//Main Function
function main(currentTime) {
  if (gameOver) {
    if (confirm('You lost. Press ok to restart.')) {
      window.location = '/'
    }
    return
  }

  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

//Function to Update the Game
function update() {
  updateSnake()
  updateFood()
  checkDeath()
}

//Function to Draw the Game
function draw() {
  gameBoard.innerHTML = '' //To make sure the last position is not displayed again
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

//Function to Check Death
function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}