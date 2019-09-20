//chama a função ao carregar a página
window.onload = typeWriter;

//função para simular digitação no começo da página
function typeWriter(){
    //pega a classe dos elementos h1 e p para trocar o innerHTML
    let typeW = document.getElementsByClassName("typeW");
    
    //x e y = valores auxiliares para arrays e loops
    let x=0, y=0;

    /*Apagar os valores iniciais do innerHTML. Deixei os valores no arquivo original caso 
    a pessoa tenha plugin para bloquear javascript. Pra garantir que o conteúdo original apareça, mesmo que sem o efeito typewriter*/
    typeW[0].innerHTML = "";
    typeW[1].innerHTML = "";

    //declaração dos novos valores que serão substituidos no innerHTML
    let name = "Rafael Tonon";
    //let title = "Estudante Front-End";
    let title = "Web Dev";


    // setInterval para escrever as letras em um intervalo fixo
    let typing = setInterval(e => {
        if (x < name.length){
            typeW[0].innerHTML += name[x];
            x++;
        
        } else if (y < title.length){
            //remove a border do ::after da tag h1
            typeW[0].classList.remove("kb-cursor");
            //adiciona a border do ::after na tag p
            typeW[1].classList.add("kb-cursor")
            typeW[1].innerHTML += title[y];
            y++;
        
        } else {
            //quando toda a váriavel é escrita então remove a border fixa e troca por uma animação da border piscando
            typeW[1].classList.remove("kb-cursor");
            typeW[1].classList.add("kb-cursor-animation");
            //fecha o setInterval
            clearInterval(typing);
        }
    }, 150);
}