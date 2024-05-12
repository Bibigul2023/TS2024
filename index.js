function addProduct() {
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Введите название продукци или подвида продукции";
    document.getElementById("productInput").appendChild(input);
}
