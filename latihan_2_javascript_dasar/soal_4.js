/**ebuah perusahaan swasta menggaji kar9awann9a se=ara mingguandengan hitungan sebagai berikut :golongan 1 dengan upah per jam ;.!!! rupiahgolongan 2 dengan upah per jam ;.!! rupiah
 
golongan ; dengan upah per jam #.!!! rupiahgolongan # dengan upah per jam .!!! rupiah(ila seorang kar9awan bekerja kurang atau sama dengan #! jam perminggu, akan dihitung dengan upah per jam seperti di atas, tetapi apabilabekerja lebih dari #! jam, maka lebihn9a akan dihitung sebagai lemburdengan upah per jam 1N kali upah biasa. Tulis algoritma untuk menghitung gaji mingguan kar9awan, bila
golongan
dan
 jam kerja
 diinput dari ke9board **/

function hitungGajiKaryawanMingguan(golongan, jKerja) {
  let gaji;
  switch (golongan) {
    case 1:
      gaji = 3000;
      break;

    case 2:
      gaji = 3500;
      break;

    case 3:
      gaji = 4000;
      break;

    case 4:
      gaji = 5000;
      break;
  }

  if (jKerja <= 40) {
    gaji = gaji * 40;
    console.log("karyawan dengan golongan " + golongan + " dengan jam kerja " + jKerja + " mendapatkan gaji Rp." + gaji);
  } else {
    gaji = 40 * gaji + (jKerja - 40) * (1.5 * gaji);
    console.log("karyawan dengan golongan " + golongan + " dengan jam kerja " + jKerja + " mendapatkan gaji Rp." + gaji);
  }
}
