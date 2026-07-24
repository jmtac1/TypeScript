/* Generics (tipos genéricos) em TypeScript são ferramentas que permitem criar componentes, funções e estruturas reutilizáveis que funcionam com vários tipos de dados, mantendo a segurança de tipos (type safety). Eles usam variáveis de tipo representadas por sinais de menor e maior, como <T>. */

// como usar em funções:
function primeiroElemento<T>(array: T[]) {
    return array[0]
}

const nomes = ['joao', 'maria', 'jose']
const numeros = [1, 4, 6]
const booleanos = [true, false, true]

console.log(primeiroElemento(nomes))
console.log(primeiroElemento(numeros))
console.log(primeiroElemento(booleanos))

// como usar em interfaces:
interface Caixa<T> {
    conteudo: T
}

let caixaDeTexto: Caixa<string> = { conteudo: 'giz' }

// como usar em classes:
class ArrayCustomizado<T> {
    private itens: T[] = []

    public adicionar(item: T) {
        this.itens.unshift(item)
    }
    public remover(): T | undefined {
        return this.itens.shift()
    }
    public estaVazio(): boolean {
        return this.itens.length === 0
    }
}

const meuArrayString = new ArrayCustomizado<string>()
meuArrayString.adicionar('joao')

const meuArrayNumber = new ArrayCustomizado<number>()
meuArrayNumber.adicionar(19)

// como restringir tipos genéricos:
// usando extends voce pode estender o tipo genérico com outro tipo:
function mostrarLength<T extends { length: number }>(item: T) {
    console.log(item.length)
}

mostrarLength(nomes)

// usando interfaces para restringir o tipo genérico:
interface Nome {
    nome: string
}

function Ola<T extends Nome>(objeto: T) {
    console.log(`Olá ${objeto.nome}`)
}

const usuario = {
    nome: 'joao'
}

Ola(usuario)

// restrigindo genéricos com tipos primitivos:
function concatenar<T extends string | number>(a: T, b: T): string {
    return `${a}${b}`
}

concatenar('joao', 'carlos')
concatenar(10, 15)


