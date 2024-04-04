INDEX.HTML

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meus objetivos do ano</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <section class="conteudo-principal">
        <h2 class="titulo-principal">Meus objetivos do ano<span>_</span></h2>
        <div class="botoes">
            <button class="botao">cursos na Alura</button>
            <button class="botao">Criar projetos em javascript</button>
            <button class="botao">Criar portfolio</button>
            <button class="botao">Atualizar meu currículo</button>
        </div>
    </section>
</body>
</html>




STYLE.CSS

@import url();

:root{
    --cor-de-fundo: #1e1e1e;
    --verde: #6fff57;
    --branco: #ffffff;
    --botao-ativo: #3a375e;
    --botao-inativo: rgba(58, 55, 94, 0.5);
    --texto-fundo: rgba(58, 55, 94, 0.3);
}

body{
    background-color: var(--cor-de-fundo);
    color: var(--branco);
    font-family: 'Chakra Petch', sans-serif;
}


.conteudo-principal{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
}

.titulo-principal{
    text-align: left;
    width: 100%;
    font-size: 32px;
}
