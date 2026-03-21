const emailjs_public_key = "w3f32XPsD8jZp2vDK"

window.addEventListener('scroll', function () {
  const header = document.querySelector('header')
  const select = document.querySelector('select')
  if (window.scrollY > 50) {
    header.classList.add('bg-white')
    header.classList.add('shadow-md')
    select.classList.add('border')
  } else if (window.scrollY < 50) {
    header.classList.remove('shadow-md')
    header.classList.remove('bg-white')
    select.classList.remove('border')
  }
})


emailjs.init({
  publicKey: emailjs_public_key
})
const enviarEmail = () => {
  const form = document.getElementById("#contactForm");
  const nomeContato = document.getElementById("name");
  const emailContato = document.getElementById("email");

  const buttonSubmit = document.getElementById("submitButton");
  buttonSubmit.disabled = true;
  buttonSubmit.textContent = "Enviando...";

  const parametrosTemplate = {
    nome: nomeContato.value,
    email: emailContato.value,
    title: "Boas vindas ao Jadoo",
    // Você pode enviar o e-mail 'para' essa variável configurando o template no painel deles
  };

  emailjs.send("service_whx25nj", "template_mz9z1sv", parametrosTemplate)
    .then((resposta) => {
      buttonSubmit.disabled = false;
      buttonSubmit.textContent = "Enviar";
      nomeContato.value = ""
      emailContato.value = ""
      console.log("E-mail enviado com sucesso!", resposta.status, resposta.text);
    })
    .catch((erro) => {
      console.error("Falha ao enviar o e-mail.", erro);
    });
};

globalThis.window.onload = function () {
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    enviarEmail();
  })
}