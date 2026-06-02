// Classes em TypeScript são moldes para a criação de objetos, combinando dados (propriedades) e comportamentos (métodos). 
// Elas estendem o JavaScript moderno adicionando tipagem estática e modificadores de acesso para maior segurança e 
// previsibilidade no código.

// criando uma classe:
class Jogador {
    private nome: string
    private vida: number

    constructor(nome: string, vida: number) {
        this.nome = nome
        this.vida = vida
    }

    public getNome() {
        return this.nome
    }
    public getVida() {
        return this.vida
    }

    public dano(quantidade: number, inimigo?: Jogador) {
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
    private morrer() {
        console.log(`${this.nome} morreu`)
    }
}

const jogador1 = new Jogador('joao', 100)
const jogador2 = new Jogador('marcio', 100)

jogador1.dano(33, jogador2)
