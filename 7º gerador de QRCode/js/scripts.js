const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img")

//eventos
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value

    // Verifica se o input está vazio
    if(!qrCodeInputValue) return

    // Altera o texto do botão
    qrCodeBtn.innerText = "Gerando código..."

    // Define a URL da imagem com o QR Code
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue} `

    // Adiciona a classe "active" ao container apenas após a imagem carregar
    qrCodeImg.onload = () => {
        container.classList.add("active");
        qrCodeBtn.innerText = "QR Code gerado!"; // Volta o texto do botão
    };

    // Tratamento de erro caso a imagem não carregue
    qrCodeImg.onerror = () => {
        qrCodeBtn.innerText = "Erro ao gerar!";
    };

}

// Evento de clique no botão
qrCodeBtn.addEventListener("click", () => {
    generateQrCode()
})