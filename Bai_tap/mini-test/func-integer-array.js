function integerArr() {
    let n;
    let arr = [];
    let num;
    do {
        n = parseInt(prompt("Nhap vao so phan tu mang"));
    } while (isNaN(n) || n <1 || n >100)
    for (let i = 0; i < n; i++) {
        num = parseFloat(prompt("Nhap vao cac so cua mang"));
        arr.push(num);
    }
    return arr;
}