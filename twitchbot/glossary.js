let word = q.replace('-', '').replace(' ', '').toLowerCase();
let r = 'No definition found for ' + q;
if (q === '') {
    r = "Use !define (term) to look up the definition of anything you're unsure about."
}
switch (word) {
    case'3bet':
    case'threebet':
        r = 'A raise on top of a previous raise (bet, then raise, then 3bet)';
        break;
    case'4bet':
    case'fourbet':
        r = 'A 4bet is a raise after a 3bet';
        break;
    case'allin':
    case'jam':
    case'shove':
    case'push':
        r = 'Wagering all of your remaining chips';
        break;
    case'suckout':
        r = 'The worst hand ends up beating the best hand';
        break;
    case'hold':
        r = 'To have the best hand remain the best hand at the showdown. Hooooooold!';
        break;

}
r;