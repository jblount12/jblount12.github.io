let word = q.replace('-', '').replace(' ', '').toLowerCase();
let r = 'No definition found for ' + q;
if (word === '') {
    r = 'Use !define (term) to look up the definition of anything you\'re unsure about.';
}

switch (word) {
    case '3bet':
    case 'threebet':
        r = 'A raise on top of a previous raise (bet, then raise, then 3bet)'
        break;
    case '4bet':
    case 'fourbet':
        r = 'A 4bet is a raise after a 3bet';
        break;
    case 'allin':
    case 'jam':
    case 'shove':
        r = 'Wagering all of your remaining chips';
        break;
    case 'suckout':
        r = 'The worst hand ends up beating the best hand';
        break;
    case 'hold':
        r = 'To have the best hand remain the best hand at the showdown. Hooooooold!';
        break;
    case 'showdown':
        r = 'When all remaining hands are tabled after the river and the best hand wins';
        break;
    case 'rejam':
    case 'reshove':
        r = 'Going all in as a 3bet';
        break;
    case 'overbet':
        r = 'Betting more than is in the pot';
        break;
    case 'checkraise':
        r = 'Checking, then raising after your opponent bets';
        break;
}

r;