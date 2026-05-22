// type annotations em typescript são uma forma de definir explicitamente o tipo de uma variável, parametro de função ou propriedade 
// de um objeto

// tipo string:
const nome: string = "joao"

// tipo number:
const idade: number = 21

// tipo boolean:
const temCarro: boolean = false

// tipo any: aceita qualquer tipo
const mostrarInfo: any = () => {
    console.log(nome)
    console.log(idade)
    console.log(temCarro)
}

// tipo null:
const tipoNull: null = null

// tipo undefined:
const tipoUndefined: undefined = undefined

// tipo de parametros e tipo de retorno de uma função:
function soma(a: number, b: number): number {
    return a + b
}

// parametro opcional:
function saudacao(nome: string, idade?: number) { // a interrogação indica que o parametro é opcional
    console.log(`ola meu nome é ${nome} e tenho ${idade} anos`)
}

// o typescript também consegue inferir o tipo desses elementos sendo assim não obrigatório as anotações de tipo
