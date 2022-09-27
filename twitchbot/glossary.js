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
    case 'effective':
        r = 'An "effective" stack is the smallest stack between yourself and the opponent';
        break;
    case 'vpip':
    case 'vp$ip':
        r = 'Voluntarily Put $ In Pot: Percent of hands voluntarily played (excludes blind money)';
        break;
    case 'pfr':
        r = 'Pre Flop Raise: Percent of hands raised preflop';
        break;
    case 'cbet':
    case 'continuationbet':
        r = 'Continuation bet: Betting on the flop after raising preflop';
        break;
    case 'barrel':
    case 'double barrel':
        r = 'Betting on the turn after betting the flop';
        break;
    case 'triple barrel':
        r = 'Betting the flop, turn, and river';
        break;
    case 'overfold':
        r = 'Folding more often in a spot than would be considered ideal';
        break;
    case 'limp':
        r = 'Calling the big blind preflop without raising';
        break;
    case 'f2cbet':
        r = 'Fold to Cbet: How often someone folds to a continuation bet';
        break;
    case 'af':
    case 'aggression factor':
        r = 'Aggression Factor: The ratio of aggressive actions (betting/raising) to passive actions (checking/calling)';
        break;
    case 'bink':
        r = 'To win a tournament, or to get the card you need to win the hand';
        break;
    case 'tilt':
    case 'ontilt':
        r = 'A state of diminished playing ability due to mental agitation';
        break;
    case 'donkey':
    case 'fish':
        r = 'A general term for a bad/inexperienced player';
        break;
    case 'station':
    case 'callingstation':
        r = 'A player who calls too often with hands that are frequently beat';
        break;
    case 'tight':
        r = 'Playing a smaller, stronger range of hands than normal';
        break;
    case 'loose':
        r = 'Playing a wider, weaker ranger of hands than normal';
        break;
    case 'aggressive':
    case 'aggro':
        r = 'Playing a style with an emphasis on betting and raising';
        break;
    case 'passive':
        r = 'Playing a style with an emphasis on calling and checking';
        break;
    case 'nit':
    case 'nitty':
        r = 'An overly tight player who folds too often';
        break;
    case 'maniac':
        r = 'Someone playing far too loose and aggressive';
        break;
    case 'omc':
        r = 'Old Man Coffee: The stereotypical old man who sips his coffee while folding everything waiting to be dealt aces';
        break;
    case 'lag':
        r = 'Loose Aggressive: Playing many hands with lots of betting and raising';
        break;
    case 'tag':
        r = 'Tight Aggressive: Selectively playing a smaller ranger of hands in an aggressive style';
        break;
    case 'loosepassive':
        r = 'Playing a wide range of hands in a passive style';
        break;
    case 'bubble':
    case 'moneybubble':
        r = 'The bubble is when the next person who busts gets nothing, and everyone else gets paid';
        break;
    case 'ft':
    case 'final table':
        r = 'The final table of players remaining in a tournament';
        break;
    case 'bounty':
        r = 'Bounty tournaments feature a cash prize for knocking other players out of the tournament';
        break;
    case 'pko':
    case 'progressiveknockout':
        r = 'A bounty tournament in which bounties increase as you knock other players out';
        break;
    case 'mtt':
        r = 'Multi Table Tournament: A tournament in which many players compete, typically paying prizes to the last 10-15% of players remaining';
        break;
    case 'sng':
    case 'stt':
        r = 'Sit \'n Go: A tournament (typically one table) with a limited number of entries which begins whenever enough people register';
        break;
}

r;