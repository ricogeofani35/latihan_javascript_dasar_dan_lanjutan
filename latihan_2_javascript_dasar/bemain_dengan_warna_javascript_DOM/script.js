//---------------------------merubah warna sesuai input------------------------------------
//tangkap value dari input dan element button //selection element
const inputWarna = document.getElementById('input-warna');
const btnUbahWarna = document.getElementById('btn-ubah-warna');

//berikan event click di element button //event handler
btnUbahWarna.onclick = function() {
    //saat element button diclick maka ubah background dari body sesuai dengan value dari input //manipulasi element
    document.body.style.backgroundColor = inputWarna.value;
};



//--------------fitur dark mode dan light mode--------------------------------------------------
let btnMode = document.querySelector('.btn-mode');
btnMode.onclick = function() {
    document.body.classList.toggle('black');
    if(document.body.classList.contains('black')) {
        btnMode.innerHTML = 'Light';
        docu
    } else {
        btnMode.innerHTML = 'Dark';
    }
}

//----------------------merubah warna secara random-------------------------------------------------
//manipulasi node //create element
const btnAcakWarna = document.createElement('button');
//create node
const tAcakWarna = document.createTextNode('Acak Warna');
//append child
btnAcakWarna.appendChild(tAcakWarna);

let acakWarnaContainer = document.querySelector('.acak-warna-container');
//manipulasi element
acakWarnaContainer.style.textAlign = 'center';
acakWarnaContainer.appendChild(btnAcakWarna);

//event addEventListener
btnAcakWarna.addEventListener('click', function() {
    //get angka random 1 - 255
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    // manipulasi element
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// ---------------------range merubah warna---------------------------------------------------------------------------
let sMerah = document.querySelector('.sMerah');
let sHijau = document.querySelector('.sHijau');
let sBiru = document.querySelector('.sBiru');

sMerah.addEventListener('change', function() {
   rangeWarna(sMerah.value, sHijau.value, sBiru.value);
});

sHijau.addEventListener('change', function() {
    rangeWarna(sMerah.value, sHijau.value, sBiru.value);
 });

 sBiru.addEventListener('change', function() {
    rangeWarna(sMerah.value, sHijau.value, sBiru.value);
 });

 function rangeWarna(r, g, b) {
   document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
 }

