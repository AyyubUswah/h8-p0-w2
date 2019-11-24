
//No.1

var rows1 = 5;

for(var star=1 ; star <= rows1 ; star++) {
    console.log('*');
}



//No. 2

var rows2 = 5;

for(var star2 = 1 ;  star2 <= rows2 ; star2++) {
    var end = '';
    for( var star3 = 1 ; star3 <= rows2 ; star3++){
    end +='*';
}
    console.log(end); // akan keluar setelah for (looping primer) selesai
}    



//No. 3

var rows3 = 5;

for(var star4 = 1 ;  star4 <= rows3 ; star4++) {
    var end2 = '';
    for( var star5 = 1 ; star5 <= star4 ; star5++){
    end2 +='*';
}
    console.log(end2); //akan keluar setelah for (looping primer) selesai
}    


