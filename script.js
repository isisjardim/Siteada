document.getElementById("BotaoEnviar").addEventListener("click", validaformulario)

function validaformulario(){
   if(document.getElementById("nome").value != "" && 
      document.getElementById("email") != "") {
         alert("Prontinho! Você receberá as novidades por email.")
   }else 
         alert("Por favor, preencha os campos nome e email!")
   }

