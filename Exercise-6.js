
//No.1

var x = 2;
console.log('LOOPING PERTAMA');
while (x < 21) {
    console.log(x, '- I love coding');
    x+=2
}

var y = 20;
console.log('LOOPING KEDUA');
while (y >= 2) {
    console.log(y, '- I will become fullstack developer');
    y-=2
}

console.log('=========');

//No.2

console.log('LOOPING PERTAMA');
for ( var alpha = 1 ; alpha < 21 ; alpha++) {
    console.log(alpha, '- I love coding');
}

console.log('LOOPING KEDUA');
for ( var beta = 20 ; beta >=1  ; beta--) {
    console.log(beta, '- I will become fullstack developer');
}

console.log('========')

//No.3 Problem 1-2

console.log('contoh - ganjil genap');

var satu = 1 ;

while(satu <= 100) {
    console.log('counter sekarang =', satu)
    if(satu%2 == 0) {
        console.log('GENAP');
    } else {
        console.log('GANJIL');
    }
    satu+=1
}

console.log('=========')

// No.3 Problem 3 dan 4

var dua = 1;

while(dua <= 100) {
    console.log('counter sekarang =', dua);
    if(dua%3 == 0) {
        console.log(`${dua} KELIPATAN 3`);
    } 
    dua+=2
}

console.log('======')

var tiga = 1;

while(tiga <= 100) {
    console.log('counter sekarang =', tiga);
    if(tiga%6 == 0) {
        console.log(`${tiga} KELIPATAN 6`);
    } 
    tiga+=5
}

console.log('=========')



var empat = 1;

while(empat <= 100) {
    console.log('counter sekarang =', empat);
    if(empat%10 == 0) {
        console.log(`${empat} KELIPATAN 10`);
    } 
    empat+=9
}
