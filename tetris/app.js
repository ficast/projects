document.addEventListener('DOMContentLoaded', () => {
  // Global Variables
  const GRID_WIDTH = 10
  const GRID_HEIGHT = 20
  const GRID_SIZE = GRID_WIDTH * GRID_HEIGHT

  // Grid
  const grid = document.querySelector('.grid');
  for (let i = 0; i < GRID_SIZE; i++) {
    div = document.createElement('div');
    grid.appendChild(div);
  };

  // Base Grid
  for (let i = 0; i < GRID_WIDTH; i++) {
    let gridElement = document.createElement("div");
    gridElement.setAttribute("class", "taken");
    grid.appendChild(gridElement);
    };

  // Mini-Grid
  const miniGrid = document.querySelector('.mini-grid');
  for (let i = 1; i <= 16; i++) {
    div = document.createElement('div');
    miniGrid.appendChild(div);
  }

  // DOM
  let squares = Array.from(document.querySelectorAll('.grid div'));
  const scoreDisplay = document.querySelector('#score');
  const startBtn = document.querySelector('#start-button');
  
  // The Tetrominoes
  const lTetromino = [
    [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, 2],
    [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 2],
    [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 2],
    [GRID_WIDTH, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1, GRID_WIDTH * 2 + 2]
  ]

  const zTetromino = [
    [0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
    [GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1],
    [0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
    [GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1]
  ]

  const tTetromino = [
    [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2],
    [1, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
    [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
    [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1]
  ]

  const oTetromino = [
    [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
    [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
    [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
    [0, 1, GRID_WIDTH, GRID_WIDTH + 1]
  ]

  const iTetromino = [
    [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 3 + 1],
    [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH + 3],
    [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 3 + 1],
    [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH + 3]
  ]

  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]
  
  // Current Position / Rotation
  let score = 0
  let nextRandom = 0;
  let timerId;
  let currentPosition = 4;
  let currentRotation = 0;

  // Selectin Tetraminoes randomly
  let random = Math.floor(Math.random()*theTetrominoes.length);
  let current = theTetrominoes[random][currentRotation];


  // Draw the Tetromino
  function draw() {
    current.forEach(index => {
      squares[currentPosition + index].classList.add('tetromino');
    });
  }
  // Draw the Tetromino
  function undraw() {
    current.forEach(index => {
      squares[currentPosition + index].classList.remove('tetromino');
    });
  };

  //Move Down function
  function moveDown() {
    undraw();
    currentPosition += GRID_WIDTH;
    draw();
    freeze();
  }

  function freeze() {
    if (current.some(index => squares[currentPosition + index + GRID_WIDTH].classList.contains('taken'))) {
      current.forEach(index =>  squares[currentPosition + index].classList.add('taken'));
      random = nextRandom;
      nextRandom = Math.floor(Math.random() * theTetrominoes.length);
      current = theTetrominoes[random][currentRotation]
      currentPosition = 4;
      draw();
      displayShape();
      // addScore();
    }
  }

  function moveRigth() {
    undraw();
    const isAtRigthEdge = current.some(index => (currentPosition + index) % GRID_WIDTH === GRID_WIDTH-1);
    if (!isAtRigthEdge) currentPosition += 1;
    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition -= 1
    }
    draw();
  }

  function moveLeft() {
    undraw();
    const isAtLeftEdge = current.some(index => (currentPosition + index) % GRID_WIDTH === 0);
    if (!isAtLeftEdge) currentPosition -= 1;
    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition += 1
    }
    draw();
  }

  function rotate() {
    undraw();
    currentRotation++
    if (currentRotation === current.length) {
      currentRotation = 0;
    }
    current = theTetrominoes[random][currentRotation];
    draw();
  }

  // Assign functions to keyCodes
  function control(e) {
    if (e.keyCode === 37){
      moveLeft();
    } else if (e.keyCode === 38){
      rotate();
    } else if (e.keyCode === 39) {
      moveRigth();
    } else if (e.keyCode === 40) {
      moveDown();
    }
  }

  document.addEventListener('keydown', control);

  // Show next Tetromino
  const displaySquares = document.querySelectorAll('.mini-grid div');
  const displayWidth = 4;
  let displayIndex = 0;

  const upNextTetraminoes = [
    [1, displayWidth + 1, displayWidth * 2 + 1, 2], /* lTetromino */
    [0, displayWidth, displayWidth + 1, displayWidth * 2 + 1], /* zTetromino */
    [1, displayWidth, displayWidth + 1, displayWidth + 2], /* tTetromino */
    [0, 1, displayWidth, displayWidth + 1], /* oTetromino */
    [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1] /* iTetromino */
  ]

  // Display the shape
  function displayShape() {
    displaySquares.forEach(square => {
      square.classList.remove('tetromino');
    })
    upNextTetraminoes[nextRandom].forEach(index => {
      displaySquares[displayIndex + index].classList.add('tetromino')
    });
  }

  // Add functional button
  startBtn.addEventListener('click', () => {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    } else {
      draw();
      timerId = setInterval(moveDown, 1000);
      nextRandom = Math.floor(Math.random() * theTetrominoes.length);
      displayShape();
    }
  });

  // Add Scores
  // function addScore() {
  //   for (let i = 0; i < GRID_SIZE; i += GRID_WIDTH) {
  //     const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9];
  //     if (row.every(index => squares[index].classList.contains('taken'))) {
  //       score += 10;
  //       scoreDisplay.innerHTML = score;
  //       row.forEach(index => {
  //         squares[index].classList.remove('taken');
  //       })
  //     }
  //     const squaresRemoved = squares.splice(i, GRID_WIDTH)
  //     squares = squaresRemoved.concat(squares);
  //     squares.forEach(cell => grid.appendChild(cell))
  //   }
  // }
 
})