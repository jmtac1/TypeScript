// Em TypeScript, Union Types (Tipos de União) permitem que uma variável, parâmetro ou retorno de função aceite mais de um 
// tipo de dado diferente. Para criá-los, utiliza-se o operador pipe (|), que funciona como um operador lógico "OU" (OR) entre 
// os tipos.

// unindo tipos primitivos:
type Primitivos = string | number | boolean

// Quando um valor possui um Union Type, o TypeScript só permite que você acesse nativamente as propriedades e métodos que são 
// comuns a todos os tipos daquela união. Se você tentar usar algo específico de um dos tipos, o compilador emitirá um erro de 
// segurança.

// type narrowing:
// Para utilizar métodos específicos de um tipo com segurança, você precisa fazer o TypeScript "afunilar" (entender) qual é o 
// tipo exato do dado naquele bloco de código. A forma mais comum de fazer isso é usando a instrução typeof:
function typeNarrowing(valor: Primitivos) {
    if (typeof valor === 'string') {
        console.log(valor.valueOf())
    }

    if (typeof valor === 'number') {
        console.log(valor.valueOf())
    }

    if (typeof valor === 'boolean') {
        console.log(valor.valueOf())
    }
}

// unindo interfaces e limitando propriedades com enums:
enum CoresSemaforo {
    Vermelho,
    Amarelo,
    Verde
}

interface Vermelho {
    tipo: CoresSemaforo.Vermelho
    parar(): void
}

interface Amarelo {
    tipo: CoresSemaforo.Amarelo
    freiar(): void
}

interface Verde {
    tipo: CoresSemaforo.Verde
    avancar(): void
}

type Semaforo = Vermelho | Amarelo | Verde

const semaforo: Semaforo = {
    tipo: CoresSemaforo.Amarelo,
    freiar() {
        
    },
}

// unindo tipos literais:
type Acao = 'criar' | 'atualizar' | 'deletar'

function acao(acao: Acao) {
    if (acao === 'criar') {
        console.log('criou')
    }

    if (acao === 'atualizar') {
        console.log('atualizou')
    }

    if (acao === 'deletar') {
        console.log('deletou')
    }
}

acao("criar")

type TamanhoImagem = 256 | 512 | 1024 | 2048

interface Imagem {
    nome: String,
    tamanho: TamanhoImagem
}

const imagem: Imagem = {
    nome: 'joao',
    tamanho: 256 
}