/* Em TypeScript, o Record é um tipo utilitário (Record<K, T>) usado para criar objetos mapeados onde todas as chaves (K) possuem o mesmo tipo de valor (T). Ele serve para estruturar dicionários ou pares de chave-valor com segurança de tipo. */

// exemplo chave e valor string:
type Ficha = Record<string, string>

const ficha: Ficha = {
    nome: 'joao',
    sexo: 'masculino'
}

// exemplo chave number e valor string:
type Lista = Record<number, string>

const lista: Lista = {
    1: 'jaca',
    '2': 'morango'
}

// usando interface como valor:
interface Usuario {
    nome: string,
    idade: number
}

type Usuarios = Record<number, Usuario>

const usuarios: Usuarios = {
    1: { nome: 'joao', idade: 21 },
    2: { nome: 'carlos', idade: 22 }
}

// usando union type como valor:
type Dicionario = Record<string, number | string | boolean>

const dicionario: Dicionario = {
    nome: 'joao',
    idade: 21,
    eProgramador: true
}

// usando união de literais como chave:
type Papeis = 'admin' | 'usuario' | 'convidado'

type Permissao = Record<Papeis, boolean>

const permissoes: Permissao = {
    admin: true,
    convidado: false,
    usuario: true
}