// Em TypeScript, um Type Intersection (interseção de tipos) permite combinar múltiplos tipos em um único tipo que possui 
// todas as propriedades de todos os tipos envolvidos.

// criando um tipo combinando interfaces:
interface Robo {
    material: string,
    combustivel: string
}

interface Humano {
    nome: string,
    idade: number
}

type Ciborgue = Robo & Humano // Para criar uma interseção, utiliza-se o operador e comercial (&).

const joao: Ciborgue = {combustivel: 'gasolina', idade: 21, material: 'metal', nome: 'joao'}

// criando opções customizadas de uma função existente:
interface MyFetcheOptions {
    printInput: boolean,
    printHora: boolean
}

type requestOptions = MyFetcheOptions & RequestInit

export function myFetch(input: string, options?: requestOptions) {
    if (options?.printInput) {
        console.log('input', input)
    }
    if (options?.printHora) {
        console.log('hora', new Date().toDateString())
    }

    return fetch(input, options)
}

myFetch("exemplo de url", {
    printHora: true,
    printInput: true
})

