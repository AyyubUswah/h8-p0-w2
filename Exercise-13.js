function xo(str) {
    var charX = 0 ;
    var charO = 0 ;
    
    for (var i= 0 ; i <str.length ; i++) {
        if ( str[i] === 'x') {
            charX++
        } 
        else {
            charO++
        }
    }
    if ( charX == charO) {
        return ('true');
    } 
    else {
        return ('false');
    }
}
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true


