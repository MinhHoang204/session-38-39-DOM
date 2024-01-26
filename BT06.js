let remainingWater = 2;

function pourWater(amount) {
    remainingWater -= amount;
    if (remainingWater < 0) {
        remainingWater = 0;
    }
    document.getElementById('waterLevel').style.height = `${(2 - remainingWater) / 2 * 100}%`;
    document.getElementById('remainingWater').textContent = `Remaining: ${remainingWater.toFixed(2)}L`;
}