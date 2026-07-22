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

// is:
/* Quando as estruturas de dados são complexas ou baseadas apenas em interfaces, os operadores nativos não bastam. Você pode criar funções customizadas utilizando a sintaxe de predicado de tipo: parametro is Tipo. */

interface Professor {
    ensinar: () => void
    diploma: string
}
interface Chef {
    cozinhar: () => void
    certificado: string
}
interface Motorista {
    dirigir: () => void
    carteira: string
}

type Profissionais = Professor | Chef | Motorista

function isChef(valor: Profissionais): valor is Chef {
    return (valor as Chef).cozinhar !== undefined
}
function isProfessor(valor: Profissionais): valor is Professor {
    return (valor as Professor).ensinar !== undefined
}
function isMotorista(valor: Profissionais): valor is Motorista {
    return (valor as Motorista).dirigir !== undefined
}

function executar(profissional: Profissionais) {
    switch (true) {
        case isChef(profissional): {
            profissional.cozinhar()
            break
        }
        case isProfessor(profissional): {
            profissional.ensinar()
            break
        }
        case isMotorista(profissional): {
            profissional.dirigir()
            break
        }
    }
}