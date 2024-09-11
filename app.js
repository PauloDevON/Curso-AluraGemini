function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    console.log(campoPesquisa)

    campoPesquisa = campoPesquisa.toLowerCase()
    
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado</p>"
      return
    } 
      
    // Itera sobre cada dado no array 'dados' (não mostrado no código)
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // Cria um novo elemento
      resultados += `
      <div class="item-resultado">
        <h2><a href="#">${dado.titulo}</a></h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>
    `;
        
      }      
    }

    if (!resultados){
      resultados = "<p>Nada foi encontrado. Digite o nome de um deus</p>"

    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }