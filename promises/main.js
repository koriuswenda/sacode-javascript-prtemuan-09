/*
Tiga Fungsi
1. Anjing Jalan-jalan
2. Dapur Bersih
3. Buang sampah
*/
function anjingJalan(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const JalanBersamaAnjing = true;

                if(JalanBersamaAnjing){
                resolve("Hari ini ko jalan sama anjing");
                }else{
                    reject("Hari ini ko tidak jalan sama anjing");
                }
            
        }, 2000);
    });

}

function dapurBersih(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

        const kasihBersihDapur = true;
            
            if(kasihBersihDapur){
                resolve("Hari ini ko sudah bersihkan dapur");
            }else{
                reject("Hari ini ko tidak bersihkan dapur")
            }
            
        }, 3000);
    });

}

function buangSampah(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const telahBuangSampah = true;

            if(telahBuangSampah){
                resolve("Hari ini ko sudah buang sampah");
            }else{
                reject("Hari ini ko tidak buang sampah")
            }

            
        }, 1000);
    });

}

// Method Chaining
anjingJalan().then(value => {console.log(value); return dapurBersih()})
             .then(value => {console.log(value); return buangSampah()})
             .then(value => {console.log(value); console.log("Tertip hari ini ko sudah selesai kerja")})
             .catch(error => console.error(error));