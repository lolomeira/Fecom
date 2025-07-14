<script>
  let nivel = 20;

  function aumentarNivel() {
    if (nivel < 90) {
      nivel += 10;
      atualizarNivelAgua();
    } else {
      alert("Nível crítico atingido!");
    }
  }

  function resetarNivel() {
    nivel = 20;
    atualizarNivelAgua();
  }

  function atualizarNivelAgua() {
    document.getElementById('agua').style.height = nivel + "%";
    document.getElementById('contador').innerText = "Nível do mar: " + nivel + "%";
  }

  // Movimento da onda com mouse
  document.addEventListener("mousemove", function (e) {
    const alturaJanela = window.innerHeight;
    const mouseY = e.clientY;
    const alturaBase = nivel;

    // Calcula a variação (quanto mais para o topo da tela, maior o nível)
    const variacao = ((alturaJanela - mouseY) / alturaJanela) * 10; // máx 10%
    const novaAltura = alturaBase + variacao;

    document.getElementById('agua').style.height = novaAltura + "%";
  });
</script>
