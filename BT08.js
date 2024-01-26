function updateWeights(unit) {
    const kilograms = document.getElementById('kilograms').value;
    const grams = document.getElementById('grams').value;
    const pounds = document.getElementById('pounds').value;
    const ounces = document.getElementById('ounces').value;

    switch (unit) {
      case 'kilograms':
        document.getElementById('grams').value = kilograms * 1000;
        document.getElementById('pounds').value = kilograms * 2.20462;
        document.getElementById('ounces').value = kilograms * 35.274;
        break;
      case 'grams':
        document.getElementById('kilograms').value = grams / 1000;
        document.getElementById('pounds').value = grams / 453.592;
        document.getElementById('ounces').value = grams / 28.3495;
        break;
      case 'pounds':
        document.getElementById('kilograms').value = pounds / 2.20462;
        document.getElementById('grams').value = pounds * 453.592;
        document.getElementById('ounces').value = pounds * 16;
        break;
      case 'ounces':
        document.getElementById('kilograms').value = ounces / 35.274;
        document.getElementById('grams').value = ounces * 28.3495;
        document.getElementById('pounds').value = ounces / 16;
        break;
      default:
        break;
    }
}