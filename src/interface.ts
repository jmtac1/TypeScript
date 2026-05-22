// Em TypeScript, as interfaces funcionam como contratos para definir a estrutura ou o formato de um objeto. Elas são usadas para 
// garantir a consistência do código em tempo de desenvolvimento, permitindo que a IDE forneça autocompletar e avisos caso 
// propriedades obrigatórias sejam esquecidas.


// usando interface para definr tipos de objetos:
interface CarteiraDoUsuario {
    moedas?: number, // interrogação indica que a propriedade é opcional
    creditos?: number
}

interface Usuario {
    nome: string,
    dataDeCriacao: Date,
    carteira?: CarteiraDoUsuario 
}

// como adicionar novas propriedades ou métodos a uma interface existente: esse recurso pode ser util para estender interfaces externas
interface Usuario {
    falar(): void
}

function criarUsuario(nome: string): Usuario {
    return { nome, dataDeCriacao: new Date(), falar() {
        console.log('ola')
    } }
}

function AtualizarCarteira(usuario: Usuario, carteira: CarteiraDoUsuario) {
    usuario.carteira = {...usuario.carteira, ...carteira}
}

const joao = criarUsuario('joao')

AtualizarCarteira(joao, { moedas: 10, creditos:100 })

// como criar novas interfaces a partir de outras:
interface Admin extends Usuario {
    banir(usuario: Usuario): void,
    expulsar(usuario: Usuario): void 
}

function promoverUsuario(usuario: Usuario): Admin {
    return {
        ...usuario,
        banir(usuarioBanido) {
            console.log(`usuario ${usuarioBanido} banido por ${this.nome}`)
        },
        expulsar(usuarioExpulso) {
            console.log(`usuario ${usuarioExpulso} expulso por ${this.nome}`)
        }
    }
}

const admin = promoverUsuario(joao)

admin.expulsar(joao)
