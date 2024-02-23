//Tulis program untuk menentukan lama bekerja seorang pegawai, jika jammasuk dan jam pulang diinput. Catatan: jam berupa angka 1-12, danseorang pegawai bekerja kurang dari 12 jam.

function lamaBekerja(jMasuk, jKeluar) {
  let hasil;

  if (jMasuk == 10) {
    if (jKeluar >= jMasuk) {
      hasil = jKeluar - jMasuk;
      console.log("Lama Bekerja " + hasil + " Jam");
    } else {
      hasil = 12 - jMasuk + jKeluar;
      console.log("Lama Bekerja " + hasil + " jam ");
    }
  } else {
    console.log("jam masuk salah!");
  }
}
