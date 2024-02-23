//Eemerintah han9a memberikan tunjangan anak dari E maksimal sampai; anak saja. etiap anak diberikan tunjangan sebesar 1! dari gaji pokok. Tulis program untuk menghitung total tunjangan anak, bila gaji pokok dan jumlah anak diinput oleh user.
function hitungTunjanganAnak(gPokok, jAnak) {
  let tunjangan;

  if (jAnak === 0) {
    tunjangan = 0;
  } else {
    if (jAnak == 1) {
      tunjangan = gPokok * 0.1;
    } else if (jAnak == 2) {
      tunjangan = gPokok * 0.2;
    } else {
      tunjangan = gPokok * 0.3;
    }
  }

  console.log("jumlah Anak: " + jAnak + " gaji Pokok: " + gPokok + " tunjangan " + tunjangan);
}
