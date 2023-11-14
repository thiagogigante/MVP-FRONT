const bot_enviar = document.querySelector('.enviarlogin');
bot_enviar.addEventListener('click' , function(){
  alert("Acesso Concedido, Seja bem Vindo!")
  open('agenda.html')
} )

const bot_agendar = document.querySelector('.agendaratendimento')
bot_agendar.addEventListener('click', function () {
  alert("Atendimento agendado com Sucesso!")
  })