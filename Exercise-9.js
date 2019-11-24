//No.1

function shoutOut () {
    return ('Hallo Fuction!')
}
console.log(shoutOut());

console.log('=============')
//No.2

function calculateMultiply() {
    var num1 = 5;
    var num2 = 6;
    var hasilPerkalian = num1 * num2;
    console.log(hasilPerkalian);
}
calculateMultiply();

console.log('===========');

//No.3

function processSentence() {
    var name = 'Agus';
    var age = 30;
    var adress = 'Jln. Malioboro, Yogyakarta';
    var hobby = 'gaming';
    return ('Nama saya ') + name + (', ') +
           ('umur saya ') + age + (' tahun ') +
           ('alamat saya di ') + adress + (', ')+
           ('dan saya punya hobby yaitu ') + hobby + ('!'); 
} console.log(processSentence());

