/*

    Objetivo - quando clicarmos na aba temos que mostrar
    o conteudo da aba que foi clicado pelo usuario e
    esconder o conteudo da aba anterior

    - passo 1 - dar um jeito de pegar os elementos que
    representam as aba no HTML

    - passo 2 - dar um jeito de identificar o clique
    no elemento da aba

    - passo 3 - quanndo o usuario clicar, desmarcar
    a aba selecionado

    - passo 4 - marcar a aba clicado como selecionado

    - passo 5 - esconder o conteúdo anterior

    - passo 6 - moatrar o conteúdo da aba selecionado
*/

    // passo 1 - dar um jeito de pegar os elementoa que representam as abas
    const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    
    // passo 2 - dar um jeito de identificar o clique no elemento da aba
    aba.addEventListener("click", function() {
                    
        if(aba.classList.contains("selecionado"))
        {return;}



        selecionarAba(aba)

        mostrarInformacoesDaAba(aba)
    })
})


function selecionarAba(aba) {
    // passo 3 - quanndo o usuario clicar, desmarcar a aba selecionado
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    // passo 4 - marcar a aba clicado como selecionado
    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {
    // passo 5 - esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    // passo 6 - moatrar o conteúdo da aba selecionado
    const idDoElementoDeInformacoesDaAba =
    `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}


