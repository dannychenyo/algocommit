function sudokuSolve(board) {
  return solveFromCell(0, 0, board)
}

function solveFromCell(row, col, board){
  if (col == board[row].length){
    col = 0
    row++
  }
  if (row == board.length) {
    
    return true
  }
  if (board[row][col] != '.'){
    return solveFromCell(row, col + 1, board)
  }
  for (let i = 1; i <= 9; i++){
    let ch = i.toString()
    if (canPlace(ch, row, col, board)){
      board[row][col] = ch
      if (solveFromCell(row, col + 1, board)) {
        
        return true
      }
      
      board[row][col] = '.'
    }
  }
  
  return false
}

function canPlace(ch, row, col, board){
  var subRow = (Math.floor(row/3))*3
  var subCol = (Math.floor(col/3))*3
  
  for(var r = subRow; r < subRow + 3;r++ ){
    for(var c = subCol; c < subCol + 3;c++){
      if(ch == board[r][c]){
        
        return false
      }
    }
  }
  
  for(var i = 0; i < board.length; i++){
    if(ch == board[i][col]){
      
      return false
    }
    if(ch == board[row][i]){
      
      return false
    } 
  }
  
  return true
}