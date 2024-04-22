function inputScore() {
    let n;
    let studentScore = [];
    let score;
    do {
        n = parseInt(prompt("Nhap vao so hoc sinh"));
    } while (isNaN(n) || n <1 || n >100)
    for (let i = 0; i < n; i++) {
        score = parseFloat(prompt("Nhap vao diem so cua hoc sinh thu " +(i+1)));
        if (score >=0 && score <=10) {
            studentScore.push(score);
        } else {
            alert("Nhap vao so diem tu 0-10!");
            i--;
        }
    }
    return studentScore;
}