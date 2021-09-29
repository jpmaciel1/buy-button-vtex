# buy-button-vtex
Botão de adicionar ao carrinho VTEX IO

<strong>DEPENDÊNCIAS NECESSÁRIAS:</br>
<li>Styled-Components (npm i styled-components)</li></strong></br>





<strong>Props do botão: </strong>


text = {string} --> Determina o nome que irá aparecer no botão. </br>

idProduct = {string / int} --> Determina o produto que será adicionado ao carrinho quando o botão for acionado. </br>

priceButton = {boolean} --> Determina se o preço do botão irá aparecer ou não (preço não aparece Default) </br>

width = {string}  -->  Determina largura do botão. </br>

height = {string} --> Determina altura do botão. </br>

background = {string} --> Determina o background do botão. </br>

border = {string} --> Determina a borda do botão. </br>

color = {string} --> Determina a cor do texto do botão. </br>

fontSize = {string} --> Determina o tamanho do texto do botão. </br>

fontWeight = {string} --> Determina o weight do texto do botão. </br>

fontFamily = {string} --> Determina a fonte do texto do botão. </br>

backgroundHover = {string} --> Determina o background quando o mouse passa pelo botão. </br>

borderHover = {string} --> Determina a borda quando o mouse passa pelo botão. </br>

colorHover = {string} --> Determina a cor da fonte quando o mouse passa pelo botão. </br>






EXEMPLO DE USO: 
    

        const id = 10;


        <CustomBuyButton
                         width = "190px"
                         height = "30px"
                         background = "transparent"
                         border = "solid 1px white"
                         color = "white"
                         priceButton={true}
                         idProduct={id}
                         text="comprar"
        />
    
