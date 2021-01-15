//PROJECT OF AHMAD NAEEM CHEEMA

let inputDirection = { x: 0, y: 0}
let lastInputDirection = { x: 0, y: 0}

//Event Listener to Get Key Input from Player
window.addEventListener('keydown', e => {
    switch(e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break //To Make Sure It Doesn't The Opposite Direction
            inputDirection = { x: 0, y: -1}
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break //To Make Sure It Doesn't The Opposite Direction
            inputDirection = { x: 0, y: 1}
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break //To Make Sure It Doesn't The Opposite Direction
            inputDirection = { x: -1, y: 0}
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break //To Make Sure It Doesn't The Opposite Direction
            inputDirection = { x: 1, y: 0}
            break
    }
})

//Function to Get Input Direction
export function getInputDirection(){
    lastInputDirection = inputDirection
    return inputDirection
}