function arttir() {
    var sonuc = document.getElementById("sonuc");
    var currentValue = Number(sonuc.value);
    
    if (currentValue >= 0) {
        sonuc.value = currentValue + 1;
    }
}
     
function azalt() {
    var sonuc = document.getElementById("sonuc");
    var currentValue = Number(sonuc.value);
    
    if (currentValue > 0) {
        sonuc.value = currentValue - 1;
    }
}