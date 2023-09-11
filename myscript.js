let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

function makeMove(cellIndex) {
    if (board[cellIndex] === "" && !gameOver) {
        board[cellIndex] = currentPlayer;
        const cell = document.getElementById("board").children[cellIndex];
        cell.innerText = currentPlayer;
        cell.style.pointerEvents = "none"; // Disable clicking on this cell
        checkForWin();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        document.getElementById("status").innerText = `Player ${currentPlayer}'s turn`;
    }
}

function checkForWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameOver = true;
            const status = document.getElementById("status");
            status.classList.add("winner-message"); // Apply the winner message style
            status.innerText = `Player ${board[a]} wins!`;
            return;
        }
    }
     if (!board.includes("") && !gameOver) {
        gameOver = true;
        document.getElementById("status").innerText = "It's a tie!";
    }
}

function resetBoard() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;
    const cells = document.getElementsByClassName("cell");
    for (const cell of cells) {
        cell.innerText = "";
        cell.style.pointerEvents = "auto"; // Re-enable clicking on cells
    }
    const status = document.getElementById("status");
    status.classList.remove("winner-message"); // Remove the winner message style
    status.innerText = `Player ${currentPlayer}'s turn`;
    const winner = document.getElementById("winner");
    winner.innerText = ""; // Clear the winner message
}

document.getElementById("status").innerText = `Player ${currentPlayer}'s turn`;



// Add this to your JavaScript
function displayWinnerMessage(winnerSymbol) {
    gameOver = true;
    const winnerMessage = document.getElementById("winner");
    winnerMessage.classList.add("winner-message");
    winnerMessage.innerText = `Player ${winnerSymbol} wins!`;
    document.getElementById("board").classList.add("board-flip");
}

function checkForWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            displayWinnerMessage(board[a]);
            return;
        }
    }

    if (!board.includes("") && !gameOver) {
        gameOver = true;
        document.getElementById("winner").innerText = "It's a tie!";
    }
}

function resetBoard() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;
    document.getElementById("board").classList.remove("board-flip");
    const cells = document.getElementsByClassName("cell");
    for (const cell of cells) {
        cell.innerText = "";
        cell.style.pointerEvents = "auto";
    }
    const status = document.getElementById("status");
    status.classList.remove("winner-message");
    status.innerText = `Player ${currentPlayer}'s turn`;
    const winner = document.getElementById("winner");
    winner.innerText = "";
}
