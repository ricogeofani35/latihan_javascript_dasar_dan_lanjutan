//(uat program menghitung selisih waktu dalam jam dan menit3berdasarkan jam mulai jam,menit3 dengan jam selesai jam,menit3. ata9ang diinput adalah jam dan menit mulai, jam dan menit selesai.

function hitungSelisihWaktu(jMulai, mMulai, jSelesai, mSelesai) {
  let lmMulai = jMulai * 60 + mMulai;
  let lmSelesai = jSelesai * 60 + mSelesai;
  let ldMenit;

  if (lmSelesai >= lmMulai) {
    ldMenit = lmSelesai - lmMulai;
  } else {
    ldMenit = 12 * 60 - lmMulai + lmSelesai;
  }

  jDurasi = Math.floor(ldMenit / 60);
  mDurasi = ldMenit % 60;
  console.log("lama menit " + ldMenit);
  console.log("Durasi adalah jam , menit : " + jDurasi + " jam " + mDurasi + " menit ");
}
