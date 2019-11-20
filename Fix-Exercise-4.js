var hari = 12 ; // 1-31 
   
var bulan = 10; // bulan 1-12
    
var tahun = 1900; // angka 1900-2200

if (hari < 1 || hari > 31 || bulan <1 || bulan >12 || tahun <1900 || tahun >2200 ) {
    console.log ('INVALID or Kalender Rusak')
  } else {
      switch (bulan) {
            case 1 :
                console.log(`${hari} Januari ${tahun}`);
                break;
            case 2 :
                console.log(`${hari} Februari ${tahun}`);
                break;     
            case 3 :
                console.log(`${hari} Maret ${tahun}`);
                break;
            case 4 :
                console.log(`${hari} April ${tahun}`);
                break;
            case 5 :
                console.log(`${hari} Mei ${tahun}`);
                break;
            case 6 :
                console.log(`${hari} Juni ${tahun}`);
                break;                              
            case 7 :
                console.log(`${hari} Juli ${tahun}`);
                break;
            case 8 :
                console.log(`${hari} Agustus ${tahun}`);
                break;
            case 9 :
                console.log(`${hari} Septmber ${tahun}`);
                break;
            case 10 :
                console.log(`${hari} Oktober ${tahun}`);
                break;
            case 11 :
                console.log(`${hari} November ${tahun}`);
                break;
            case 12 :
                console.log(`${hari} Desember ${tahun}`);
                break;
                     }      
             }