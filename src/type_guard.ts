/* Type Guards são blocos de código em TypeScript que realizam uma verificação em tempo de execução para garantir e estreitar (narrowing) o tipo de uma variável dentro de um escopo condicional. */

// como usar type guard:

// typeof:
// Usado principalmente para validar tipos primitivos do JavaScript
function mensagem(valor: string | number) {
    if (typeof valor === 'string') {
        console.log(valor.toUpperCase)
    } else {
        console.log(valor * 2)
    }
}

// instanceof:
// Ideal para verificar se um objeto foi criado a partir de uma classe específica.
class Cachorro {
    latir() { console.log('au au') }
}
class Gato {
    miar() { console.log('miau') }
}

function fazerSom(animal: Cachorro | Gato) {
    if (animal instanceof Cachorro) {
        animal.latir()
    } else {
        animal.miar()
    }
}

// in:
// Verifica se uma propriedade específica existe dentro de um objeto, sendo muito útil para diferenciar interfaces.
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