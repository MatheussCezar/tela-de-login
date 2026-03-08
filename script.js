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