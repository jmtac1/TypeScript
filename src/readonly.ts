/* No TypeScript, o modificador readonly é utilizado para marcar propriedades de objetos, classes ou arrays como somente leitura. Isso impede que os valores sejam reatribuídos após a sua criação inicial, ajudando a garantir a imutabilidade do código em tempo de compilação. */

// definindo propriedades de uma interface como readonly:
interface Usuario {
    readonly id: number,
    nome: string,
    idade: number
}

const usuario: Usuario = {
    id: 123,
    nome: 'joao',
    idade: 21
}

// definindo membros de uma classe como readonly:
class comando {
    public readonly criadoEm: Date
    public nome: string

    constructor(nome: string) {
        this.nome = nome
        this.criadoEm = new Date()
    }

    public rodar() {
        this.nome = 'joao'
    }
}

// utilizando o tipo utilitário readonly:
interface Jogador {
    nick: string,
    vida: number,
    escudo: number,
    inventario: string[]
}

type JogadorEstatico = Readonly<Jogador>

// congelando um objeto e definindo a tipagem correta:
const jogador: Jogador = {
    nick: 'joao',
    vida: 100,
    escudo: 100,
    inventario : ['espada', 'poção', 'livro']
}

function congelar<T extends object>(obj: T): Readonly<T> {
    return Object.freeze(obj)
}

const jogadorEstatico = congelar(jogador)