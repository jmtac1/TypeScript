// Os enums (enumeradores) no TypeScript permitem agrupar um conjunto de constantes nomeadas. Eles tornam o código mais legível e seguro, evitando o uso de "magic strings". Existem três tipos principais: numéricos, de texto (string) e constantes (const enums)

// como criar um enum (enum numérico):
enum Direcoes {
    Norte = 1, // por padrão os itens do enum começam com 0 e vai incrementando mas voce pode definir outros valores
    Sul,
    Leste,
    Oeste
}

const movimetar = {
    x: 200,
    y: 300,
    direcao: Direcoes.Norte
}

// enum com valores string (enum de string):
enum TamanhoRoupas {
    ExtraPequeno = 'pp',
    Pequeno = 'p',
    Medio = 'm',
    Grande = 'g',
    extraGrande = 'gg'
}

const roupa = {
    cor: 'verde',
    tamanho: TamanhoRoupas.Medio
}