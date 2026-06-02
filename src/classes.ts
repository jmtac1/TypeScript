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

    public static getJogadores() {
        return this.jogadores
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
    private morrer(inimigo?: Jogador) {
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
