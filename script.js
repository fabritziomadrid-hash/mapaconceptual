const botao = document.getElementById("modo");

botao.onclick = () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

botao.innerHTML="☀️ Modo Claro";

}else{

botao.innerHTML="🌙 Modo Escuro";

}

};
