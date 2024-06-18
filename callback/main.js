// console.log("mulai");
// console.log("tugas 1");
// console.log("tugas 2");
// console.log("tugas 3");
// console.log("selesai");

function fungsi1(calback){
    setTimeout(() => {
       console.log("Mulai");
       calback()
    }, 3000);
   
   }
   
   
   function fungsi2(){
       console.log("Tugas 1");
       console.log("Tugas 2");
       console.log("Selesai");
   }
   fungsi1(fungsi2);