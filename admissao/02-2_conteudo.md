# Alinhamento - justify-content, align-content, align-items e align-self

Um dos principais atrativos do Flexbox é a facilidade de alinhar e distribuir elementos dentro de um contâiner.

Para isso, dispomos de algumas propriedades. Antes de entendê-las, ajuda bastante compreender a lógica de seus nomes:

### Justify vs Align
Dentro do contexto de Flexbox,
* *Justify* se refere ao **eixo principal** (main axis);
* *Align* se refere ao **eixo cruzado** (cross axis).

### Content vs Items
No Flexbox, 
* *Items* se refere ao alinhamento de cada item *dentro da linha ou coluna em que está*;
* *Content* se refere ao alinhamento *entre as linhas ou colunas*.

## Alinhando os elementos

Combinando a lógica dos dois pontos acima, nós temos as propriedades:
* `justify-content`, que distribui o conteúdo ao longo do eixo principal;
* `align-content`, que distribui as múltiplas linhas (ou colunas), *caso exista mais de uma*, ao longo do eixo cruzado;
* `align-items`, que determina o alinhamento de todos os itens, cada um *relativo à linha ou coluna em que está*.

> ### E o justify-items?
> O flex-box não possui a propriedade justify-items, porque não possui unidades no eixo cruzado. Por ser um layout uni-dimensional, essa propriedade não faria sentido.
> 
> Você pode imaginar como se cada elemento fosse "sua própria coluna", no layout de linhas, ou "sua própria linha", no layout de colunas.

### Valores comuns às três propriedades
Os valores a seguir podem ser usados por qualquer uma das três propriedades de alinhamento do Flexbox:

* `flex-start` alinha no começo do eixo;
* `center` alinha ao centro do eixo;
* `flex-end` alinha ao final do eixo;
* `stretch` estica o item ou linha/coluna para ocupar o máximo de espaço possível;
* `normal` usa o valor padrão para a propriedade em questão;
  * `justify-content: flex-start`;
  * `align-content: stretch`;
  * `align-items: stretch`.

### Valores de distribuição (content)
Os valores a seguir podem ser aplicados às propriedades `justify-content` e `align-content`, e lidam com a distribuição do espaço restante, o "espaço vazio":

* `space-evenly` distribui o espaço restante entre os itens e nas laterais;
* `space-around` distribui o espaço restante de modo que haja menos espaço nas laterais do que entre os itens;
* `space-between` distribui o espaço restante de modo que haja o máximo de espaço possível entre os itens. O primeiro elemento é colocado na lateral `flex-start`, e último na lateral `flex-end`;

## Align Self

A propriedade `align-self` funciona exatamente como a `align-items`, exceto que se aplica a um *flex item* ao invés de se aplicar ao contâiner. Ou seja, ela permite que um item se alinhe individualmente dentro da linha ou coluna onde está.

Você pode imaginar que o `align-items` basicamente muda a propriedade `align-self` para todos os filhos do contâiner aonde foi aplicada.

>### E justify-self?
>Da mesma maneira como justify-items não faz sentido, justify-self também não faz.
>
>Flexbox é uni-dimensional e o eixo principal é tratado como o eixo de distribuição dos elementos. Não faz sentido um item poder se alinhar ao longo do único eixo principal existente, pois isso quebraria o layout.
>
>Se você pesquisar na internet, encontrará uma propriedade CSS `justify-self`, mas essa propriedade trata de outro ponto totalmente diferente e não é aplicável em layouts Flexbox.

## Hora da prática!

Copie os arquivos abaixo como *index.html*, *style.css* e *main.js*, e mexa nas propriedades marcadas. Experimente com todas :)

Observe que a propriedade `align-self` está se aplicando aos elementos com a classe "`diferentao`" e veja como ela sobrescreve a propriedade `align-items` do contâiner.

>**NOTA**: Os arquivos estão com nomes diferentes aqui nesta pasta do processo seletivo, mas são os seguintes:
> * [HTML](02-2_pratica.html)
> * [CSS](02-2_pratica.css)
> * [JavaScript](02-2_pratica.js)
