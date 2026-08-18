# Automação dos Exercícios 5, 6 e 7 — GIMP 3

Este plug-in adiciona três comandos ao menu do GIMP:

```text
Filters
└── E-commerce
    ├── Exercício 5 — Corrigir dominante amarela
    ├── Exercício 6 — Criar fundo branco
    └── Exercício 7 — Remover fundo verde
```

## Compatibilidade

- Requer **GIMP 3**.
- Não funciona no GIMP 2.10, cuja API de plug-ins Python é diferente.
- Foi criado especificamente para as imagens `atividade-05-cor.png`,
  `atividade-06-fundo-branco.png` e `atividade-07-recorte-v2.png` deste curso.
- O plug-in não salva nem sobrescreve arquivos automaticamente. Depois de revisar
  o resultado, você decide onde salvar o XCF e exportar o PNG.

## Instalação automática no Windows

1. Feche o GIMP.
2. Abra o PowerShell nesta pasta.
3. Execute:

   ```powershell
   powershell -ExecutionPolicy Bypass -File .\instalar-no-windows.ps1
   ```

4. Abra novamente o GIMP 3.
5. Abra uma das três imagens da atividade.
6. Procure o comando correspondente em `Filters > E-commerce`.

O instalador copia o plug-in para:

```text
%APPDATA%\GIMP\3.0\plug-ins\gimp-ecommerce-automacao\
```

## Instalação manual

1. Feche o GIMP.
2. Crie a pasta abaixo, caso ela ainda não exista:

   ```text
   %APPDATA%\GIMP\3.0\plug-ins\gimp-ecommerce-automacao\
   ```

3. Copie `gimp-ecommerce-automacao.py` para essa pasta.
4. Confira a estrutura. O nome da pasta e o nome-base do arquivo precisam ser
   iguais:

   ```text
   plug-ins\
   └── gimp-ecommerce-automacao\
       └── gimp-ecommerce-automacao.py
   ```

5. Abra novamente o GIMP.

## Como executar

O procedimento inicial é o mesmo nos três exercícios:

1. Use `File > Open` para abrir a imagem da atividade.
2. No painel `Layers`, clique uma vez na camada da fotografia.
3. Não selecione máscara, canal ou várias camadas ao mesmo tempo.
4. Acesse `Filters > E-commerce` e escolha o exercício correto.
5. Execute cada automação apenas uma vez sobre uma imagem recém-aberta.

### Exercício 5 — corrigir dominante

Use somente com `atividade-05-cor.png`.

O plug-in:

1. renomeia e oculta a camada original;
2. cria `Cor corrigida — automação`;
3. neutraliza a iluminação quente de aproximadamente 3000 K para 6500 K.

Depois de executar:

1. ative e desative o olho da camada corrigida para comparar;
2. se o resultado parecer frio, reduza a `Opacity` da camada para 80%–90%;
3. salve como `atividade-05-final.xcf`;
4. exporte como `atividade-05-final.png`.

### Exercício 6 — criar fundo branco

Use somente com `atividade-06-fundo-branco.png`.

O plug-in cria esta pilha:

```text
Produto recortado — revisar máscara
Sombra suave — opcional
Fundo branco #FFFFFF
Original — não editar (oculta)
```

O contorno é proporcional à imagem do curso e continua funcionando se ela tiver
sido redimensionada sem mudar de proporção. Mesmo assim, faça a revisão:

1. amplie para 300%;
2. clique na miniatura da máscara do produto;
3. pinte de preto para esconder fundo restante;
4. pinte de branco para recuperar sola ou tecido;
5. oculte `Sombra suave — opcional` se o marketplace proibir sombras;
6. salve o XCF e exporte o PNG.

### Exercício 7 — remover fundo verde

Use somente com `atividade-07-recorte-v2.png`.

O plug-in:

1. preserva e oculta o original;
2. cria uma camada com alpha;
3. seleciona o fundo real `#5ACEBA` com Threshold 15;
4. aplica Grow 1 px e Feather 1 px;
5. limpa o fundo para transparência.

Depois de executar:

1. confirme o quadriculado ao redor do frasco e sob a válvula;
2. revise o contorno a 300%;
3. use `File > Export As` e escolha obrigatoriamente `.png`;
4. reabra o PNG no GIMP para confirmar o alpha.

## Se o menu não aparecer

1. Confirme que está usando GIMP 3, não GIMP 2.10.
2. Confira se pasta e arquivo possuem o mesmo nome-base.
3. Acesse `Edit > Preferences > Folders > Plug-ins` e confirme que a pasta de
   plug-ins do usuário está listada.
4. Reinicie o GIMP depois de qualquer alteração.
5. Use `Help > Search and Run a Command` e pesquise por `Exercício 5`,
   `Exercício 6` ou `Exercício 7`.

## Desinstalação

Feche o GIMP e remova somente esta pasta:

```text
%APPDATA%\GIMP\3.0\plug-ins\gimp-ecommerce-automacao\
```

Depois abra novamente o programa.
