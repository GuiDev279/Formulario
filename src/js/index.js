
const formulario = document.getElementById("formulario");



formulario.addEventListener("submit", function (evento){
    evento.preventDefault()
    const nomeCampo = document.getElementById("nome");
    const nome = nomeCampo.value.trim();
    const emailCampo = document.getElementById("email");
    const email = emailCampo.value.trim();
    const mensagemCampo = document.getElementById("mensagem");
    const mensagem = mensagemCampo.value.trim();

    let temErro = false

    if (nome === ""){
        nomeCampo.classList.add("borda-vermelha");
        document.getElementById("erro-nome").textContent = "campo obrigatório";
        temErro = true
    }else{
        nomeCampo.classList.remove("borda-vermelha")
        nomeCampo.classList.add("borda-verde");
        document.getElementById("erro-nome").textContent = "";
    }

    if (email === "" || !email.includes("@")){
        emailCampo.classList.add("borda-vermelha")
        document.getElementById("erro-email").textContent = "campo obrigatório";
        temErro = true
    }else{
        emailCampo.classList.remove("borda-vermelha")
        emailCampo.classList.add("borda-verde")
        document.getElementById("erro-email").textContent = "";
    }
    
    if (mensagem === ""){
        mensagemCampo.classList.add("borda-vermelha");
        document.getElementById("erro-mensagem").textContent = "campo obrigatório";
        temErro = true;
    }else{
        mensagemCampo.classList.remove("borda-vermelha");
        mensagemCampo.classList.add("borda-verde");
        document.getElementById("erro-mensagem").textContent = "";
    }

    if (!temErro) {
      alert("Formulário enviado com sucesso!")
    }})