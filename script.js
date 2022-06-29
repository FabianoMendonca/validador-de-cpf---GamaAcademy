function validacao() {
  const cpf = document.getElementById("cpf_digitado").value;

  document.getElementById("error").style.display = "none";
  document.getElementById("success").style.display = "none";

  //   console.log(cpf);

  let validacpf = (cpf) => {
    if (cpf.length != 11) {
      return false;
    } else if (isNaN(cpf)) {
      return false;
    } else {
      let sum = 0;
      let verDigito;
      for (let i = 1; i < 10; i++) {
        sum += cpf[i - 1] * i;
      }
      verDigito = sum % 11 == 10 ? 0 : sum % 11;
      if (verDigito != cpf[9]) return false;
      sum = 0;
      for (let i = 0; i < 10; i++) {
        sum += cpf[i] * i;
      }
      verDigito = sum % 11 == 10 ? 0 : sum % 11;
      if (verDigito != cpf[10]) return false;

      //console.log(sum);
      return true;
    }
  };

  if (validacpf(cpf)) {
    document.getElementById("success").style.display = "block";
  } else {
    document.getElementById("error").style.display = "block";
  }
}
