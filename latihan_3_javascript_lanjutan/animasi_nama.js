function animasiNama() {
  //seleksi dom nama
  const nama = document.querySelector(".nama");
  // pecah string menjadi array perkata
  const huruf = [...nama.textContent].map((n) => `<span>${n}</span>`).join("");
  //timpal nama dengan huruf yang sudah sisipkan span
  nama.innerHTML = huruf;
}

animasiNama();
