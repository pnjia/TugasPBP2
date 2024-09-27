// console.log('ini saya')
// var firstName = "John"; // global scope

// function sayHallo() {
//     var lastName = "Doe" // local scope
// }


// console.log("Hai nama saya " + firstName)

// campus = "Nusa Putra University"

// console.log(campus)

// var campus

// // perbedaan var dan let

// var greetings = "hello world"
// var times = 4

// if (times > 3) {
//     var hello ="hallo" // akan terbaca
//     // let hellow ="hallo" // tidak akan terbaca
// }

// console.log(hello)

// // const

// const nama = "Panji A"
// // nama = "anonymous"

// console.log(nama) // error karena memakai const yang berarti nilainya tidak dapat diubah


// // TIPE DATA

// // Numbers
// let length = 16
// let weight = 7.5

// // Strings 
// let color = "Yellow"
// let lastName = "Johnson"

// // Booleans
// let x = true
// let y = false

// // Object

// let person = {fistName: "John", lastName:"Doe"}

// // Array object
// let cars = ['saab', 'volvo', 'b&w']

// // Date object
// let date = new Date("2023-04-17")

// // Ternary operator

// var a = 3
// var c = a > 10 ? "Lebih besar dari 10": "Kurang dari atau sama dengan 10"

// console.log(c)

// var nma = "orang"

// console.log("hai " +nma)
// console.log(`hai ${nma}`)

// var sisi = prompt("masukkan sisi: ")
// const luas = sisi * sisi
// console.log(luas)


var tahun = prompt('Masukkan tahun lahir: ')
var umur = new Date().getFullYear() - tahun
console.log(`Umur anda adalah ${umur} tahun`)

// menghitung keliling lingkaran
const jari = prompt("masukkan jari-jari: ")
const hasil = 2*Math.PI*jari
console.log(hasil) 

// menghitung luas persegi panjang
const panjang = prompt("masukkan panjang: ")
const lebar = prompt("masukkan luas: ")
const total = panjang * lebar
console.log(total)

// menghitung volume kubus
const sisiVolume = prompt("masukkan sisi: ")
const totalVolume = sisiVolume*sisiVolume*sisiVolume
console.log(totalVolume)

// program menghitung dan menampilkan suhu dalam farenheit
const suhuCelcius = prompt('masukkan suhu(c): ')
const toFarenheit = (suhuCelcius * (9/5))+32
console.log(toFarenheit)

// program aplikasi mengitung uang kembalian
const hargaTelur = 28000
const jumlahTelur = prompt("masukkan jumlah telur/kg: ")
const totalHarusDiBayar = hargaTelur * jumlahTelur
const bayar = prompt("Masukkan uang anda: ")
const kembalian = totalHarusDiBayar - bayar
console.log(kembalian)
