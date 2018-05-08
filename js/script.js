
function drawTree(rows) {
    for (var i = 1 ; i <= rows ; i++) {
        var star = '';
        
        for (var j = 0 ; j < rows - i ; j++) {
             star = star + ' ';
        }
        
        for (var k = 0 ; k < i * 2 - 1 ; k++ ) {
             star = star + '*';
        }
        
        console.log(star);
    }
}

drawTree(10)
