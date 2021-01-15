//PROJECT OF AHMAD NAEEM CHEEMA

const GRID_SIZE = 21

//Function to Generate Random Positions for the Food
export function randomGridPosition(){
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE)
    }
}

//Function to Check weather the Snake is outside the Grid
export function outsideGrid(position) {
    return (
      position.x < 1 || position.x > GRID_SIZE ||
      position.y < 1 || position.y > GRID_SIZE
    )
  }