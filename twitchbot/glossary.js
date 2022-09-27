let word = q.replace('-', '').replace(' ', '');
let r = 'No definition found for ' + q;

switch (word) {
    case '3bet':
    case 'threebet':
        r = 'A 3bet is a raise on top of a previous raise (bet, then raise, then 3bet)'
}

r;