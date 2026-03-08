const campoCEP = document.getElementById("CEP");
const rua = document.getElementById("rua");
const bairro = document.getElementById("bairro")
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado")
const complemento = document.getElementById("complemento")

async function buscaDadosCEP(CEP){
        rua.value = "";
        complemento.value = "";
        bairro.value = "";
        cidade.value = "";
        estado.value = "";
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
    if(campoCEP.value.length === 8){
        buscaDadosCEP(campoCEP.value);
    }
})