//Função que cria as variaveis e executa a pesquisa na base de dados 
function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
    
    //Variavel que recebe o valor inserido na barra de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);
   
    if(!campoPesquisa) {
        section.innerHTML = `
            <div class="item-resultado">
                <p>Campo de pesquisa em branco.</p>
            </div>
        `
        return
    };
    
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados formatados.
    let resultados = "";
    let titulo = "";
    let categoria = "";
    let descricao = "";
    let tags = "";

    
    // Itera sobre cada dado na lista de dados (descrita no arquivo "dados.js").
    for (let dado of dados) {
        //resultados = "";
        titulo = dado.titulo.toLowerCase();
        categoria = dado.categoria.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        //se o dado.titulo inclue (pesquisa) então faça ....
        if (titulo.includes(campoPesquisa) || categoria.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Constrói o HTML para cada item da pesquisa, formatando os dados do objeto 'dado'.
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <h4>
                    Categoria: ${dado.categoria}
                </h4>
                <p class="descricao-meta">${dado.descricao}<br>
                Conheça mais essa pessoa divulgadora e seu trabalho:</p>
                <a href="${dado.wiki}" target="_blank">Acesse sua pagina da Wikipedia</a><br>
                <a href="${dado.youtube}" target="_blank">Acesse seu canal do Youtube, que já conta com ${dado.numInscritos} inscritos</a><br>
                <a href="${dado.instagram}" target="_blank">Acesse seu perfil do Instagram</a><br>
            </div>
            `
        } 
        // else {
        //     resultados = `
        //     <div class="item-resultado">
        //         <p>Nenhum resultado encontrado</p>
        //     </div>
        //     `
        // };
    };
    if(!resultados) {
        resultados = `
            <div class="item-resultado">
                <p>Nenhum resultado encontrado</p>
            </div>
        `
    }
  
    // Atribui a string com os resultados formatados ao conteúdo HTML da seção.
    section.innerHTML = resultados;
  };