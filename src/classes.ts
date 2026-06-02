// Classes em TypeScript são moldes para a criação de objetos, combinando dados (propriedades) e comportamentos (métodos). 
// Elas estendem o JavaScript moderno adicionando tipagem estática e modificadores de acesso para maior segurança e 
// previsibilidade no código.

// criando uma classe:
class Jogador {
    private static jogadores: Jogador[] = []
    private nome: string
    private vida: number

    constructor(nome: string, vida: number) {
        this.nome = nome
        this.vida = vida
        Jogador.jogadores.push(this)
    }

    public static getJogadores(): Jogador[] {
        return this.jogadores
    }
    public getNome(): string {
        return this.nome
    }
    public getVida(): number {
        return this.vida
    }

    public dano(quantidade: number, inimigo?: Jogador): void {
        const vidaAtualizada = this.vida - quantidade

        console.log(inimigo 
            ? `${inimigo.nome} causou ${quantidade} de dano em ${this.nome}` 
            : `${this.nome} tomou ${quantidade} de dano`
        )

        if (vidaAtualizada <= 0) {
            this.vida = 0
            this.morrer()
            return
        }
        this.vida = vidaAtualizada
    }
    private morrer(inimigo?: Jogador): void {
        if (inimigo) {
            console.log(`${inimigo.nome} matou ${this.nome}`)
        }
        console.log(`${this.nome} morreu`)
    }
}

const jogador1 = new Jogador('joao', 100)
const jogador2 = new Jogador('marcio', 100)

jogador1.dano(33, jogador2)

console.log(Jogador.getJogadores())

// herança:
class Animal {
    protected nome: string
    protected idade: number

    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }

    public fazerSom(): void {
        console.log(`${this.nome} fez um som`)
    }
}

class Cachorro extends Animal {
    private cor: string
    constructor(nome: string, idade: number, cor: string) {
        super(nome, idade)
        this.cor = cor
    }
    public fazerSom(): void {
        console.log(`${this.nome} esta latindo`)
    }
}

const cachorro = new Cachorro('dog day', 3, 'marrom')

cachorro.fazerSom()

// implementar interfaces em classes: