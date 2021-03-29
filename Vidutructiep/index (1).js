let arr = ['tung', { name: 'techmaster', age: 5 }, 4, false, true, 8]

// loc ra mang moi chi gom number [4, 8]

// cho 1 mang rỗng -> []
// type of cua cac phan tu -> neu la 'number' -> thi thoa man -> push phan tu do vao mang rỗng đã tạo
let numberArr = arr.filter((item, index) => {
    if (typeof item === 'number') {
        return item
    }
})
console.log('numberArr', numberArr)