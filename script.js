document.addEventListener("DOMContentLoaded", function () {
    const fileInputs = document.querySelectorAll(".upload-input");

    fileInputs.forEach((input) => {
        input.addEventListener("change", function () {
            const fileName = this.files[0]?.name || "Niciun fișier selectat.";
            const fileDisplay = this.nextElementSibling;
            fileDisplay.textContent = `Fișier atașat: ${fileName}`;
        });
    });
});