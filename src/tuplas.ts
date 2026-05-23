// Uma tupla em TypeScript é um tipo especial de array em que você define exatamente a quantidade de elementos e o tipo de dado de 
// cada posição específica.

// como criar um tipo tupla:
type Data = [dia: number, mes: number, ano: number] // voce pode definir nomes para os itens da tupla

const data: Data = [12, 4, 2055]

// como desestruturar itens de uma tupla:
function criarData(data: Data) {
    const [ dia, mes, ano ] = data
    console.log(data)
}

criarData(data)