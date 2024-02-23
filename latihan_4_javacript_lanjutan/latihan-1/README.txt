/*program penjualan*/
//feature
1. data barang(kode,nama,harga,stok ) -> read, create, update, delete
2. penjualan(data_barang, jumlah ) -> hitung_total()
3. pembelian(data_barang, jumlah ) -> hitung_total()
4. report(data_barang, uang) -> penjualan, pembelian

//role
1. create, read, update, delete -> data_barang -> simpan ke dalam object of array
2. penjualan -> input jumlah -> hitung total bayar, lalu tampilkan total dan stoknya berkurang
3. pembelian -> input jumlah -> hitung total bayar, tampilkan total dan stoknya bertambah
4. report -> penjualan kas bertambah , pembelian kas berkurang