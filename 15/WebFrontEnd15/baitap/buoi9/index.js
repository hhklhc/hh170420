//bài tập viết phương trình nhập 2 số a và b, tính và on ra kết quả tất cả các
//phép tính cơ bản

// let a = Number(prompt("Nhập số thứ nhất nào cưng êi? ^_^"));
// console.log("số" + " a" + " là" + " " + a);
// let b = Number(prompt("Nhập thêm số nữa nhé?"));
// console.log("số" + " b" + " là" + " " + b);

// function tong(a, b) {
//     alert("kết quả phep cong" + " " + (a + b));
//     1
//     return "ket qua " + " " + (a + b);
// };
// console.log(tong(a, b));

// function nhan(a, b) {
//     alert("ket qua phep nhan" + " " + (a * b));
//     return "ket qua phep nhan " + (a * b);
// }
// console.log(nhan(a, b));

//BÀI TẬP 

// BÀI 1: Viết phương trình nhập 2 số a, b tính và in ra kết quả tất cả phép tinh cơ bản với số đó
// let a = Number(prompt("Nhập số thứ nhất vào nào ? "));
// let b = Number(prompt("Nhập số tiếp theo nhie ? "));


// function cong(a, b) {
//     alert("ket qua tong a, b la: " + (a + b));
//     return "ket qua tong a, b la: " + (a + b);
// };
// console.log(cong(a, b));

// function nhan(a, b) {
//     alert("ket qua nhan a, b la: " + (a * b));
//     return "ket qua nhan a, b la: " + (a * b);
// };
// console.log(nhan(a, b));

// function chia(a, b) {
//     alert("ket qua phep chia a, b la: " + (a / b));
//     return "ket qua phep chia a, b la: " + (a / b);
// };
// console.log(chia(a, b));

// function tru(a, b) {
//     alert("ket qua phep tru a, b la: " + (a - b));
//     return "ket qua phep tru a,b la: " + (a - b);
// };
// console.log(tru(a, b));

//BÀI 2: Viết chương trình nhập vào chiều dài, chiều rộng của hình chữ nhật, tính và in ra chu vi, diện tích của hình chữ nhật đó

// let x = Number(prompt("Nhập chiều dài vào đi ?"));
// let y = Number(prompt("Chiều rộng nữa chứ ?"));

// function chuVi(x, y) {
//     alert("chu vi hình chữ nhật là: " + ((x + y) * 2));
//     return "chu vi hình chữ nhật là: " + ((x + y) * 2);
// };
// console.log(chuVi(x, y));

// function dienTich(x, y) {
//     alert("diện tích hình chữ nhật là: " + (x * y));
//     return "diện tích hình chữ nhật là: " + (x * y);
// };
// console.log(dienTich(x, y))

//BÀI 3: Viết chương trình nhập vào bán kính hình tròn, tính và in ra chu vi, diện tích của hình tròn

// let d = Number(prompt("Nhập đường kính hình tròn ?"));

// function chuVi(d) {
//     alert("Chu vi hình tròn là: " + (d * 3.14));
//     return "Chu vi hình tròn là: " + (d * 3.14);
// };
// console.log(chuVi(d));

// function dienTich(d) {
//     alert("Diện tích hình tròn là: " + ((d * d * 3.14) / 4));
//     return "Diện tích hình tròn là: " + ((d * d * 3.14) / 4);
// };
// console.log(dienTich(d));

//BÀI TẬP PHẦN OPERATORS 

//Bài 1 VIết  chương trình nhập một số n, kiểm tra và in ra số đó là chẵn hay lẻ, sử dụng toán tử logic

// let n = Number(prompt("Nhập n ?"));
// n % 2 == 0 && 1console.log(n + " la so chan");
// n % 2 !== 0 && console.log(n + " la so le");

//Bai 2: Viết chương trình nhập vào 2 số a, b. Kiểm tra và in ra số lớn hơn, sử dụng toán tử logic

// let a = Number(prompt("nhap so a di nao ?"));
// let b = Number(prompt("nhap so b nua ?"));
// a < b && console.log(a + " < " + b);
// a > b && console.log(a + " > " + b);

