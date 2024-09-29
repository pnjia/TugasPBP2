
// menghitung keliling lingkaran
const jari = prompt("masukkan jari-jari lingkaran: ")
const kelilingLingkaran = 2*Math.PI*jari
console.log(`Keliling lingkaran yang mempunya jari-jari ${jari} adalah ${kelilingLingkaran}`) 

// menghitung luas persegi panjang
const panjang = prompt("masukkan panjang persegi panjang: ")
const lebar = prompt("masukkan luas persegi panjang: ")
const luasPersegiPanjang = panjang * lebar
console.log(`Luas persegi panjang yang memiliki panjang ${panjang} dan lebar ${lebar} adalah ${luasPersegiPanjang}`)

// menghitung volume kubus
const sisiVolume = prompt("masukkan sisi volume kubus: ")
const volumeKubus = sisiVolume*sisiVolume*sisiVolume
console.log(`volume kubus yang memiliki sisi ${sisi} adalah ${volumeKubus}`)

// program menghitung dan menampilkan suhu dalam farenheit
const suhuCelcius = prompt('masukkan suhu(c): ')
const suhuFarenheit = (suhuCelcius * (9/5))+32
console.log(`suhu ${suhuCelcius} celcius sama dengan ${suhuFarenheit} farenheit`)

// program aplikasi mengitung uang kembalian
const hargaTelur = 28000
const jumlahTelur = prompt("masukkan jumlah telur/kg: ")
const totalHarusDiBayar = hargaTelur * jumlahTelur
const bayar = prompt("Masukkan uang anda(Rp): ")
const kembalian = bayar - totalHarusDiBayar
console.log(`Jumlah telur(kg): ${jumlahTelur} kilo`)
console.log(`Total bayar: ${totalHarusBayar}`)
console.log(`Uang yang dibayarkan: ${bayar} `)
console.log(`Uang kembalian: ${kembalian}`)
