// use for book table btn //
let bookTableBtn = document.getElementById("tableTog");
// use for book form section //
let tableHs = document.getElementById("tableHs")
// use for table close button //
let tableClose = document.getElementById("tableClose")


bookTableBtn.addEventListener("click", () => {
    // tableHs.classList.add("show");
    tableHs.style.display = "block"
    console.log(bookTableBtn);
})


tableClose.addEventListener("click", () => {
    // tableHs.classList.add("hide");
    tableHs.style.display = "none"
    console.log(tableClose);  
})

