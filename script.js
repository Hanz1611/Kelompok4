
function calculateAMB() {
    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseFloat(document.getElementById("age").value);

    let AMB;
    if (gender === "male") {
        AMB = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    } else {
        AMB = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    }

    document.getElementById("output").textContent = `AMB Anda adalah ${AMB.toFixed(2)} kkal/hari.`;
}


