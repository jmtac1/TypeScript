/* O overload (sobrecarga) em TypeScript permite definir múltiplas assinaturas para uma mesma função ou método. Isso significa que você pode chamar a mesma função de formas diferentes, e o TypeScript validará os tipos corretos de argumentos e de retorno para cada cenário específico. */

// como criar um overload:
function mensagem(valor: string): string;
function mensagem(valor: number): number;
function mensagem(valor: string | number): string | number {
    if (typeof valor === 'string') {
        return `o valor é string: "${valor}"`
    } else {
        return valor * 2
    }
}

const string = mensagem('joao')
const number = mensagem(21)

console.log(string)
console.log(number)