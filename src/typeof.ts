/* O operador typeof no TypeScript possui duas funções principais, dependendo de onde é utilizado: como operador do JavaScript (em tempo de execução) e como operador de tipo (em tempo de compilação). */

function tipoPrimitivo(valor: string | number) {
    if (typeof valor === 'string') {
        console.log(valor.toLocaleUpperCase())
    } else {
        console.log(valor.toFixed(2))
    }
}

// Usando typeof como anotação de tipo:

let usuario = 'jmtac'

let nome: typeof usuario = 'joao'

// Exemplo com objeto:

const ficha = {
    nome: 'joao',
    idade: 21,
    ativo: true
}

type Ficha = typeof ficha

const novaFicha: Ficha = {
    nome: 'carlos',
    idade: 22,
    ativo: false
}