// Um type alias (apelido de tipo) permite criar um nome personalizado para um tipo existente ou novo no TypeScript. É amplamente 
// utilizado para simplificar a tipagem de objetos, uniões (union types), funções e dados primitivos, tornando o código mais limpo, 
// reutilizável e fácil de manter.

// como criar um tipo customizado:
type Input = string | number | string[] // usando o simbolo: |, voce pode atribuir mais de um tipo para o type alias 

function exemplo(input: Input) {
    // função de exemplo
    console.log(input)
}

exemplo(['joao', 'jonas'])

// como combinar interfaces em um só tipo:
interface cachorro {
    nome: string,
    raça: string,
    latir(): string
}

interface gato {
    nome: string,
    cor: string,
    miar(): string
}

interface passarinho {
    nome: string,
    especie: string,
    cantar(): string
}

type Animal = cachorro | gato | passarinho

function criarAnimal(animal: Animal) {
    console.log(animal)
}

criarAnimal({ 
    nome: 'bob',
    raça: 'pincher',
    latir() {
        return 'au'
    },
})
