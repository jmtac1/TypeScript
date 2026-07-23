/* Narrowing (ou estreitamento de tipos) no TypeScript é o processo de refinar um tipo genérico ou amplo para um tipo mais específico durante a execução do código. */

// refinando union types:
function funilamento(valor: string | number | boolean) {
    if (typeof valor === 'string') {
        console.log(`valor ${valor} é string`)
        return
    }
    if (typeof valor === 'number') {
        console.log(valor * 2)
        return
    }
    console.log(valor)
}

// refinando tipos de classe:
class Cachorro {
    latir() { console.log('au au') }
}
class Gato {
    miar() { console.log('miau') }
}

function fazerSom(animal: Cachorro | Gato) {
    if (animal instanceof Cachorro) {
        animal.latir()
        return
    }
    animal.miar()
}

// refinando tipos de interfaces:
interface Peixe {
    nadar: () => void
}
interface Passaro {
    voar: () => void
}

function mover(animal: Peixe | Passaro) {
    if ('nadar' in animal) {
        animal.nadar()
    } else {
        animal.voar()
    }
}

// garantindo existencia de valores:
interface Usuario {
    id: string,
    nome: string,
    apelido?: string
}

function verificarExistencia(usuario: Usuario) {
    if (!usuario) return

    usuario.id.toUpperCase()
    usuario.nome.toUpperCase()

    if (!usuario.apelido) return

    usuario.apelido.toUpperCase()
}

// verificando de forma combinada
interface Animal {
    nome: string,
    idade: number,
}
interface Humano {
    nome: string,
    idade: number,
    profissao: string
}
interface Carro {
    cor: string,
    ano: number
}

function verificar(valor: Animal | Humano | Carro) {
    if ('nome' in valor && 'profissao' in valor) {
        valor.profissao
        return
    }
    if ('cor' in valor) {
        valor.cor
        return
    }
    valor.nome
}