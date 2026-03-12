
document.getElementById("bt").addEventListener("click", () => {
    const nome = document.getElementById("nome").value

    const email = document.getElementById("email").value


    fetch("https://crudcrud.com/api/ae9b813c82e0487eac412b12b42919e9/cadastro", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            nome: nome,
            email: email
        })

    })

        .then(resposta => resposta.json())
        .then(dados => {
            console.log(dados)
        })
})
let click = 0
document.getElementById("bt2").addEventListener("click", () => {
    
    click++

    if (click > 1) {
        return
    }

    const mostrar = document.getElementById("listar")
    fetch("https://crudcrud.com/api/ae9b813c82e0487eac412b12b42919e9/cadastro")
        .then(resposta => resposta.json())
        .then(listar => {

            listar.forEach(cadastro => {
                const item = document.createElement("li");

                item.innerHTML = `${cadastro.nome} - ${cadastro.email} <button id= "bt3" onclick="remover('${cadastro._id}', this)">X</button>`

                mostrar.appendChild(item);
            })

        });



})

function remover(id, botao){

    fetch(`https://crudcrud.com/api/ae9b813c82e0487eac412b12b42919e9/cadastro/${id}`, {
        
        method: "delete"
    })

    .then(() => {

        botao.parentElement.remove()

    })
    
}



