function calculateScore() {
    const scale = parseInt(document.getElementById("scale").value);
    const q1 = parseInt(document.getElementById("q1").value);
    const q2 = parseInt(document.getElementById("q2").value);
    const q3 = parseInt(document.getElementById("q3").value);
    let score = q1 + q2 + q3;

    document.getElementById("score").innerHTML = score;
}
