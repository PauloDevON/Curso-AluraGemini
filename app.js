function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
  
    // Itera sobre cada dado no array 'dados' (não mostrado no código)
    for (let dado of dados) {
      // Concatena HTML para cada dado, formatando o resultado
      resultados += `
        <div class="item-resultado">
          <h2><a href="#">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }