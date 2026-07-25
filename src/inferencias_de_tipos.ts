// annotations, as e satisfies:
/* A (annotation) tradicional e o operador (as) modificam ou forçam o tipo final da variável, enquanto o operador (satisfies) valida o valor em relação a um tipo de base sem descartar a informação literal e mais específica do valor atribuído. */

type Footer = string | {
    texto: string,
    iconURL?: string
}

/* a annotation alarga o tipo do valor para o tipo genérico anotado, virando o tipo geral e permitindo o autocompletar e métodos específicos que for comum ao tipo anotado */
const footA: Footer = 'administração'

/* o operador as força o typescript a aceitar um tipo, silenciando o compilador, substituindo o tipo inferido, podendo causar erros em tempo de execução */
const footB = 'administração' as Footer

// o operador satisfies valida se o objeto cumpre o contrato, mas mantém a inferência exata, preservando o tipo mais estreito e mantém autocompletes e métodos específicos intactos.
const footC = 'administração' satisfies Footer

