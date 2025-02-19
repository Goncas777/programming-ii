# Math Utility CLI

Este projeto oferece uma ferramenta de linha de comando (CLI) para realizar operações matemáticas (soma, média e mediana) com um array de números predefinidos. É possível rodar essas funções diretamente no terminal.

## Funcionalidades

O programa permite calcular as seguintes operações matemáticas com um array de números predefinido:

- **Soma** (`sum`): Soma todos os números do array.
- **Média** (`average`): Calcula a média dos números do array.
- **Mediana** (`median`): Calcula a mediana dos números do array.

## Requisitos

- **Node.js**: Este projeto foi desenvolvido utilizando o Node.js. Se você ainda não tem o Node.js instalado, você pode baixá-lo no site oficial: [https://nodejs.org/](https://nodejs.org/).

## Como Usar

### 1. Clone o repositório

Clone o repositório do projeto para a sua máquina local usando o seguinte comando:

```bash
git clone https://github.com/seu-usuario/math-utility-cli.git
cd math-utility-cli
```

### 2. Instale as dependências (se necessário)

Caso o projeto tenha dependências externas (neste caso, não há), instale-as usando o seguinte comando:

```bash
npm install
```

### 3. Execute o programa

Para rodar o programa, use o comando `node index.js` seguido da operação desejada.

- **Soma**: Para calcular a soma dos números no array, use o comando:

  ```bash
  node index.js sum
  ```

- **Média**: Para calcular a média dos números no array, use o comando:

  ```bash
  node index.js average
  ```

- **Mediana**: Para calcular a mediana dos números no array, use o comando:

  ```bash
  node index.js median
  ```

### Exemplos de Saída:

- Para o comando `node index.js sum`, a saída será:

  ```bash
  Sum: 164
  ```

- Para o comando `node index.js average`, a saída será:

  ```bash
  Average: 18.5
  ```

- Para o comando `node index.js median`, a saída será:

  ```bash
  Median: 5.5
  ```

## Estrutura do Código

O código está dividido em dois arquivos principais:

1. **`index.js`**: Este arquivo é responsável por executar o programa no terminal. Ele importa as funções de cálculo do arquivo `mathutility.js` e executa a operação de acordo com o comando passado no terminal.

2. **`mathutility.js`**: Este arquivo contém as funções que realizam as operações matemáticas (soma, média e mediana).

### Exemplo de código no arquivo `index.js`:

```js
#!/usr/bin/env node

import { sum, average, median } from './mathutility.js';

const numbers = [1, 4, 56, 2, 5, 1, 74, 21];

// Obter o comando do terminal
const command = process.argv[2];

// Executar a função apropriada com base no comando
switch (command) {
  case 'sum':
    console.log(`Sum: ${sum(numbers)}`);
    break;
  case 'average':
    console.log(`Average: ${average(numbers)}`);
    break;
  case 'median':
    console.log(`Median: ${median(numbers)}`);
    break;
  default:
    console.log('Comando inválido. Use "sum", "average" ou "median".');
}
```

### Exemplo de código no arquivo `mathutility.js`:

```js
/**
 * Soma todos os números de um array.
 * @param {number[]} nums - O array de números a somar.
 * @returns {number} O resultado da soma.
 */
export function sum(nums) {
    if (nums.length === 0) {
        return console.log("Your array is empty");
    }
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}

/**
 * Calcula a média dos números de um array.
 * @param {number[]} nums - O array de números para calcular a média.
 * @returns {number} A média dos números.
 */
export function average(nums) {
    if (nums.length === 0) {
        return console.log("Your array is empty");
    }
    let total = 0;
    let media = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    media = total / nums.length;
    return media;
}

/**
 * Calcula a mediana dos números de um array.
 * @param {number[]} nums - O array de números para calcular a mediana.
 * @returns {number} A mediana dos números.
 */
export function median(nums) {
    if (nums.length === 0) {
        return console.log("Your array is empty");
    }

    const sorted = nums.sort((a, b) => a - b);
    if (nums.length % 2 === 0) {
        let mid1 = nums.length / 2 - 1;
        let mid2 = nums.length / 2;
        return (nums[mid1] + nums[mid2]) / 2;
    } else {
        let mid = Math.floor(nums.length / 2);
        return nums[mid];
    }
}
```

## Como Funciona?

- O arquivo `index.js` executa o programa no terminal e chama as funções matemáticas definidas no arquivo `mathutility.js`.
- Você executa o comando desejado (como `sum`, `average`, ou `median`), e o programa calcula o resultado usando o array de números predefinido.
- O programa então retorna o resultado da operação escolhida no terminal.

### Exemplo de execução:

1. Execute o comando `node index.js sum` no terminal:

   ```bash
   node index.js sum
   ```

   Saída:

   ```bash
   Sum: 164
   ```

2. Execute o comando `node index.js average` no terminal:

   ```bash
   node index.js average
   ```

   Saída:

   ```bash
   Average: 18.5
   ```

3. Execute o comando `node index.js median` no terminal:

   ```bash
   node index.js median
   ```

   Saída:

   ```bash
   Median: 5.5
   ```

## Contribuindo

Se você quiser contribuir para este projeto, siga os seguintes passos:

1. Faça um fork deste repositório.
2. Crie uma nova branch para suas alterações (`git checkout -b feature/nova-funcionalidade`).
3. Faça suas alterações e commite (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie suas alterações para o repositório remoto (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
