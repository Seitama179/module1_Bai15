function avrScore(a) {
    let sum = 0;
    let avr ;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    avr = sum/a.length;
    return avr;
}