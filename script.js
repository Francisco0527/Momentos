// Seleciona o modal e o iframe
const modal = document.getElementById("photoModal");
const closeModalBtn = document.querySelector(".close-btn");
const photoFrame = document.getElementById("photoFrame");

// Função para abrir o modal com o link da cidade
function openModal(link) {
  photoFrame.src = link;
  modal.style.display = "block";
}

// Fecha o modal ao clicar no botão de fechar (X)
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
  photoFrame.src = ""; // Limpa o iframe ao fechar o modal
});

// Bloqueia o fechamento do modal clicando fora do conteúdo
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    // O modal só pode ser fechado pelo botão de "X"
    return;
  }
});

// Abre o modal diretamente ao clicar na cidade
document.querySelectorAll(".city-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const link = button.getAttribute("data-link");
    openModal(link);
  });
});
