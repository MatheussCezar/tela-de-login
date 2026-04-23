const campoCEP = document.getElementById("CEP");
const rua = document.getElementById("rua");
const bairro = document.getElementById("bairro")
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado")
const complemento = document.getElementById("complemento")

async function buscaDadosCEP(CEP){ 
    try {
        const response = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
        data = await response.json();

        rua.value = data.logradouro;
        complemento.value = data.complemento
        bairro.value = data.bairro
        cidade.value = data.localidade;
        estado.value = data.uf

    } catch (error) {
        console.error("Erro:", error);
    }
}

campoCEP.addEventListener("input", function(){
    const CEP = campoCEP.value;
    if(CEP.length  >= 8){
        for(let i = 0; i < 9; i++){
            if(CEP[i] < '0' || CEP[i] > '9'){
                CEP.slice(i);
            }
        }
        rua.value = "";
        complemento.value = "";
        bairro.value = "";
        cidade.value = "";
        estado.value = "";
        buscaDadosCEP(CEP);
    }
})

const estadoCivil = document.getElementById("estadoCivil");
const camposConjuge = document.getElementById("conjuge");

estadoCivil.addEventListener("change", function(){
    if(estadoCivil.value == "1" || estadoCivil.value == "3"){
        camposConjuge.style = '';
    } else {
        camposConjuge.style = "display: none;"
    }
})

document.getElementById("dataNasc").addEventListener('input', function(e) { //Formata data dd/mm/aaaa
    let v = e.target.value.replace(/\D/g, '');
    v = v.replace(/(\d{2})(\d)/, '$1/$2');    
    v = v.replace(/(\d{2})\/(\d{2})(\d)/, '$1/$2/$3');

    e.target.value = v;
});

document.querySelectorAll(".CPF").forEach(element => {
    element.addEventListener('input', function(e) { //Deixa o espaçamento do CPF ". e -"
        let v = e.target.value.replace(/\D/g, '');
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        e.target.value = v;
    })
});

document.querySelectorAll(".RG").forEach(element => { 
    element.addEventListener('input', function(e) { //Deixa o espaçamento do RG ". e-"
        let v = e.target.value.replace(/\D/g, '');
        v = v.replace(/(\d{2})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d{2})$/, '$1-$2');
        e.target.value = v;
    });
});

document.getElementById("telefone").addEventListener('input', function(e) { //Deixa o númerocertinho "+55 (99) 9 9999-9999"
    let v = e.target.value.replace(/\D/g, '');
    v = v.replace(/^(\d{2})(\d)/, '+$1 ($2');
    v = v.replace(/^(\+\d{2} \(\d{2})(\d)/, '$1) $2');
    v = v.replace(/(\d{1})(\d{4})(\d{4})$/, '$1 $2-$3');
    e.target.value = v;
});

document.getElementById("CEP").addEventListener('input', function(e) { //Deixa o CEP com "-"
    let v = e.target.value.replace(/\D/g, ''); 
    v = v.replace(/(\d{5})(\d)/, '$1-$2'); 
    e.target.value = v;
});
