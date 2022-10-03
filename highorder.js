function nama() {
  return "Khadziq, ";
}
function namaLengkap(memanggil, namaBelakang) {
  console.log(memanggil() + namaBelakang);
}
//fungsi nama() sebagai argumen ke dalam fungsi namaLengkap
namaLengkap(nama, "Muhammad");

