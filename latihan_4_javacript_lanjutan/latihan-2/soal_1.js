//mengenmablikan deret angka prima dari 0 sampai angka itu sendir kedalam array
//contoh: input 10
//output = [2, 3, 5, 7]

const angkaPrima = angka => {
    let angkaPrima = [];
    // looping 1 - 10
    for(let i = 2; i <= angka; i++) {
        // set prima menjadi true
        isPrima = true;
        // looping 1 - 10 * 10
        for(let j = 2; j <= angka; j++) {
            // cek jika i buka bilangan itu sendiri dan i bisa di bagi oleh bilangan lain
            if( i !== j && i % j === 0) {
                // set isPrisma = false dan hentikan kode
                isPrima = false;
                break;
            }
        }
        // isPrima masih true
        if(isPrima) {
            // masukan angka prima ke dalam array
            angkaPrima.push(i);
        }
    }

    // kembalikan arraynya
    return angkaPrima;
}

