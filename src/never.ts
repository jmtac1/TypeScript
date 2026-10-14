/* O tipo never em TypeScript representa valores que nunca acontecem ou um conjunto vazio de possibilidades. Ele é conhecido na teoria de linguagens como um bottom type (tipo inferior) */

// função que nunca pode retornar algo
function jogarErro(mensagem: string): never {
    throw new Error(mensagem)
}

function main() {
    try {
        jogarErro('Ocorreu um erro')
    } catch(e) {
        console.log('algo saiu errado')
    }
    
    const nome = 'joao'
    console.log(nome)
}

main()