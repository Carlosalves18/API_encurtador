function validaFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmSenha = document.getElementById('confirmSenha').value;
  
   
    if (nome === '' || email === '' || senha === '' || confirmSenha === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }
  
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }
  
    
    if (senha.length < 8) {
        alert("A senha deve ter no mínimo 8 caracteres.");
        return;
    }
  
   
    if (confirmSenha !== senha) {
        alert("As senhas não coincidem.");
        return;
    }
  
   
    alert("Formulário válido. Enviando dados...");
  }
  
  function olhoPassword() {
    const senhaInput = document.getElementById('senha');
    const icon = document.getElementById('olhoicon');
  
    
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        icon.className = "fa fa-eye-slash";
    } else {
        senhaInput.type = "password";
        icon.className = "fa fa-eye";
    }
  }
  function olhoPassword2() {
    const senhaInput = document.getElementById('senha');
    const icon = document.getElementById('olhoicon2');
  
    
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        icon.className = "fa fa-eye-slash";
    } else {
        senhaInput.type = "password";
        icon.className = "fa fa-eye";
    }
  }
  function abrirModal(tipo) {
    var modal = document.getElementById('modal-' + tipo);
    modal.style.display = 'block';
  }
  
  function fecharModal(tipo) {
    var modal = document.getElementById('modal-' + tipo);
    modal.style.display = 'none';
  }

function encurtarUrl() {
    
    let url = document.getElementById("input-url").value;
    if(!url) {
        alert("É preciso inserir uma URL para encurtar");
        return;
    }


    
    let headers = {
        "Content-Type": "application/json",
        "apiKey": "6c1d42898ad84dda9974394f4d0bf7be" 
    }

    
    let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" }
    }

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            let inputUrl = document.getElementById("input-url");
            inputUrl.value = json.shortUrl;
        });
}

function copiar() {
    let inputUrl = document.getElementById("input-url");

    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(inputUrl.value);

    alert(`URL copiada: ${inputUrl.value}`);
}
