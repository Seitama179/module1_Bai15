function footToMeter() {
    let foot = document.getElementById("input").value;
    //let meter = foot * 0.305;
    document.getElementById("result").innerHTML= foot * 0.305;
    //return meter;
}
function meterToFoot() {
    let meter = document.getElementById("input").value;
    //let foot = meter * 3.279;
    document.getElementById("result").innerHTML= meter * 3.279;
    // return foot;
}