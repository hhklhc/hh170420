// Bài 1: Viết chương trình nhập vào một giá trị đo độ dài ở đơn vị cm, tính và in ra giá trị tương ứng ở 
// các đơn vị mm, m, km

// let a = Number(prompt("Nhập số Cm bạn muốn đổi nào ?"));

// function mM(a) {
//     alert("bằng " + (a * 10) + " mm");
//     return "bằng " + (a * 10) + " mm";
// }
// console.log(mM(a));

// function kM(a) {
//     alert("bằng " + (a / 100000) + " km");
//     return "bằng " + (a / 100000) + " km";
// }
// console.log(kM(a));

// function m(a) {
//     alert("bằng " + (a / 100) + " m");
//     return "bằng " + (a / 100) + " m";
// }
// console.log(m(a));


// Bài 2: Viết chương trình nhập vào một giá trị nhiệt độ ở đơn vị Celsius, in ra nhiệt độ ở đơn vị 
// Fahrenheit và Kevin tương ứng

// let c = Number(prompt("Đổi bao nhiêu độ C ?"));

// function f(c) {
//     alert("Độ F là " + ((c * 1.8) + 32));
//     return "Độ F là " + ((c * 1.8) + 32);
// }
// console.log(f(c));

// function k(c) {
//     alert("Độ K bằng " + (c + 273.15));
//     return "Độ K bằng " + (c + 273.15);
// }
// console.log(k(c));


// Bài 3: Viết chương trình nhập thời gian hiện tại tính theo số giây từ 0h, tính và in ra giá trị 
// giờ/phút/giây tương ứng theo định dạng h:m:s

let giay = Number(prompt("Nhập số giây cần chuyển đổi ?"));

function gio(giay) {
    alert("số giờ là: " + Math.floor(giay / 3600));
    return "số giờ là: " + Math.floor(giay / 3600);
}
console.log(gio(giay));

function p(giay) {
    alert("số phút tương ứng là: " + Math.floor((giay - Math.floor(giay / 3600) * 3600) / 60));
    return "số phút tương ứng là: " + Math.floor((giay - Math.floor(giay / 3600) * 3600) / 60);
}
console.log(p(giay));


function s(giay) {
    alert("số giây tương ứng là: " + (giay - Math.floor(giay / 3600) * 3600 - Math.floor((giay - Math.floor(giay / 3600) * 3600) / 60) * 60));
    return "số giây tương ứng là: " + (giay - Math.floor(giay / 3600) * 3600 - Math.floor((giay - Math.floor(giay / 3600) * 3600) / 60) * 60);
}
console.log(s(giay));

console.log("Và bây giờ là: " + Math.floor(giay / 3600) + "h : " + Math.floor((giay - Math.floor(giay / 3600) * 3600) / 60) + "p : " + (giay - Math.floor(giay / 3600) * 3600 - Math.floor((giay - Math.floor(giay / 3600) * 3600) / 60) * 60) + "s ");
