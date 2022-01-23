let board = [];

let sizeX = 10;
let sizeY = 10;
let bombNum = 10;

/* creating a x by y array */
for (let x = 0; x < sizeX; x++) {
    let tempArr = [];
    for (let y = 0; y < sizeY; y++) {
        tempArr.push(0);
    }
    board.push(tempArr);
}

let bombLoc = [];

/* place bombs in random boxes */
for (let b = 0; b < bombNum; b++) {
    let Bomb = "B";
    let randomX = Math.floor(Math.random()*sizeX);
    let randomY = Math.floor(Math.random()*sizeY);
    let bombArr = [randomX,randomY];
    bombLoc.push(bombArr);
    board[bombArr[0]][bombArr[1]] = Bomb;

}

/* make matrix of surrounding locs */
let surroundingLocs = [];
for (let i = 0; i < bombLoc.length; i++) {
    let bottomLeft = [bombLoc[i][0] - 1 ,bombLoc[i][1] + 1];
    let bottomRight = [bombLoc[i][0] + 1 ,bombLoc[i][1] + 1];
    let topLeft = [bombLoc[i][0] - 1 ,bombLoc[i][1] - 1];
    let topRight = [bombLoc[i][0] + 1 ,bombLoc[i][1] - 1];
    let left = [bombLoc[i][0] - 1 ,bombLoc[i][1]];
    let right = [bombLoc[i][0] + 1 ,bombLoc[i][1]];
    let up = [bombLoc[i][0] ,bombLoc[i][1] + 1]
    let down = [bombLoc[i][0] ,bombLoc[i][1] - 1]

    surroundingLocs.push(
        bottomLeft, bottomRight, topLeft, topRight, left, right, up, down
        )
}

/* filter out surrounding locs out of the matrix limit */
const filteredLocs = surroundingLocs.filter(checkLimit)
function checkLimit([x, y]) {
    return x >= 0 && x < sizeX && y >= 0 && y < sizeY;
}

/* loop through and add 1 to the surrounding locs */
for (let i = 0; i < filteredLocs.length; i++) {
    if (board[filteredLocs[i][0]][filteredLocs[i][1]] != 'B') {
        board[filteredLocs[i][0]][filteredLocs[i][1]] += 1
    }
}

console.log(board);


/* HTML editing */

/* test if HTML is working with JS*/
function myFunction() {
document.getElementById("demo").innerHTML = "My First JavaScript";
};

/* create a table to input data from board in. Fix later */
function createTable(tableData) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
  
    tableData.forEach(function(rowData) {
      var row = document.createElement('tr');
  
      rowData.forEach(function(cellData) {
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell);
      });
  
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
    document.body.appendChild(table);
  }
  
  createTable(board);



