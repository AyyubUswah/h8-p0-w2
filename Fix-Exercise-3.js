var nama ='';
var peran = '';
if (nama === '' && peran === '') {
    console.log('Rejected to Play');
}
else if (nama && peran === '') {
    console.log (`Hello ${nama}, Pick your class to begin the game! `);
}
else if (nama && peran === 'Ksatria') {
    console.log (`Hello ${nama}, Welcome to the Proxytia World`);
    console.log (`${nama} the ${peran}, Your adventure begin now ! Attack the enemy with your weapon!`);
} 
else if ( nama && peran === 'Tabib') {
    console.log (`Hello ${nama}, Welcome to the Proxytia World`);
    console.log ( 'Congrats for becoming a Tabib! now your team life is in your hands');
}
else if ( nama && peran === 'Penyihir') {
    console.log (`Hello ${nama}, Welcome to the Proxytia World`);
    console.log (' a New Penyihir has been born, all world elements are with you! ATTACK !!')
}
else {
    console.log (`ALLERT !! ${nama}, a HIDDEN CLASS just entered Proxytia World`)
    console.log (' Game Master will take control !') 
}  

