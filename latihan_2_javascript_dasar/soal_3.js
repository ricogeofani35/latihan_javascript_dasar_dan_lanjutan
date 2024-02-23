//(uatlah program untuk men9elesaikan masalah berikut :Erogram akan menerima masukan berupa kode, jenis dan harga, dengan jenis adalah A&A, A(A, dan ACA. +ntuk setiap jenis, masing-masing akandiberikan diskon sebesar 1! untuk &, 1 untuk (, dan 2! untuk C
function hitungHargaBarang(jenis, kode, harga) {
  let hrgStlDiskon;

  switch (jenis) {
    case "A":
      hrgStlDiskon = harga * 0.1;
      console.log("Jenis Barang A Mendapat diskon 10%, Harga setelah didiskon = " + hrgStlDiskon);
      break;

    case "B":
      hrgStlDiskon = harga * 0.15;
      console.log("Jenis Barang B Mendapat diskon 15%, Harga setelah didiskon = " + hrgStlDiskon);
      break;

    case "C":
      hrgStlDiskon = harga * 0.2;
      console.log("Jenis Barang B Mendapat diskon 20%, Harga setelah didiskon = " + hrgStlDiskon);
      break;
  }
}
