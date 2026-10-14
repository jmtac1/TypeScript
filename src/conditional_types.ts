/* A tipagem condicional (Conditional Types) no TypeScript funciona como um operador ternário para tipos. Ela permite que um tipo mude de acordo com uma verificação lógica: */

// usando operador ternário
type EString<T> = T extends string ? 'É string' : 'Não é string'

type Teste1 = EString<string>
type Teste2 = EString<number>

// definindo um tipo de acordo com uma condição:
class SelectMenu {}
class CheckBox {}
class Input {}
class Button {}

type TipoElemento = 'input' | 'button' | 'selectmenu' | 'checkbox'

type PegarElemento<T> = 
    T extends 'input' ? Input :
    T extends 'button' ? Button :
    T extends 'selectmenu' ? SelectMenu :
    T extends 'checkbox' ? CheckBox :
    never

interface Dados<T extends TipoElemento> {
    execute(elemento: PegarElemento<T>): void 
}

const dado: Dados<'checkbox'> = {
    execute(elemento) {
        elemento
    },
}