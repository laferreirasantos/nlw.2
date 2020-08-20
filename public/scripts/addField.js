//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    //Duplicar os campos: Que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Pegar os campos: Que campo?
    const fields = newFieldContainer.querySelectorAll('input')

    //Para cada campo, limpar
    fields.forEach(function(field) {
        //pega o field do momento e limpa ele
        field.value =""
    })

    //Colocar na pratica: Onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}