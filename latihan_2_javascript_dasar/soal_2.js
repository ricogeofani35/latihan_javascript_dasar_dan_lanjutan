//Tulis program untuk menentukan bia9a parkir 9ang dihitung berdasarkanlama parkir. "ama parkir dihitung dari selisih jam masuk dan jam keluardiinput. (ia9a parkir 2 jam pertama 2!!!, perjam berikutn9a !!
function hitungBiayaParkir(jMasuk, jKeluar) {
  let lama;
  let biaya;

  jKeluar > jMasuk ? (lama = jKeluar - jMasuk) : (lama = 12 - jMasuk + jKeluar);

  if (lama <= 2) {
    biaya = 2000;
    console.log("Biaya Parkir Rp." + biaya);
  } else {
    biaya = 2000 + (lama - 2) * 500;
    console.log("Biaya Parkir Rp." + biaya);
  }
}
