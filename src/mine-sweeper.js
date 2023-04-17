const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let placed = ([i, j]) => [ [i - 1, j - 1], [i - 1, j], [i - 1, j + 1], [i, j - 1], [i, j + 1], [i + 1, j - 1], [i + 1, j], [i + 1, j + 1],];
  let result = matrix.map((r) => r.map((_) => 0));
  console.debug(result)
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        let newEl = placed([i, j]);
        for (let q = 0; q < 8; q++) {
          if ( newEl[q][0] >= 0 && newEl[q][0] < matrix.length && newEl[q][1] >= 0 &&  newEl[q][1] < matrix[i].length ) {
            result[newEl[q][0]][newEl[q][1]]++;
          }
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
