/* keyof no TypeScript pega um tipo de objeto e retorna um tipo de união (union type) formado pelas chaves (nomes das propriedades) desse objeto. */

// extraindo as chaves de uma interface
interface Pessoa {
    nome: string,
    idade: number,
    email: string
}

type ChavesPessoa = keyof Pessoa

// a variável chave só aceita os valores ('nome' | 'idade' | 'email')
const chave: ChavesPessoa = 'nome'

// restringindo tipos genéricos com as chaves do mesmo
function pegarPropriedade<T, K extends keyof T>(objeto: T, chave: K) {
    console.log(objeto)
    console.log(chave)
}

const pessoa = {
    nome: 'joao',
    idade: 21
}

const carro = {
    marca: 'ford',
    ano: 2016
}

const gato = {
    cor: 'branco',
    vidas: 7
}

pegarPropriedade(carro, 'marca')
pegarPropriedade(pessoa, 'idade')
pegarPropriedade(gato, 'cor')

// usando typeof e keyof juntos
const cores = {
    vermelho: '#ff0000',
    amarelo: '#ffff00',
    verde: '#00ff00'
}

type tipoCores = keyof typeof cores