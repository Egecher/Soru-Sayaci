var result = document.getElementById('result');
var currentValue = () => Number(result.value);

function increase() {
    result.value = currentValue() + 1;
}

function reduce() {
    if (currentValue() > 0) result.value = currentValue() - 1;
}

function headerRename(element) {
    const newHeader = prompt("Sayaç başlığını düzenleyin:");
    if (newHeader == null || newHeader.trim() === "") return;
    element.textContent = newHeader;
}