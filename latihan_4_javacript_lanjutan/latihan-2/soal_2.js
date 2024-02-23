/* //slice and dice:

case & rule :
silce(['data'], [indexMulai, indexAkhir]) //data sesuai dengan titik mulai dan titik akhir
silce(['data'], []) //jika kosong maka akan mengambalikan semua array data
silce(['data'], [20]) //jika lebih besar akan mengembalikan array kosong

contoh :
slice(['ant', 'bison', 'camel', 'duck', 'elephant'], [2]) //camel, duck, elephant
slice(['ant', 'bison', 'camel', 'duck', 'elephant'], [2, 4]) //camel, duck
slice(['ant', 'bison', 'camel', 'duck', 'elephant'], [1, 5]) //bison, camel, duck, elephant
slice(['ant', 'bison', 'camel', 'duck', 'elephant'], []) //ant, bison, camel, duck, elephant
slice(['ant', 'bison', 'camel', 'duck', 'elephant'], [20])


*/


const slice = (data, index) => {

    //isi index awal dengan index pertama
    indexAwal = index[0];

    // jika index akhir tidak ada maka isi dengan banyaknya element data, jika ada maka isi dengan index terakhir
    indexAkhir = !index[1] ? data.length : index[1];

    //jika index awal tidak ada
    if(!indexAwal) {
        return data;
    }

    let result = [];
    //lopping i rentang nilai antara index awal dan index akhir 
    for(let i = 0; i < data.length; i++) {
        if(i >= indexAwal && i < indexAkhir) {
            result.push(data[i]);
        }
    }

    //kembalikan result
    return result;
}

console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], [2]));
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], [2, 4]));
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], [1, 5]));
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], []));
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], [20]));