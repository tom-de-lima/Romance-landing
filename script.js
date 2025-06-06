// Fade-in suave da página
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0
  setTimeout(() => {
    document.body.style.transition = "opacity 1.5s ease-in-out"
    document.body.style.opacity = 1
  }, 100)
})

// Função que será disparada pelo botão
const musica = new Audio("Music.MP3") // Verifique se o arquivo está nomeado exatamente assim
musica.loop = true
musica.volume = 0.15

function tocarMusica() {
  musica
    .play()
    .then(() => {
      document.querySelector(".romantic-play").style.display = "none" // esconde botão após o clique
    })
    .catch((err) => {
      console.log("Erro ao iniciar música:", err.message)
    })
}
