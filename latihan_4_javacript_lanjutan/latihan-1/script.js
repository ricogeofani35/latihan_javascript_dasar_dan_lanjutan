// object barang
function DataBarang(kode, nama, harga, stok) {
    this.kode = kode;
    this.nama = nama;
    this.harga = harga;
    this.stok = stok;
}


DataBarang.prototype.penjualan = jumlah => {
    let total = 0;

    total = this.harga * jumlah;
    this.stok -= jumlah;

    return total;
}



DataBarang.prototype.pembelian = jumlah => {
    let total = 0;

    total = this.harga * jumlah;
    this.stok += jumlah;

    return total;
}

const barang1 = new DataBarang('001', 'kitacho', 12000, 20); 
const barang2 = new DataBarang('002', 'sunco 1 L', 14000, 80); 