//Bai 3 Viết chương trình nhập một chuỗi str. Sử dụng toán tử logic kiểm tra và in ra nếu:

// let str = String(prompt("ai dep trai nhat ?"));
// str == "Thầy Ba" && alert("thầy Ba đẹp trai thật ^__^");
// str == "Thầy Ba" && console.log("Thầy Ba đẹp trai thật ^__^");
// str !== "Thầy Ba" && alert("khônng sao, thầy Ba vẫn cứ là đẹp ^__^");
// str !== "Thầy Ba" && console.log("kệ, dù sao thầy Ba vẫn đẹp trai ^^");

//HOMEWORK
//Bài 1:  Viết chương trình nhập vào một giá trị đo độ dài ở đơn vị cm, tính và in ra giá trị tương ứng ở các đơn vị mm, m, km

// let cm = Number(prompt("Ban muon doi bao nhieu cm ?"));

// function doiMm(cm) {
//     alert(cm + " cm" + " = " + (cm * 10) + " mm");
//     return cm + " cm" + " = " + (cm * 10) + " mm";
// }
// console.log(doiMm(cm));

// function doiKm(cm) {
//     alert(cm + " cm" + " = " + (cm / 10000) + "km");
//     return cm + " cm" + " = " + (cm / 10000 + "km");
// };
// console.log(doiKm(cm));


// let max = a;
// b >= max && (max = b);
// c >= max && (max = c);
// conso
// let char = String(prompt(" Kiem tra ki tu"));

// if ((char >= "A" && char <= "Z") ||
//     (char >= "a" && char <= "z"))
//     ...
// // if (("A" )) (char == "a") {
// //     console.log(char + " la nguyen am");
// // } else if (char == "e") {
// //     console.log(char + " la nguyen am");
// // } else if (char == "i") {
// //     console.log(char + " la nguyen am");
// // } else if (char == "o") {
// //     console.log(char + " la nguyen am");
// // } else if (char == "u") {
// //     console.log(char + " la nguyen am");
// // } else {
// //     console.log(char + " la phu am");
// // }
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);
// let sum = 0;
// for (let i = 1; i <= 1000; i = i + 2) {
//     sum += 1;
// }
// console.log(sum)
// let sum = 0;
// for (let i = 0; i <= 100; i = i + 3) {
//     if (i % 2 !== 0) {
//         sum += 1;
//     }
// }
// console.log(sum);

// let sum = 0;
// for (let i = 0; i <= 1000; i = i + 1) {
//     if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
//         sum += i;
//     }
// }
// console.log(sum)
//for (let i = 0; i <= 10; i++) {
// i = 1 -> 10
// i * 1 -> 10
// for (let j = 1; j <= 10; j++) {
//     console.log(i + " * " + j + " = " + i * j);
// }

//     let s = "";
//     for (let j = 1; j <= 10; j++) {
//         s += i * j + " ";
//     }
//     console.log(s);
// }
// let soLonNhat;
// let soNhoNhat;

// for (let i = 0; true; i++) {
//     let j = Number(prompt("nhập số lượng số tùy í ?"));
//     if (j == null || j == "") {
//         break;
//     }
//     if (i = 0) {
//         soLonNhat = j;
//         soNhoNhat = j;
//     }
//     if (j >= soLonNhat) {
//         soLonNhat = j;
//     }
//     if (j <= soNhoNhat) {
//         soNhoNhat = j;
//     }

//     console.log("so lon nhat la: " + soLonNhat)
//     console.log("so nho nhat" + soNhoNhat)


// function isPrime(n) {
//     let n = Number(prompt("nhap so de kiem tra ?"));
//     let isTrue = true;

//     if (n < 2) {
//         isTrue = false;
//     } else {
//         for (let i = 2; i <= n / 2; i++) {
//             if
//         }
//     }
// }
function double(number) {
    return number * 2;
}

function f(otherFunction) {
    return otherFunction(10);
}
console.log(f(double));
//otherFunction = double
//otherFunction () -> double()