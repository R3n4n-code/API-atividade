export class crud {
        constructor() {
            this.API = "https://crudcrud.com/api/31e80558eb3c499fbc85960a927aeba5"
        }
    

    criar(nome, email) {
    return fetch(`${this.API}/cadastro`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({ nome, email })
    }).then(respsota => respsota.json())

    }
    mostrar() {
        return fetch(`${this.API}/cadastro`, {
        method: "GET"
    })    
        .then(resposta => resposta.json())
    }

    deletar(id) {
        return fetch(`${this.API}/cadastro/${id}`, {
        method: "DELETE",
        
    })
    }
    
}

export class funcionalidade {
    constructor(servico) {
        this.listar = document.getElementById("listar")
        this.servico = servico

        this.iniciarEventos()

    }


 iniciarEventos() {
        document.getElementById("bt").addEventListener("click", () => {
            this.adicionar()
        })

        document.getElementById("bt2").addEventListener("click", () => {
            this.renderizar()
        })
    }

    adicionar() {
        const nome = document.getElementById("nome").value
        const email = document.getElementById("email").value
        
        this.servico.criar(nome, email)
        
        const paragrafo = document.createElement("p")

        paragrafo.textContent = "Cadastro criado com sucesso!"
        document.body.appendChild(paragrafo)
            
    }

    renderizar() {
        this.listar.innerHTML = ""

        this.servico.mostrar()
            .then(dados => {
                dados.forEach(cadastro => {
                    this.criarItem(cadastro)
                })
            })
    }

    criarItem(cadastro) {
        const item = document.createElement("li")

        item.innerHTML = `
        ${cadastro.nome} - ${cadastro.email}
        <button>X</button>
        `

        const botao = item.querySelector("button")

        botao.addEventListener("click", () => {
            this.servico.deletar(cadastro._id)
                .then(() => {
                    item.remove()
                })
        })

        this.listar.appendChild(item)
    }
    

}    