// var doSomethingToDivCSS = require('./javascript/components/getDiv.js')
var makeHTMLBoard = require('./javascript/components/htmlBoard')
var $ = require('jquery')
var createBoard = require('./javascript/createBoard')
var nextBoard = require('./javascript/nextBoard') 
//got rid of require displayboard

var board = createBoard(20)
var boardElements = $(".cell")

$(boardElements).addClass("dead")

//to do: make this function work
function updateboard(board, boardElements) {
	for (var i = 0; i < size; i++) {
		for (var j = 0; i < size; j++) {
			var cellSelector = "#row" + i + " .cell" + j
			$(cellSelector).removeClass("alive").removeClass("dead")
			if (board[i][j] === false) {
				$(cellSelector).addClass("dead")
			}
			else if (board[i][j] === true) {
				$(cellSelector).addClass("alive")
			}
		}
	}
}

var step = function(){
	// displayBoard(board);
	board = nextBoard(board);
}

var intervalStep = setInterval(step, 200);
