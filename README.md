# Encriptador de Texto

Este é um projeto simples de encriptador de texto que permite criptografar e descriptografar mensagens usando uma substituição de letras específica. O projeto é construído com HTML, CSS e JavaScript.

## Funcionalidades

- **Criptografia**: Converte letras específicas para suas correspondentes encriptadas.
- **Descriptografia**: Converte o texto encriptado de volta ao texto original.
- **Cópia para Área de Transferência**: Permite copiar o texto encriptado ou descriptografado para a área de transferência com um clique.

## Chaves de Criptografia

As chaves de criptografia utilizadas são:
- A letra "e" é convertida para "enter"
- A letra "i" é convertida para "imes"
- A letra "a" é convertida para "ai"
- A letra "o" é convertida para "ober"
- A letra "u" é convertida para "ufat"

Por exemplo:
- "gato" => "gaitober"
- "gaitober" => "gato"

## Requisitos

- Funciona apenas com letras minúsculas.
- Não devem ser utilizados letras com acentos nem caracteres especiais.
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

## Como Usar

1. **Texto de Entrada**: Digite o texto que deseja criptografar ou descriptografar no campo de texto superior.
2. **Botões**:
   - Clique em **Criptografar** para criptografar o texto digitado.
   - Clique em **Descriptografar** para descriptografar o texto digitado.
   - Clique em **Copiar** para copiar o texto resultante para a área de transferência.
3. **Texto de Saída**: O texto criptografado ou descriptografado será exibido no campo de texto inferior. Se nenhum texto estiver presente, será exibida a mensagem "Nenhuma mensagem encontrada".

## Estrutura do Projeto

O projeto é composto por três arquivos principais:

1. **index.html**: Contém a estrutura HTML da página.
2. **styles.css**: Contém o estilo CSS para a página.
3. **script.js**: Contém a lógica JavaScript para criptografar, descriptografar e copiar o texto.


