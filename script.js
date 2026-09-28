const botao = document.getElementById("ttk");

formulario.addEventListener ("submit", function(event) {
    event.preventDefault();
  const email = document.getElementById('#email').value;
  const nome = document.getElementById('#nome').value;
  const senha = document.getElementById('#senha').value;
  const end = document.getElementById('#end').value;
  const cpf = document.getElementById('#cpf').value;
  const img = document.getElementById('#img').files[0];

  let dados =`
  Nome: ${nome}
  senha: ${senha}
  email: ${email}
  endereço: ${end}
  cpf: ${cpf}
  imagem: ${img ? img.name : "sei la"}
  `;
  const arquivo = new blob ([dados], {
    type: "text/plain;charset=utf-8"
  });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(arquivo);
  link.download = "cadastro.txt";
  link.click ();

  URL.revokeObjectURL(link.href);

});    

