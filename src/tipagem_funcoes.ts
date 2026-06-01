// A tipagem de funções no TypeScript envolve a definição dos tipos dos parâmetros e do valor de retorno. Ela garante a 
// consistência e evita erros durante o desenvolvimento. A tipagem pode ser aplicada diretamente na assinatura da função ou de 
// forma separada utilizando type ou interface.

// tipando parâmetros e retornos de funções:
function soma(a: number, b: number): number {
    return a + b
}

// criando um tipo que descreve uma função:
type OperacaoMatematica = (a: number, b: number) => number

const somar: OperacaoMatematica = (a, b) => a + b
const subtrair: OperacaoMatematica = (a, b) => a - b

// parâmetros padrões e opcionais:
// padrão
function saudar(nome: string, mensagem?: string): string {
    if (mensagem) {
        return `${mensagem}, ${nome}`
    }
    return `ola, ${nome}`
}
// opcional
function calcularDesconto(preco: number, taxa: number = 0.05): number {
    return preco - preco * taxa
}

