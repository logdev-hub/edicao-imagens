/* ================================================================
   Projeto independente — 20 exemplos de GIMP para e-commerce
   Conteúdo, renderização, filtros, cópia, tema e progresso local.
   ================================================================ */

(function () {
  "use strict";

  const examples = [
    {
      id: 1, level: "basico", title: "Recortar uma foto para o formato quadrado",
      objective: "Transformar uma fotografia horizontal em uma imagem 1:1 para catálogo ou feed.",
      outcome: "Produto centralizado em 1080 × 1080 px, sem cortes importantes e com espaço equilibrado.",
      imageAlt: "Bolsa sendo reenquadrada de uma foto vertical para um quadro quadrado",
      keywords: "recorte enquadramento quadrado crop feed catálogo 1080",
      steps: [
        "Abra a foto em <code>File &gt; Open</code>.",
        "Ative <code>Crop Tool</code> e, nas opções da ferramenta, marque <strong>Fixed: Aspect ratio</strong> com o valor <code>1:1</code>.",
        "Arraste o quadro ao redor do produto. Deixe margens semelhantes e pressione <code>Enter</code>.",
        "Acesse <code>Image &gt; Scale Image</code>, informe 1080 × 1080 px e confirme em <strong>Scale</strong>.",
        "Exporte por <code>File &gt; Export As</code> com o nome <code>produto-quadrado.jpg</code>."
      ],
      tip: "Não corte alças, tampas ou pontas. A imagem deve explicar o produto antes mesmo da descrição."
    },
    {
      id: 2, level: "basico", title: "Preparar tamanhos para feed, Stories e loja",
      objective: "Criar versões da mesma foto sem deformar o produto.",
      outcome: "Três arquivos: quadrado, vertical e horizontal, cada um reenquadrado para o canal.",
      imageAlt: "Tênis azul apresentado em três enquadramentos diferentes",
      keywords: "redimensionar scale image stories feed banner formatos canais",
      steps: [
        "Abra a imagem e crie uma cópia com <code>Image &gt; Duplicate</code> para cada formato.",
        "Na versão de feed, use <code>Crop Tool</code> em 1:1 e depois <code>Image &gt; Scale Image</code> para 1080 × 1080 px.",
        "Na versão de Stories, recorte em 9:16 e redimensione para 1080 × 1920 px.",
        "Na versão da loja, escolha a proporção exigida pelo layout, como 4:3, e redimensione somente depois do recorte.",
        "Exporte com nomes claros: <code>tenis-feed.jpg</code>, <code>tenis-story.jpg</code> e <code>tenis-loja.jpg</code>."
      ],
      tip: "Não digite uma largura e uma altura incompatíveis com a foto sem recortar antes; isso estica o produto."
    },
    {
      id: 3, level: "basico", title: "Criar espaço para título e preço",
      objective: "Transformar a foto vertical em uma peça quadrada, prolongar manualmente o fundo para a esquerda e criar uma área limpa para título e preço.",
      outcome: "Arte quadrada de 1536 × 1536 px, com o frasco à direita, fundo bege contínuo à esquerda e título e preço legíveis, sem faixa transparente nem emenda evidente.",
      imageAlt: "Frasco de cosmético ao lado de uma área vazia reservada para texto",
      keywords: "texto oferta preço espaço negativo text tool composição anúncio canvas transparência fundo clone camada",
      attention: "<strong>Antes de começar:</strong> <code>Image &gt; Canvas Size</code> aumenta somente a área da tela; ele <strong>não copia, estica nem repete o fundo da fotografia</strong>. O quadriculado que aparece à esquerda significa transparência e é o comportamento correto. Nesta aula, primeiro cobrimos essa transparência com uma camada bege e depois reconstruímos a textura com a <code>Clone Tool</code>.",
      steps: [
        "<strong>Abra a imagem da atividade.</strong> No GIMP, acesse <code>File &gt; Open</code>, localize <code>atividade-03-oferta.png</code> e clique em <strong>Open</strong>. Se aparecer uma janela para converter o perfil de cores, mantenha as opções sugeridas pelo GIMP e confirme.",
        "<strong>Salve uma cópia de trabalho antes de editar.</strong> Acesse <code>File &gt; Save As</code>, escolha uma pasta e salve como <code>atividade-03-trabalho.xcf</code>. O formato XCF preserva as camadas; não trabalhe diretamente sobre o PNG original.",
        "<strong>Localize a camada original.</strong> No painel <strong>Layers</strong>, normalmente no lado direito, dê dois cliques no nome da camada e renomeie-a como <code>Foto original</code>. Pressione <strong>Enter</strong> para confirmar. Não duplique nem redimensione essa camada neste momento.",
        "<strong>Abra o tamanho da tela.</strong> Acesse <code>Image &gt; Canvas Size</code>. A imagem original mede 1024 × 1536 px. Na janela, clique no ícone de corrente ao lado de <strong>Width</strong> e <strong>Height</strong> para deixá-lo aberto; isso permite mudar a largura sem alterar a altura.",
        "<strong>Crie uma tela quadrada.</strong> Digite <code>1536</code> em <strong>Width</strong> e mantenha <code>1536</code> em <strong>Height</strong>. Não use <code>Scale Image</code>: escalar deformaria ou ampliaria a fotografia, enquanto o objetivo aqui é somente acrescentar espaço.",
        "<strong>Coloque a fotografia no lado direito.</strong> Na mesma janela, informe <code>512</code> em <strong>Offset X</strong> e <code>0</code> em <strong>Offset Y</strong>. Na prévia, a imagem deve ficar encostada à direita, com uma faixa nova à esquerda. Se preferir, arraste a miniatura até a borda direita e confira se o valor X ficou em 512.",
        "<strong>Finalize o aumento da tela.</strong> Em <strong>Resize layers</strong>, escolha <code>None</code> ou mantenha apenas a camada original no tamanho atual; em seguida, clique em <strong>Resize</strong>. Surgirá uma faixa quadriculada de 512 px à esquerda. <strong>Isso não é um erro:</strong> o GIMP criou espaço, mas ainda não existem pixels de fundo nele.",
        "<strong>Capture a cor do fundo da foto.</strong> Selecione a <code>Color Picker Tool</code> pelo ícone de conta-gotas. Clique em uma região bege limpa, perto do canto superior esquerdo da fotografia, longe do frasco, da sombra e da linha da mesa. A cor escolhida aparecerá no quadrado de <strong>Foreground color</strong> da caixa de ferramentas.",
        "<strong>Crie a camada que eliminará a transparência.</strong> Acesse <code>Layer &gt; New Layer</code>. Dê o nome <code>Fundo ampliado</code>, confira se o tamanho é 1536 × 1536 px e, em <strong>Fill with</strong>, escolha <code>Foreground</code>. Confirme em <strong>OK</strong>. Se a camada nascer transparente, selecione a <code>Bucket Fill Tool</code> e clique uma vez sobre ela para preenchê-la com o bege capturado.",
        "<strong>Corrija a ordem das camadas.</strong> No painel <strong>Layers</strong>, arraste <code>Fundo ampliado</code> para <strong>baixo</strong> de <code>Foto original</code>. O quadriculado deve desaparecer e dar lugar a uma área bege. Se toda a foto sumir, a camada bege está acima da foto: arraste-a novamente para baixo.",
        "<strong>Crie uma camada separada para copiar a textura.</strong> Acesse novamente <code>Layer &gt; New Layer</code>, nomeie-a <code>Textura de extensão</code>, mantenha 1536 × 1536 px e escolha <code>Transparency</code> em <strong>Fill with</strong>. No painel, deixe essa camada acima de <code>Foto original</code> e abaixo das futuras camadas de texto.",
        "<strong>Prepare a ferramenta de clonagem.</strong> Selecione a <code>Clone Tool</code>, cujo ícone parece um carimbo. Em <strong>Tool Options</strong>, escolha um pincel macio, como <code>2. Hardness 025</code>, ajuste o tamanho para aproximadamente 250 px, mantenha <strong>Opacity</strong> em 100%, ative <strong>Sample merged</strong> e selecione <code>Aligned</code> em <strong>Alignment</strong>. <strong>Sample merged</strong> é essencial porque você pintará na camada vazia usando pixels visíveis da foto original.",
        "<strong>Defina de onde a textura será copiada.</strong> Mantenha <code>Textura de extensão</code> selecionada. Segure <strong>Ctrl</strong> e clique em uma área limpa do fundo original, logo à direita da emenda vertical e longe do frasco. Solte Ctrl. Esse clique define a origem; sem ele, a Clone Tool não tem nada para copiar.",
        "<strong>Prolongue o fundo manualmente.</strong> Comece perto da emenda e pinte com cliques ou movimentos curtos em direção à esquerda. Não faça um único arrasto longo. A cada poucos traços, pressione <strong>Ctrl</strong> e escolha outra área limpa da foto para variar a amostra. Trabalhe primeiro na parede, na parte superior, e depois na mesa, na parte inferior; não misture a textura da parede com a textura da mesa.",
        "<strong>Disfarce a emenda.</strong> Reduza a <strong>Opacity</strong> da Clone Tool para cerca de 30% e passe o pincel suavemente sobre a linha vertical onde o fundo novo encontra a fotografia. Use vários cliques leves. Evite pintar sobre o frasco e preserve a linha horizontal que separa a parede da mesa.",
        "<strong>Crie o título em uma camada própria.</strong> Selecione a <code>Text Tool</code>, clique e arraste uma caixa de texto na metade esquerda, deixando aproximadamente 100 px de margem nas bordas. Digite um título curto, por exemplo <code>CUIDADO QUE TRANSFORMA</code>. No painel Layers, renomeie a nova camada para <code>Título</code>. Use uma cor escura retirada do frasco para obter contraste.",
        "<strong>Crie o preço separadamente.</strong> Com a <code>Text Tool</code>, faça outra caixa abaixo do título e digite, por exemplo, <code>R$ 39,90</code>. Renomeie essa camada para <code>Preço</code> e use um tamanho maior do que o título. Manter título e preço em camadas diferentes permite mover e formatar cada elemento sem afetar o outro.",
        "<strong>Ajuste posição e respiro.</strong> Use a <code>Move Tool</code> e, em <strong>Tool Options</strong>, marque a opção para mover a camada selecionada. Clique primeiro na camada <code>Título</code> ou <code>Preço</code> no painel e só depois mova o texto. Confirme que nenhum texto toca a borda, cruza a emenda ou invade o frasco.",
        "<strong>Faça a conferência final.</strong> Amplie a visualização para 100% e percorra a emenda de cima a baixo. Verifique se não há quadriculado, faixa lisa evidente, padrões clonados repetidos, manchas sobre o produto ou diferença brusca na linha da mesa. Corrija com pequenos novos cliques da Clone Tool.",
        "<strong>Salve e exporte.</strong> Pressione <strong>Ctrl + S</strong> para atualizar o XCF. Depois acesse <code>File &gt; Export As</code>, use o nome <code>atividade-03-final.png</code>, clique em <strong>Export</strong> e confirme novamente. O XCF é o arquivo editável; o PNG é a peça pronta para uso."
      ],
      layerOrder: ["Preço", "Título", "Textura de extensão", "Foto original", "Fundo ampliado"],
      troubleshooting: [
        "<strong>A faixa continua quadriculada:</strong> confira se <code>Fundo ampliado</code> está visível, abaixo da foto e com 1536 × 1536 px. Se estiver menor, use <code>Layer &gt; Layer to Image Size</code> e preencha novamente.",
        "<strong>A Clone Tool não pinta:</strong> selecione <code>Textura de extensão</code>, use <code>Select &gt; None</code>, confira Opacity 100%, ative <strong>Sample merged</strong> e repita <strong>Ctrl + clique</strong> para definir a origem.",
        "<strong>O frasco apareceu duplicado:</strong> a amostra foi capturada sobre o produto. Desfaça com <strong>Ctrl + Z</strong>, faça <strong>Ctrl + clique</strong> somente em uma área vazia do fundo e volte a pintar.",
        "<strong>A emenda ficou visível:</strong> capture amostras mais próximas da linha de encontro e misture com pincel macio em baixa opacidade, sem arrastar a mesma amostra por toda a faixa.",
        "<strong>A foto inteira ficou bege:</strong> <code>Fundo ampliado</code> está acima de <code>Foto original</code>. Arraste a camada bege para a última posição do painel."
      ],
      tip: "O fundo não se repete automaticamente: a camada sólida remove a transparência e a Clone Tool devolve a textura. Para a oferta continuar fácil de ler, use no máximo duas fontes e três tamanhos de letra."
    },
    {
      id: 4, level: "basico", title: "Ajustar brilho e contraste",
      objective: "Recuperar uma foto escura sem apagar detalhes claros do produto.",
      outcome: "Imagem mais luminosa, com pretos definidos e textura ainda visível.",
      imageAlt: "Frasco âmbar comparado antes e depois de um ajuste de luminosidade",
      keywords: "brilho contraste levels curves foto escura iluminação",
      steps: [
        "Duplique a camada em <code>Layer &gt; Duplicate Layers</code> para preservar o original.",
        "Abra <code>Colors &gt; Levels</code> e aproxime os controles de preto e branco das áreas onde começa o histograma.",
        "Use <code>Colors &gt; Curves</code> e faça uma curva em S muito suave para reforçar o contraste.",
        "Se necessário, finalize em <code>Colors &gt; Brightness-Contrast</code> com pequenos ajustes.",
        "Ative e desative a camada editada para comparar o antes e depois."
      ],
      tip: "Se a embalagem branca perder textura, o brilho foi longe demais. Volte um pouco no ajuste."
    },
    {
      id: 5, level: "basico", title: "Corrigir dominante de cor",
      objective: "Remover a forte dominante amarelo-alaranjada da fotografia usando a própria caneca como referência de cor neutra.",
      outcome: "Caneca branca ou cinza-clara, mármore com aparência neutra e sombras naturais, sem transformar a fotografia em uma imagem azulada nem apagar os detalhes do produto.",
      imageAlt: "Caneca clara fotografada sob uma iluminação com forte dominante amarela",
      keywords: "cor white balance levels conta-gotas ponto cinza temperatura dominante amarelo laranja caneca neutralizar",
      attention: "<strong>O que está errado nesta foto?</strong> A caneca, a parede e o mármore receberam uma camada visual amarelo-alaranjada causada pela iluminação. Nesta atividade, não usaremos <code>Hue-Saturation</code> nem ajustaremos os canais manualmente. A estratégia principal será o <strong>conta-gotas de ponto cinza</strong> em <code>Colors &gt; Levels</code>: ao clicar em uma parte neutra da caneca, informamos ao GIMP que aquele ponto não deveria ter cor amarela.",
      steps: [
        "<strong>Abra a imagem correta.</strong> No GIMP, acesse <code>File &gt; Open</code>, selecione <code>atividade-05-cor.png</code> e clique em <strong>Open</strong>. A imagem tem 1254 × 1254 px e mostra uma caneca clara sob uma iluminação intensamente amarela.",
        "<strong>Salve imediatamente uma cópia editável.</strong> Acesse <code>File &gt; Save As</code> e use o nome <code>atividade-05-trabalho.xcf</code>. O arquivo XCF guardará a fotografia original e a versão corrigida em camadas separadas.",
        "<strong>Entenda qual cor estamos procurando.</strong> Nesta aula, considere que a caneca deveria ser branca ou cinza-clara e que o mármore deveria ter tons neutros. Não tente deixar a parede obrigatoriamente branca: o objetivo é retirar o excesso amarelo, preservando a iluminação e as sombras.",
        "<strong>Renomeie a camada que veio do PNG.</strong> No painel <strong>Layers</strong>, dê dois cliques no nome da camada, escreva <code>Original — não editar</code> e pressione <strong>Enter</strong>. Essa camada será nossa cópia de segurança e referência de antes.",
        "<strong>Duplique a camada.</strong> Clique com o botão direito em <code>Original — não editar</code> e escolha <code>Duplicate Layer</code>. Outra opção é usar <code>Layer &gt; Duplicate Layers</code>. Renomeie a cópia superior como <code>Cor corrigida</code> e mantenha-a selecionada.",
        "<strong>Confirme a ordem antes de continuar.</strong> No painel Layers, <code>Cor corrigida</code> deve estar em cima e <code>Original — não editar</code> embaixo. Os dois ícones de olho devem estar ativados. Como a camada superior cobre a inferior, você ainda verá somente a foto amarela.",
        "<strong>Aproxime a área que servirá de referência.</strong> Use o controle de zoom na parte inferior da janela e escolha aproximadamente 100%. Observe a parte frontal da caneca, especialmente a região clara situada à esquerda do centro. Precisamos de uma área lisa de tom médio, não do ponto mais branco nem da sombra mais escura.",
        "<strong>Abra a ferramenta Levels.</strong> Com <code>Cor corrigida</code> selecionada, acesse <code>Colors &gt; Levels</code>. Mantenha <code>Value</code> no seletor <strong>Channel</strong>. Não mova os triângulos preto, cinza e branco do histograma nesta atividade.",
        "<strong>Localize os três conta-gotas.</strong> Na janela Levels, procure a área <strong>All Channels</strong>. Ela possui três conta-gotas: ponto preto, ponto cinza e ponto branco. Escolha o <strong>conta-gotas do meio</strong>, chamado ponto cinza. Não escolha o conta-gotas branco da direita, pois ele pode clarear e estourar a caneca.",
        "<strong>Clique em um ponto neutro da caneca.</strong> Com o conta-gotas cinza ativo, clique uma vez na frente da caneca, na área clara à esquerda do centro e aproximadamente na metade da altura. Evite o brilho branco da borda superior, o interior escuro, a alça, a sombra do lado direito e os reflexos brilhantes.",
        "<strong>Observe a mudança imediata.</strong> O amarelo forte deve diminuir e a caneca deve se aproximar de branco ou cinza-claro. O mármore também deve perder boa parte do tom dourado. O GIMP corrigiu os canais vermelho, verde e azul para que o ponto escolhido se tornasse neutro.",
        "<strong>Se o primeiro clique ficar ruim, não confirme.</strong> Ainda com a janela Levels aberta, clique em <strong>Reset</strong> para voltar ao estado inicial, escolha novamente o conta-gotas cinza e clique em outro ponto de tom médio na frente da caneca. Repita esse ciclo em dois ou três pontos próximos até encontrar o resultado mais natural.",
        "<strong>Use a prévia para comparar.</strong> Desative e ative <strong>Preview</strong>, ou use <strong>Split view</strong> se essa opção aparecer na sua versão do GIMP. No antes, toda a cena parece coberta por amarelo; no depois, a caneca e o mármore ficam neutros, mas continuam com volume e sombra.",
        "<strong>Faça três verificações antes de aceitar.</strong> A caneca não pode ficar azul; o brilho na borda superior precisa continuar com detalhe; e o lado direito da caneca deve continuar mais escuro que o lado esquerdo. Se algum desses três pontos falhar, escolha outra região com o conta-gotas cinza.",
        "<strong>Confirme a correção.</strong> Quando o resultado estiver equilibrado, clique em <strong>OK</strong> na janela Levels. Aguarde o processamento e confira se a camada <code>Cor corrigida</code> continua selecionada.",
        "<strong>Compare as camadas novamente.</strong> Clique no ícone de olho de <code>Cor corrigida</code> para escondê-la e ver a fotografia amarela original. Clique outra vez para mostrar a correção. Faça essa comparação olhando principalmente para a caneca e para o mármore, não apenas para a parede.",
        "<strong>Reduza a intensidade se a correção parecer fria.</strong> Com <code>Cor corrigida</code> selecionada, diminua a <strong>Opacity</strong> da camada para aproximadamente 80% e compare. Depois teste 90% e 100%. Escolha o maior valor que mantenha a caneca neutra sem deixar a cena azulada.",
        "<strong>Use a estratégia alternativa somente se não houver um bom ponto neutro.</strong> Desfaça ou apague a camada corrigida, duplique novamente o original e acesse <code>Colors &gt; Color Temperature</code>. Comece com <strong>Original temperature</strong> em aproximadamente <code>3000 K</code> e <strong>Intended temperature</strong> em <code>6500 K</code>. Ajuste o primeiro valor lentamente entre 2500 K e 4000 K até reduzir o amarelo. Essa é a alternativa; não aplique Levels e Color Temperature juntos sem necessidade.",
        "<strong>Faça a revisão para e-commerce.</strong> Verifique se a cor da caneca se parece com o produto real ou com uma fotografia confiável. A correção deve ser verdadeira, não apenas bonita. Confira também se não surgiram áreas azuis, verdes, completamente brancas ou sem textura.",
        "<strong>Salve e exporte.</strong> Pressione <strong>Ctrl + S</strong> para salvar o XCF com as duas camadas. Depois acesse <code>File &gt; Export As</code>, informe <code>atividade-05-final.png</code>, clique em <strong>Export</strong> e confirme. Não use o PNG como substituto do XCF editável."
      ],
      layerOrder: ["Cor corrigida", "Original — não editar"],
      troubleshooting: [
        "<strong>A imagem ficou azul:</strong> você provavelmente clicou em uma região muito amarela, muito escura ou contaminada por reflexo. Ainda em Levels, escolha o conta-gotas cinza novamente e clique em outro tom médio da frente da caneca. Se já confirmou, use <strong>Ctrl + Z</strong> e recomece na camada duplicada.",
        "<strong>A caneca ficou branca e sem detalhes:</strong> provavelmente foi usado o conta-gotas de ponto branco, localizado à direita. Cancele ou desfaça, abra Levels novamente e use exclusivamente o conta-gotas do meio, o ponto cinza.",
        "<strong>Nada mudou:</strong> confirme que <code>Cor corrigida</code> está selecionada e visível, que <strong>Preview</strong> está ativado e que você clicou na própria imagem depois de escolher o conta-gotas cinza.",
        "<strong>Não encontro os conta-gotas:</strong> procure por <strong>All Channels</strong> na janela Levels. Dependendo do tamanho da tela, pode ser necessário aumentar a janela ou rolar seu conteúdo para baixo.",
        "<strong>O resultado fica diferente a cada clique:</strong> isso é esperado, pois cada pixel possui uma cor diferente. Escolha uma área lisa de tom médio na frente da caneca e evite brilho, sombra, bordas e reflexos.",
        "<strong>A correção está boa, mas forte demais:</strong> não refaça tudo. Depois de confirmar Levels, diminua a Opacity da camada <code>Cor corrigida</code> até misturar uma pequena parte do original."
      ],
      tip: "O conta-gotas cinza funciona porque existe na cena um objeto que deveria ser neutro. Em fotos sem branco, cinza ou uma referência física confiável, não adivinhe a cor do produto: use um cartão cinza fotografado junto da mercadoria ou consulte uma imagem de referência aprovada."
    },
    {
      id: 6, level: "basico", title: "Trocar um fundo cinza por branco puro",
      duration: "35–50 min",
      objective: "Separar o tênis do fundo cinza com uma máscara reversível, colocar branco puro abaixo dele e reconstruir uma sombra discreta em uma camada independente.",
      outcome: "Tênis vermelho preservado sobre fundo #FFFFFF uniforme, com sola completa, contorno limpo e sombra opcional controlável, sem manchas cinza nem partes apagadas.",
      imageAlt: "Tênis vermelho fotografado sobre um fundo cinza irregular",
      keywords: "fundo branco marketplace foreground select máscara layer mask sombra catálogo tênis recorte halo",
      attention: "<strong>Por que mudamos a estratégia?</strong> O fundo desta imagem não tem um único tom: parede, mesa, manchas e sombra possuem cinzas diferentes. Além disso, a sola branca é parecida com o fundo. Por isso, aumentar o <strong>Threshold</strong> da <code>Fuzzy Select Tool</code> pode apagar a sola antes de selecionar todo o fundo. Nesta aula usaremos <code>Foreground Select</code> e uma <strong>máscara de camada</strong>. Nada será apagado definitivamente: preto na máscara esconde pixels e branco os recupera.",
      steps: [
        "<strong>Abra a imagem da atividade.</strong> Acesse <code>File &gt; Open</code>, escolha <code>atividade-06-fundo-branco.png</code> e clique em <strong>Open</strong>. A fotografia mede 1254 × 1254 px e mostra um tênis vermelho sobre uma parede e uma mesa cinza.",
        "<strong>Salve uma cópia editável.</strong> Acesse <code>File &gt; Save As</code> e salve como <code>atividade-06-trabalho.xcf</code>. O XCF preservará o original, a máscara, o fundo branco e a sombra em camadas separadas.",
        "<strong>Proteja a fotografia original.</strong> No painel <strong>Layers</strong>, dê dois cliques no nome da camada, renomeie-a como <code>Original — não editar</code> e pressione <strong>Enter</strong>. Clique com o botão direito nela e escolha <code>Duplicate Layer</code>.",
        "<strong>Prepare a camada que será recortada.</strong> Renomeie a cópia superior como <code>Produto recortado</code>. Confirme que ela está acima de <code>Original — não editar</code> e permaneça com <code>Produto recortado</code> selecionada.",
        "<strong>Crie o fundo branco antes do recorte.</strong> Acesse <code>Layer &gt; New Layer</code>, dê o nome <code>Fundo branco #FFFFFF</code>, mantenha 1254 × 1254 px e escolha <code>White</code> em <strong>Fill with</strong>. Clique em <strong>OK</strong>.",
        "<strong>Organize as três camadas.</strong> Arraste <code>Fundo branco #FFFFFF</code> para baixo de <code>Produto recortado</code> e acima de <code>Original — não editar</code>. Desative o ícone de olho da camada original. A imagem ainda parecerá igual porque a fotografia superior continua cobrindo o fundo branco.",
        "<strong>Ative a ferramenta correta.</strong> Selecione <code>Tools &gt; Selection Tools &gt; Foreground Select</code>. Ela não possui atalho padrão. Nas <strong>Tool Options</strong>, deixe <strong>Draw mode</strong> em <code>Draw foreground</code>; mantenha as outras opções iniciais sugeridas pelo GIMP.",
        "<strong>Faça apenas um contorno aproximado.</strong> Clique em um ponto do fundo acima do tênis e contorne todo o produto, deixando entre 10 e 30 px de fundo do lado de fora. O traçado não precisa acompanhar cada detalhe. Inclua o puxador traseiro, toda a alça, toda a sola e a ponta. Não corte nenhuma parte do tênis nessa etapa.",
        "<strong>Feche o contorno.</strong> Volte ao ponto onde começou e clique quando esse ponto mudar de cor; também é possível dar dois cliques para fechar. Depois pressione <strong>Enter</strong> ou dê dois cliques dentro do contorno. A imagem receberá uma cobertura azul ou colorida: isso é a prévia da ferramenta, não uma pintura permanente.",
        "<strong>Marque o tecido vermelho.</strong> O cursor agora funciona como um pincel. Em <strong>Tool Options</strong>, escolha largura aproximada de 30 a 50 px. Faça alguns traços internos sobre a lateral vermelha, a parte de tecido da ponta, a língua e o calcanhar. Não pinte até a borda e não encoste no fundo.",
        "<strong>Marque também as partes de outras cores.</strong> Reduza a largura do pincel quando necessário e faça um traço dentro da sola branca, um dentro da região escura interna e pequenos traços sobre o puxador e os cadarços. Isso é indispensável: se você marcar somente o vermelho, o GIMP poderá entender que a sola branca pertence ao fundo.",
        "<strong>Peça ao GIMP uma prévia.</strong> Ative <strong>Preview mask</strong> ou pressione <strong>Enter</strong>, dependendo da versão. Aguarde o processamento. O tênis deverá aparecer destacado, enquanto parede e mesa deverão ficar excluídas. Em computadores mais lentos, esse cálculo pode levar alguns segundos.",
        "<strong>Refine sem recomeçar.</strong> Se uma parte do tênis estiver faltando, volte a <code>Draw foreground</code> e pinte dentro dela. Se um pedaço grande do fundo estiver sendo mantido, escolha <code>Draw background</code> e pinte sobre esse fundo. Alterne a prévia para conferir. Nunca pinte exatamente sobre o contorno delicado da sola ou dos cadarços.",
        "<strong>Converta a prévia em seleção.</strong> Quando tênis, puxador, cadarços e sola estiverem presentes, clique no botão <strong>Select</strong> da pequena janela da ferramenta. Use o botão em vez de pressionar Enter para evitar dúvida entre alternar a prévia e finalizar. Surgirá uma linha pontilhada ao redor da seleção.",
        "<strong>Suavize apenas um pouco a borda.</strong> Acesse <code>Select &gt; Feather</code>, digite <code>1 px</code> e confirme. Um valor maior pode deixar a borda vermelha borrada e criar um halo claro. Não pressione Delete.",
        "<strong>Transforme a seleção em máscara reversível.</strong> Com <code>Produto recortado</code> selecionada, acesse <code>Layer &gt; Mask &gt; Add Layer Masks</code>. Escolha <code>Selection</code> como estado inicial e confirme em <strong>Add</strong>. O fundo cinza desaparecerá e a camada branca criada anteriormente ficará visível.",
        "<strong>Remova a seleção pontilhada.</strong> Acesse <code>Select &gt; None</code>. No painel Layers, a camada <code>Produto recortado</code> terá duas miniaturas: a da foto e uma miniatura preta e branca. Clique na miniatura preta e branca; uma borda ao redor dela confirma que você está editando a máscara, não a fotografia.",
        "<strong>Entenda como corrigir a máscara.</strong> Pressione <strong>D</strong> para restaurar preto e branco nas cores da caixa de ferramentas. Ao pintar de <strong>preto</strong> na máscara, você esconde restos do fundo cinza. Pressione <strong>X</strong> para trocar as cores; ao pintar de <strong>branco</strong>, você recupera qualquer parte do tênis que tenha sumido.",
        "<strong>Revise o contorno ampliado.</strong> Aumente o zoom para 200% ou 300%. Use a <code>Paintbrush Tool</code> com pincel de borda média, tamanho entre 10 e 25 px e Opacity 100%. Passe ao redor da sola, ponta, calcanhar, puxador e cadarços. Use preto para retirar halos cinza e branco para restaurar partes cortadas. Faça traços curtos e use <strong>Ctrl + Z</strong> sempre que ultrapassar a borda.",
        "<strong>Crie uma sombra nova em vez de manter a mancha cinza antiga.</strong> Acesse <code>Layer &gt; New Layer</code>, nomeie-a <code>Sombra suave — opcional</code>, escolha 1254 × 1254 px e <code>Transparency</code>. Arraste essa camada para baixo de <code>Produto recortado</code> e acima do fundo branco.",
        "<strong>Pinte a sombra de contato.</strong> Selecione preto como <strong>Foreground color</strong> e use a <code>Paintbrush Tool</code> com pincel macio, como <code>2. Hardness 025</code>, tamanho entre 250 e 350 px e Opacity entre 8% e 12%. Faça cliques ou traços curtos diretamente sob a sola, concentrando um pouco mais de sombra no calcanhar e reduzindo-a perto da ponta. O tênis, por estar na camada superior, cobrirá a parte interna da sombra.",
        "<strong>Suavize se houver círculos visíveis.</strong> Com <code>Sombra suave — opcional</code> selecionada, acesse <code>Filters &gt; Blur &gt; Gaussian Blur</code>. Comece com aproximadamente 20 px nos eixos X e Y, mantenha a corrente ligada e confirme. Depois ajuste a Opacity da camada de sombra entre 10% e 20% até ela ficar discreta.",
        "<strong>Decida se a sombra será entregue.</strong> Para uma vitrine ou catálogo próprio, mantenha a sombra suave para o tênis não parecer flutuar. Se o marketplace exigir fundo totalmente branco sem sombra, desative o olho de <code>Sombra suave — opcional</code>. Não apague a camada; assim você poderá reativá-la depois.",
        "<strong>Confirme o branco puro.</strong> Selecione a <code>Color Picker Tool</code> e clique em um canto vazio. Abra a cor coletada e confira se a notação HTML é <code>ffffff</code>, equivalente a RGB 255, 255, 255. Faça esse teste longe da sombra e do tênis.",
        "<strong>Faça a inspeção final.</strong> Veja a imagem primeiro em 100% e depois em 300%. Procure manchas cinza, serrilhado, linha branca sobre o tênis vermelho, sola cortada, cadarços incompletos e sombra excessiva. Corrija sempre na miniatura da máscara; não use a Eraser Tool sobre a foto.",
        "<strong>Salve e exporte.</strong> Pressione <strong>Ctrl + S</strong> para salvar <code>atividade-06-trabalho.xcf</code>. Depois acesse <code>File &gt; Export As</code>, use <code>atividade-06-final.png</code>, clique em <strong>Export</strong> e confirme. O PNG é a entrega pronta; o XCF mantém o recorte editável."
      ],
      layerOrder: ["Produto recortado + máscara", "Sombra suave — opcional", "Fundo branco #FFFFFF", "Original — não editar (olho desligado)"],
      troubleshooting: [
        "<strong>A sola branca desapareceu:</strong> ela não foi marcada como parte do primeiro plano. Antes de finalizar Foreground Select, use <code>Draw foreground</code> e faça um traço dentro da sola. Se a máscara já foi criada, clique em sua miniatura e pinte a sola de branco.",
        "<strong>Parte do fundo cinza continua aparecendo:</strong> clique na miniatura da máscara, escolha preto e pinte sobre a sobra cinza com zoom alto. Confira se a borda branca está ao redor da miniatura da máscara, não da foto.",
        "<strong>Pintar de preto manchou o tênis:</strong> você provavelmente editou a miniatura da fotografia. Desfaça com <strong>Ctrl + Z</strong>, clique na miniatura preta e branca da máscara e tente novamente.",
        "<strong>A borda ficou serrilhada:</strong> use um pincel pequeno com borda média na máscara e faça correções curtas. Não aplique Feather alto; nesta imagem, 1 px é suficiente.",
        "<strong>Apareceu uma linha clara ao redor do tênis:</strong> é um halo do fundo antigo. Na máscara, pinte de preto imediatamente do lado externo da borda. Trabalhe a 300% e não invada o tecido vermelho.",
        "<strong>A sombra parece uma mancha:</strong> diminua a Opacity da camada, aplique Gaussian Blur ou apague a sombra e refaça com pincel maior e Opacity entre 8% e 12%.",
        "<strong>O fundo ainda não é branco puro:</strong> confira se <code>Fundo branco #FFFFFF</code> está visível, abaixo do produto e preenchido com branco. Use o conta-gotas em um canto e confirme a notação <code>ffffff</code>.",
        "<strong>Foreground Select está muito lento:</strong> aguarde o processamento e evite aumentar a imagem. Se a opção <strong>Engine</strong> estiver disponível, <code>Matting Global</code> costuma ser uma alternativa mais leve no Windows."
      ],
      tip: "A máscara é preferível ao Delete porque permite recuperar a sola ou qualquer detalhe a qualquer momento. Para marketplace, consulte a regra do canal: alguns aceitam sombra de contato discreta e outros exigem somente branco #FFFFFF."
    },
    {
      id: 7, level: "basico", title: "Exportar produto com fundo transparente",
      duration: "30–45 min",
      objective: "Remover um fundo verde uniforme de um frasco opaco, criar transparência real com canal alpha e comprovar que ela foi preservada no PNG exportado.",
      outcome: "Frasco azul isolado em um PNG RGBA, com quadriculado ao redor no GIMP, vão sob a válvula também transparente e contorno sem linha verde.",
      imageAlt: "Frasco cosmético azul opaco sobre fundo verde uniforme para exercício de recorte",
      keywords: "transparência png alpha select by color recorte fundo verde checkerboard rgba exportar",
      attention: "<strong>Material substituído:</strong> a imagem anterior mostrava um frasco de vidro transparente diante de folhas e reflexos. Aquele cenário continuaria visível através do vidro mesmo após remover o exterior, tornando o exercício inadequado para iniciantes. O novo arquivo usa um frasco <strong>opaco</strong> e um fundo verde uniforme. A estratégia também mudou: usaremos <code>Select by Color</code>, que seleciona a mesma cor em regiões separadas — inclusive no espaço sob a válvula — e depois criaremos transparência com o canal alpha.",
      steps: [
        "<strong>Baixe e abra o novo material.</strong> Use o botão <strong>Baixar imagem</strong> desta atividade. No GIMP, acesse <code>File &gt; Open</code>, selecione <code>atividade-07-recorte-v2.png</code> e clique em <strong>Open</strong>. A imagem correta mostra somente um frasco azul-marinho opaco sobre um fundo verde-menta.",
        "<strong>Não continue com a imagem antiga.</strong> Se você estiver vendo perfume de vidro, plantas, flores ou outros objetos, fechou ou abriu o arquivo errado. A transparência daquele vidro exigiria reconstrução de reflexos e não faz parte desta aula básica.",
        "<strong>Salve uma cópia de trabalho.</strong> Acesse <code>File &gt; Save As</code> e salve como <code>atividade-07-trabalho.xcf</code>. O XCF manterá uma camada original protegida e outra camada para o recorte.",
        "<strong>Preserve o original.</strong> No painel <strong>Layers</strong>, renomeie a camada aberta como <code>Original — não editar</code>. Clique com o botão direito nela, escolha <code>Duplicate Layer</code> e renomeie a cópia superior como <code>Produto transparente</code>.",
        "<strong>Desative a camada original.</strong> Clique no ícone de olho de <code>Original — não editar</code>. Ela deve ficar invisível. Se permanecer visível, o fundo verde da camada original aparecerá por baixo e dará a impressão de que o recorte não funcionou.",
        "<strong>Adicione o canal que armazena transparência.</strong> Selecione <code>Produto transparente</code> e acesse <code>Layer &gt; Transparency &gt; Add Alpha Channel</code>. Se a opção estiver cinza ou desativada, a camada já possui alpha e você pode seguir. Sem alpha, a tecla Delete substituiria o fundo por uma cor em vez de criar o quadriculado.",
        "<strong>Ative a seleção por cor.</strong> Acesse <code>Tools &gt; Selection Tools &gt; By Color Select</code>, ou use o atalho <strong>Shift + O</strong>. Não escolha <code>Fuzzy Select</code>: ela trabalha somente com regiões vizinhas, enquanto By Color também alcança o verde separado pelo bico da válvula.",
        "<strong>Configure a ferramenta antes do clique.</strong> Em <strong>Tool Options</strong>, use o modo <code>Replace the current selection</code>, mantenha <strong>Antialiasing</strong> ativado, deixe <strong>Feather edges</strong> desativado e comece com <strong>Threshold</strong> em <code>15</code>. Em <strong>Select by</strong>, mantenha <code>Composite</code> ou a opção padrão.",
        "<strong>Clique somente no verde.</strong> Clique no canto superior direito, longe do frasco. Surgirão linhas pontilhadas na borda da tela e ao redor do produto. Elas indicam que o fundo verde está selecionado; o frasco azul deve permanecer fora da seleção.",
        "<strong>Confira o espaço sob a válvula.</strong> Observe o vão verde localizado entre o bico comprido e o ombro do frasco. Como usamos By Color, esse espaço também deve estar selecionado, mesmo não estando ligado ao fundo externo por todos os lados.",
        "<strong>Ajuste o Threshold somente se necessário.</strong> Se pequenas ilhas verdes ficarem sem seleção, aumente para 20 e clique novamente no canto. Se ainda precisar, teste 25 ou 30. Não salte diretamente para valores altos: quando o Threshold é excessivo, ele começa a selecionar pixels azuis do frasco.",
        "<strong>Reconheça uma seleção exagerada.</strong> Se a linha pontilhada entrar no corpo azul, no bico ou na tampa, reduza o Threshold, clique novamente no verde e confira. O objetivo é selecionar todo o verde sem formar áreas selecionadas dentro do produto.",
        "<strong>Avance um pixel sobre a borda verde.</strong> Com o fundo ainda selecionado, acesse <code>Select &gt; Grow</code>, digite <code>1 px</code> e confirme. Isso ajuda a remover a fina contaminação verde que costuma permanecer exatamente no contorno.",
        "<strong>Suavize a transição.</strong> Acesse <code>Select &gt; Feather</code>, digite <code>1 px</code> e confirme. Não use 5 ou 10 px: um valor alto apagaria parte do frasco e produziria uma borda desfocada.",
        "<strong>Apague somente o fundo selecionado.</strong> Confirme mais uma vez que <code>Produto transparente</code> está selecionada no painel e pressione <strong>Delete</strong>. Todo o verde deve ser substituído pelo padrão quadriculado cinza e branco do GIMP.",
        "<strong>Remova a linha de seleção.</strong> Acesse <code>Select &gt; None</code>. O quadriculado não faz parte da imagem: ele é apenas a forma usada pelo GIMP para mostrar pixels transparentes.",
        "<strong>Confira o vão da válvula.</strong> Aumente o zoom para 200% e examine a região sob o bico. Ela também deve mostrar quadriculado. Verifique depois as laterais, a base, o topo e as pequenas quinas da válvula.",
        "<strong>Crie um fundo temporário para revelar halos.</strong> Acesse <code>Layer &gt; New Layer</code>, dê o nome <code>Teste de contraste — ocultar</code>, mantenha o tamanho da imagem e escolha <code>White</code> em <strong>Fill with</strong>. Arraste essa camada para baixo de <code>Produto transparente</code> e acima do original oculto.",
        "<strong>Teste sobre uma cor escura também.</strong> Selecione <code>Teste de contraste — ocultar</code>, defina o <strong>Foreground color</strong> como preto e use a <code>Bucket Fill Tool</code> para preenchê-la. Contornos verdes ou claros ficam mais fáceis de perceber sobre preto do que sobre o quadriculado.",
        "<strong>Corrija apenas se houver halo.</strong> Volte para <code>Produto transparente</code>, use a <code>Eraser Tool</code> com pincel pequeno de borda média, tamanho entre 5 e 15 px, e trabalhe com zoom de 300%. Apague somente a linha verde externa com traços curtos. Se entrar no frasco, pressione <strong>Ctrl + Z</strong> imediatamente.",
        "<strong>Oculte as camadas que não podem ser exportadas.</strong> Desative o olho de <code>Teste de contraste — ocultar</code> e confirme que <code>Original — não editar</code> também está invisível. No momento da exportação, somente <code>Produto transparente</code> deve estar visível e o quadriculado precisa aparecer ao redor dela.",
        "<strong>Salve o arquivo editável.</strong> Pressione <strong>Ctrl + S</strong> para salvar o XCF. Assim, se o contorno precisar de nova correção, você não terá de repetir a seleção desde o início.",
        "<strong>Exporte obrigatoriamente em PNG.</strong> Acesse <code>File &gt; Export As</code>, escreva <code>atividade-07-final.png</code> e confira a extensão <code>.png</code>. JPEG não suporta transparência e preencheria a área removida.",
        "<strong>Confirme as opções do PNG.</strong> Clique em <strong>Export</strong>. Se sua versão mostrar <strong>Pixel format</strong>, mantenha a opção automática ou escolha uma opção <code>RGBA</code>, isto é, com a letra A de alpha. As demais opções podem permanecer no padrão. Clique novamente em <strong>Export</strong>.",
        "<strong>Abra o PNG exportado para testar.</strong> Acesse <code>File &gt; Open</code> e abra <code>atividade-07-final.png</code> como uma nova imagem. Se o quadriculado aparecer ao redor do frasco e sob a válvula, o alpha foi gravado corretamente. Não confie apenas na miniatura do Explorador de Arquivos, pois alguns visualizadores exibem transparência sobre branco ou preto.",
        "<strong>Faça a conferência final.</strong> No PNG reaberto, confirme que existe somente uma camada visível, que o fundo não voltou, que o frasco não ficou parcialmente transparente e que não existe borda verde. O XCF é o arquivo de trabalho; o PNG reaberto e aprovado é a entrega."
      ],
      layerOrder: ["Produto transparente (visível)", "Teste de contraste — ocultar (olho desligado)", "Original — não editar (olho desligado)"],
      troubleshooting: [
        "<strong>Pressionei Delete e o fundo não ficou quadriculado:</strong> selecione <code>Produto transparente</code> e use <code>Layer &gt; Transparency &gt; Add Alpha Channel</code>. Depois desfaça e repita a exclusão.",
        "<strong>O fundo continua verde mesmo depois de apagar:</strong> a camada <code>Original — não editar</code> provavelmente está visível por baixo. Desative seu ícone de olho.",
        "<strong>O frasco inteiro desapareceu:</strong> o produto, e não o fundo, estava selecionado. Use <strong>Ctrl + Z</strong>, faça <code>Select &gt; None</code> e clique novamente no verde com By Color Select.",
        "<strong>Restaram pontos verdes:</strong> aumente o Threshold em pequenos passos, sem ultrapassar o necessário. Outra opção é adicionar os pontos à seleção pelo modo <code>Add to the current selection</code> e então apagar.",
        "<strong>O azul ficou parcialmente transparente:</strong> o Threshold estava alto demais. Desfaça, diminua o valor e refaça a seleção. Não use Color to Alpha nesta imagem se ele começar a afetar os reflexos azuis.",
        "<strong>Existe uma linha verde no contorno:</strong> antes de apagar, aplique Grow 1 px e Feather 1 px. Se já exportou, volte ao XCF e retire o halo cuidadosamente com a Eraser Tool sobre a camada duplicada.",
        "<strong>O arquivo exportado tem fundo branco:</strong> confira se o nome termina em <code>.png</code>, se as camadas de teste e original estão ocultas e se o PNG foi exportado com alpha. Abra-o novamente no GIMP para verificar.",
        "<strong>O Explorador de Arquivos mostra branco ou preto:</strong> isso não prova que o alpha foi perdido. Muitos visualizadores usam uma cor sólida atrás da transparência. Reabra o PNG no GIMP e procure o quadriculado.",
        "<strong>A transparência funciona fora do bico, mas não no vão interno:</strong> você provavelmente usou Fuzzy Select. Recomece com <code>By Color Select</code>, que seleciona o verde semelhante mesmo em regiões desconectadas."
      ],
      tip: "Transparência exige três condições ao mesmo tempo: pixels removidos, canal alpha e um formato que aceite alpha. Nesta atividade, isso significa ver o quadriculado, manter Add Alpha Channel e exportar como PNG — nunca JPEG."
    },
    {
      id: 8, level: "intermediario", title: "Remover poeira, etiqueta ou objeto indesejado",
      objective: "Limpar pequenas distrações sem alterar a estrutura do produto.",
      outcome: "Superfície contínua, sem manchas repetidas ou marcas visíveis de retoque.",
      imageAlt: "Relógio de pulso antes e depois da remoção de pequenos objetos ao redor",
      keywords: "heal clone remover objeto poeira etiqueta retoque limpeza",
      steps: [
        "Duplique a camada e aproxime a área com <code>Zoom Tool</code>.",
        "Escolha <code>Heal Tool</code>. Segure <code>Ctrl</code> e clique em uma área limpa para definir a amostra.",
        "Pinte com cliques curtos sobre poeira e pequenas marcas; atualize a amostra com frequência.",
        "Para bordas geométricas, use <code>Clone Tool</code> com um pincel de borda suave.",
        "Reduza o zoom para 100% e verifique se não há padrões repetidos."
      ],
      tip: "Remova defeitos da fotografia, não características reais do produto. Arranhões que fazem parte do item devem permanecer."
    },
    {
      id: 9, level: "intermediario", title: "Criar sombra de contato realista",
      objective: "Fazer um produto recortado parecer apoiado sobre a superfície.",
      outcome: "Sombra suave, coerente com a direção da luz e mais escura perto do objeto.",
      imageAlt: "Garrafa azul com comparação de sombra de contato discreta",
      keywords: "sombra drop shadow contato produto recortado luz",
      steps: [
        "Mantenha o produto em uma camada transparente e selecione essa camada.",
        "Aplique <code>Filters &gt; Light and Shadow &gt; Drop Shadow</code>.",
        "Use deslocamento pequeno, raio de desfoque moderado e opacidade baixa como ponto de partida.",
        "Na camada da sombra, use <code>Scale Tool</code> para achatá-la quando o produto estiver apoiado em uma mesa.",
        "Ajuste a <strong>Opacity</strong> até a sombra ser percebida sem chamar atenção."
      ],
      tip: "A sombra deve seguir a luz da cena. Se a luz vem da esquerda, a sombra tende para o lado oposto."
    },
    {
      id: 10, level: "intermediario", title: "Colocar o produto em um cenário lifestyle",
      objective: "Combinar um produto recortado com um ambiente que mostre seu contexto de uso.",
      outcome: "Composição crível, com escala, perspectiva, cor e luz compatíveis.",
      imageAlt: "Vela de produto sendo inserida em uma cena lifestyle acolhedora",
      keywords: "lifestyle composição open as layers cenário escala perspectiva",
      steps: [
        "Abra <code>atividade-10-cenario.png</code> e importe o recorte produzido na Atividade 7 por <code>File &gt; Open as Layers</code>.",
        "Ajuste tamanho e posição com <code>Scale Tool</code> e <code>Move Tool</code>.",
        "Compare a direção da luz. Corrija o produto com <code>Colors &gt; Curves</code> se ele estiver claro ou escuro demais.",
        "Crie uma sombra de contato em uma camada própria e aplique um leve desfoque.",
        "Observe objetos conhecidos da cena para conferir se a escala do produto é plausível."
      ],
      tip: "Cenário bonito não basta: o produto precisa parecer do tamanho certo e realmente apoiado no ambiente."
    },
    {
      id: 11, level: "intermediario", title: "Transformar uma imagem em banner largo",
      objective: "Estender manualmente o fundo e reservar espaço para título e botão.",
      outcome: "Banner horizontal sem esticar o produto, com área limpa para conteúdo da loja.",
      imageAlt: "Fone laranja reposicionado em uma composição horizontal mais ampla",
      keywords: "banner canvas size expandir fundo clone gradient espaço texto",
      steps: [
        "Use <code>Image &gt; Canvas Size</code>, aumente a largura e posicione a foto em um dos lados.",
        "Marque <strong>Resize layers: All layers</strong> e confirme.",
        "Crie uma camada abaixo da foto e preencha a área vazia com <code>Gradient Tool</code>, usando cores presentes na imagem.",
        "Se o fundo tiver textura, use <code>Clone Tool</code> em uma camada nova para prolongá-la gradualmente.",
        "Mantenha uma região simples para o texto e teste cortes em telas menores antes de exportar."
      ],
      tip: "Nunca aumente somente a largura da foto com Scale Image; isso deforma produto e cenário. Aumente a tela."
    },
    {
      id: 12, level: "intermediario", title: "Criar selo promocional editável",
      objective: "Montar um destaque de desconto que possa ser atualizado sem refazer o post.",
      outcome: "Selo circular ou serrilhado em camada separada, com texto legível.",
      imageAlt: "Sacola de produto ao lado de um selo promocional laranja sem texto",
      keywords: "selo promoção desconto badge ellipse select texto camada",
      steps: [
        "Crie uma camada transparente em <code>Layer &gt; New Layer</code> e dê o nome <strong>Selo</strong>.",
        "Use <code>Ellipse Select Tool</code> segurando <code>Shift</code> para formar um círculo perfeito.",
        "Preencha com a cor de destaque usando <code>Bucket Fill Tool</code> e remova a seleção em <code>Select &gt; None</code>.",
        "Com <code>Text Tool</code>, escreva a oferta em uma camada separada e centralize com <code>Align and Distribute Tool</code>.",
        "Agrupe círculo e texto no painel <code>Layers</code> para mover ou reutilizar o selo."
      ],
      tip: "Evite promessas vagas ou preços desatualizados. O selo deve complementar, não esconder, o produto."
    },
    {
      id: 13, level: "intermediario", title: "Corrigir perspectiva de embalagem",
      objective: "Endireitar uma caixa fotografada de lado para apresentar melhor sua face frontal.",
      outcome: "Linhas verticais e horizontais mais alinhadas, sem achatamento excessivo.",
      imageAlt: "Caixa de papelão antes e depois de uma correção de perspectiva",
      keywords: "perspectiva embalagem caixa perspective tool guias corrigir",
      steps: [
        "Ative as réguas e crie guias arrastando a partir delas para marcar linhas verticais e horizontais.",
        "Selecione <code>Perspective Tool</code> e, nas opções, escolha transformar a camada.",
        "Arraste os cantos da grade até as bordas principais da embalagem acompanharem as guias.",
        "Confirme em <strong>Transform</strong> e use <code>Crop Tool</code> para remover áreas vazias.",
        "Compare proporções com a embalagem real para evitar uma correção artificial."
      ],
      tip: "Perspectiva ajuda a corrigir a câmera, mas não deve transformar uma caixa retangular em outra proporção."
    },
    {
      id: 14, level: "intermediario", title: "Aplicar uma arte em mockup de embalagem",
      objective: "Simular rótulo ou identidade visual sobre uma embalagem fotografada.",
      outcome: "Arte integrada ao volume da embalagem, com perspectiva e textura preservadas.",
      imageAlt: "Tubo cosmético e caixa recebendo uma arte laranja de embalagem",
      keywords: "mockup embalagem rótulo perspective multiply blend mode",
      steps: [
        "Abra a foto da embalagem e importe a arte com <code>File &gt; Open as Layers</code>.",
        "Reduza a opacidade da arte temporariamente para enxergar as bordas abaixo.",
        "Use <code>Perspective Tool</code> para encaixar os quatro cantos da arte na face da embalagem.",
        "Experimente o modo de camada <code>Multiply</code> e ajuste a <strong>Opacity</strong> para recuperar luz e textura.",
        "Adicione uma máscara de camada e esconda qualquer parte da arte que ultrapasse a embalagem."
      ],
      tip: "Mockup serve para visualizar uma proposta. Não o apresente como fotografia do produto final se a embalagem ainda não existe."
    },
    {
      id: 15, level: "avancado", title: "Criar variações de cor do produto",
      objective: "Simular cores diferentes preservando luz, sombra e material.",
      outcome: "Variações organizadas e visualmente coerentes, identificadas como simulação.",
      imageAlt: "Quatro versões do mesmo tênis em azul, laranja, verde e branco",
      keywords: "variação cor colorize hue saturation máscara produto sku",
      steps: [
        "Selecione somente a área colorida do produto com <code>Paths Tool</code> ou <code>Select by Color Tool</code>.",
        "Duplique a camada para cada variação e adicione uma máscara baseada na seleção.",
        "Em cada cópia, use <code>Colors &gt; Hue-Saturation</code> ou <code>Colors &gt; Colorize</code>.",
        "Ajuste luminosidade e saturação sem apagar brilhos, sombras e textura do material.",
        "Nomeie as camadas com os SKUs ou cores e exporte cada versão separadamente."
      ],
      tip: "Use esta técnica apenas quando a cor simulada corresponder a uma versão realmente disponível para venda."
    },
    {
      id: 16, level: "avancado", title: "Criar profundidade com fundo desfocado",
      objective: "Direcionar o olhar para o produto usando desfoque seletivo.",
      outcome: "Produto nítido e fundo suavemente desfocado, com transição natural.",
      imageAlt: "Flor em vaso com o fundo transformado em desfoque suave",
      keywords: "desfoque gaussian blur profundidade máscara foco produto",
      steps: [
        "Duplique a camada da fotografia.",
        "Na camada superior, selecione o produto com <code>Foreground Select Tool</code> e crie uma máscara.",
        "Selecione a camada inferior e aplique <code>Filters &gt; Blur &gt; Gaussian Blur</code>.",
        "Clique na máscara superior e use um pincel macio para suavizar a transição nas bordas.",
        "Reduza o desfoque se o cenário perder completamente sua identidade."
      ],
      tip: "Um desfoque muito forte parece artificial. O fundo ainda deve explicar onde o produto está sendo usado."
    },
    {
      id: 17, level: "avancado", title: "Montar um modelo de carrossel reutilizável",
      objective: "Criar quatro slides com a mesma grade, tipografia e posição de CTA.",
      outcome: "Arquivo XCF organizado em grupos e quatro imagens consistentes para o carrossel.",
      imageAlt: "Grade de quatro imagens de uma bolsa em diferentes ângulos",
      keywords: "carrossel template xcf layer groups guides instagram consistência",
      steps: [
        "Abra <code>atividade-17-carrossel.png</code>. Selecione um produto por vez com <code>Foreground Select Tool</code> e copie-o com <code>Edit &gt; Copy</code>.",
        "Crie um documento 1080 × 1350 px em <code>File &gt; New</code> e cole cada produto com <code>Edit &gt; Paste as &gt; New Layer</code>.",
        "Adicione margens com <code>Image &gt; Guides &gt; New Guide (by Percent)</code> e monte as camadas fixas de título, número e CTA.",
        "No painel <code>Layers</code>, crie um grupo para cada slide e coloque um dos quatro produtos em cada grupo.",
        "Salve o mestre em <code>.xcf</code>; depois deixe um grupo visível por vez e exporte os quatro slides numerados."
      ],
      tip: "Ao publicar, confira a sequência: capa, contexto, benefício e CTA devem formar uma leitura contínua."
    },
    {
      id: 18, level: "avancado", title: "Criar anúncio social com hierarquia visual",
      objective: "Combinar produto, benefício, oferta e CTA sem confundir a leitura.",
      outcome: "Anúncio vertical com ordem clara: produto → benefício → oferta → ação.",
      imageAlt: "Anúncio azul e laranja com garrafa em destaque e espaços para conteúdo",
      keywords: "anúncio social hierarquia cta layout tipografia align guides",
      steps: [
        "Crie um documento em 1080 × 1350 px e adicione guias para uma margem segura de aproximadamente 80 px.",
        "Construa o fundo em uma camada própria e importe o produto acima dele.",
        "Crie camadas de texto separadas para benefício, oferta e CTA; use no máximo duas famílias tipográficas.",
        "Aplique <code>Align and Distribute Tool</code> para alinhar blocos e manter espaços regulares.",
        "Reduza a visualização para 25%: se a mensagem principal sumir, aumente contraste ou simplifique a peça."
      ],
      tip: "A imagem pode conter texto, mas preço e informações essenciais também devem aparecer no conteúdo acessível da página ou legenda."
    },
    {
      id: 19, level: "avancado", title: "Otimizar imagem para carregamento rápido",
      objective: "Reduzir dimensões e peso sem degradar visualmente o produto.",
      outcome: "Arquivo WebP nítido no tamanho de exibição e significativamente menor que o original.",
      imageAlt: "Câmera fotográfica passando de uma visualização pixelada para uma versão nítida",
      keywords: "webp otimização peso qualidade export web site rápido metadata",
      steps: [
        "Duplique o arquivo final e use <code>Image &gt; Scale Image</code> para chegar às dimensões reais de publicação.",
        "Acesse <code>File &gt; Export As</code> e use a extensão <code>.webp</code>.",
        "No diálogo WebP, escolha o tipo de imagem adequado e teste qualidade entre 75 e 85 como ponto de partida.",
        "Desative metadados desnecessários quando não houver obrigação de preservá-los.",
        "Compare o arquivo em 100% de zoom e confira o peso; reduza a qualidade gradualmente se ainda estiver grande."
      ],
      tip: "Não existe um único valor ideal de qualidade. Avalie detalhes finos, bordas, texto e gradientes de cada imagem."
    },
    {
      id: 20, level: "avancado", title: "Padronizar um catálogo com modelo mestre",
      objective: "Processar várias fotos com enquadramento, fundo e exportação consistentes.",
      outcome: "Conjunto de produtos com a mesma escala visual, margens, fundo e padrão de nomes.",
      imageAlt: "Linha de garrafas coloridas sendo organizada como catálogo em um computador",
      keywords: "catálogo lote escala template xcf produção workflow camadas",
      steps: [
        "Crie um arquivo mestre quadrado com fundo, guias de margem e uma camada de referência para a área que o produto deve ocupar.",
        "Salve como <code>modelo-catalogo.xcf</code> e duplique o arquivo antes de iniciar cada produto.",
        "Importe a fotografia com <code>File &gt; Open as Layers</code>, remova o fundo e ajuste com <code>Scale Tool</code> sem ultrapassar as guias.",
        "Aplique o mesmo padrão de sombra e verifique a cor com uma referência confiável.",
        "Exporte usando nomes sequenciais, como <code>sku-001-frente.webp</code>, e registre os itens em uma lista de controle.",
        "Abra os arquivos exportados lado a lado e faça uma revisão final de escala, margens, cor e nitidez."
      ],
      tip: "O arquivo mestre acelera o trabalho sem esconder decisões. Revise cada produto: automação visual não substitui controle de qualidade."
    }
  ];

  const assetFiles = [
    "atividade-01-enquadramento.png", "atividade-02-formatos.png", "atividade-03-oferta.png", "atividade-04-exposicao.png",
    "atividade-05-cor.png", "atividade-06-fundo-branco.png", "atividade-07-recorte-v2.png", "atividade-08-retoque.png",
    "atividade-09-sombra.png", "atividade-10-cenario.png", "atividade-11-banner.png", "atividade-12-selo.png",
    "atividade-13-perspectiva.png", "atividade-14-mockup.png", "atividade-15-variacoes-cor.png", "atividade-16-desfoque.png",
    "atividade-17-carrossel.png", "atividade-18-anuncio.png", "atividade-19-otimizacao.png", "atividade-20-catalogo.png"
  ];

  const extraMaterials = {
    10: "Use também o PNG transparente produzido na Atividade 7.",
    14: "Crie no próprio GIMP uma arte simples de rótulo em uma camada separada.",
    17: "O arquivo contém quatro produtos separados para formar os quatro slides.",
    20: "Para ampliar a prática, repita o fluxo com as imagens das Atividades 1–19."
  };
  const automatedExamples = new Set([5, 6, 7]);

  const levelMeta = {
    basico: { title: "🟢 Nível básico", subtitle: "Exemplos 1–7 · enquadramento, tamanho, texto e correções essenciais", badge: "badge-basic" },
    intermediario: { title: "🟡 Nível intermediário", subtitle: "Exemplos 8–14 · retoque, composição, banner e mockup", badge: "badge-intermediate" },
    avancado: { title: "🔴 Nível avançado", subtitle: "Exemplos 15–20 · variações, sistemas visuais e produção em escala", badge: "badge-advanced" }
  };

  const root = document.querySelector("[data-examples-root]");
  const progressKey = "gimp20-progress-v1";
  let progress = {};

  try { progress = JSON.parse(localStorage.getItem(progressKey) || "{}"); } catch (error) { progress = {}; }

  function renderExamples() {
    if (!root) return;
    root.innerHTML = Object.keys(levelMeta).map(function (level) {
      const meta = levelMeta[level];
      const cards = examples.filter(function (item) { return item.level === level; }).map(renderCard).join("");
      return `<section class="section level-section ${level === "intermediario" ? "section-soft" : ""}" id="${level}" data-level-section="${level}">
        <div class="container">
          <div class="level-heading"><span class="level-badge ${meta.badge}">${meta.title}</span><div><h2>${meta.subtitle.split(" · ")[0]}</h2><p class="mb-0 text-body-secondary">${meta.subtitle.split(" · ")[1]}</p></div></div>
          <div class="example-list">${cards}</div>
        </div>
      </section>`;
    }).join("");
  }

  function renderCard(item) {
    const number = String(item.id).padStart(2, "0");
    const meta = levelMeta[item.level];
    const checked = progress[item.id] === true;
    const assetFile = assetFiles[item.id - 1];
    const duration = item.duration || (item.level === "basico" ? "20–25 min" : item.level === "intermediario" ? "30–40 min" : "45–60 min");
    const finalExtension = item.id === 19 ? "webp" : "png";
    return `<article class="example-card${checked ? " is-complete" : ""}" data-example data-level="${item.level}" data-search-text="${(item.title + " " + item.objective + " " + item.keywords).toLocaleLowerCase("pt-BR")}">
      <div class="example-summary">
        <img class="example-image" src="assets/atividades/${assetFile}" alt="${item.imageAlt}" loading="lazy">
        <div class="example-heading">
          <span class="level-badge ${meta.badge}">${meta.title}</span>
          <h3>Exemplo ${item.id} — ${item.title}</h3>
          <p>${item.objective}</p>
          <button class="btn btn-outline-primary example-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#example-${number}" aria-expanded="false" aria-controls="example-${number}">Ver passo a passo</button>
        </div>
      </div>
      <div class="collapse" id="example-${number}">
        <div class="example-body">
          <div class="lesson-meta">
            <div><strong>⏱️ Duração</strong><span>${duration}</span></div>
            <div><strong>📁 Arquivo-base</strong><code>${assetFile}</code></div>
            <div><strong>📦 Entrega</strong><span><code>atividade-${number}-final.xcf</code> + <code>atividade-${number}-final.${finalExtension}</code></span></div>
          </div>
          <div class="materials"><div><strong>🖼️ Material da aula</strong><p class="mb-0">Abra uma cópia deste arquivo no GIMP.${extraMaterials[item.id] ? " " + extraMaterials[item.id] : ""}</p></div><a class="btn btn-download" href="assets/atividades/${assetFile}" download>⬇️ Baixar imagem</a></div>
          ${automatedExamples.has(item.id) ? `<div class="materials automation-materials"><div><strong>⚙️ Automação opcional para GIMP 3</strong><p class="mb-0">O plug-in preserva o original e prepara as camadas desta atividade. Revise o resultado antes de exportar.</p></div><div class="automation-actions"><a class="btn btn-orange" href="assets/gimp-ecommerce-automacao.zip" download>⬇️ Baixar plug-in</a><a class="btn btn-outline-primary" href="scripts/gimp-ecommerce-automacao/LEIA-ME.md" target="_blank" rel="noopener">📖 Guia de instalação</a></div></div>` : ""}
          ${item.attention ? `<div class="lesson-attention">${item.attention}</div>` : ""}
          <p class="outcome"><strong>✨ Resultado esperado:</strong> ${item.outcome}</p>
          <div id="steps-${number}"><ol class="steps">${item.steps.map(function (step) { return `<li>${step}</li>`; }).join("")}</ol></div>
          ${item.layerOrder ? `<div class="layer-guide"><strong>🧱 Ordem das camadas — de cima para baixo</strong><ol>${item.layerOrder.map(function (layer) { return `<li><code>${layer}</code></li>`; }).join("")}</ol></div>` : ""}
          ${item.troubleshooting ? `<div class="troubleshooting"><strong>🛠️ Se algo der errado</strong><ul>${item.troubleshooting.map(function (problem) { return `<li>${problem}</li>`; }).join("")}</ul></div>` : ""}
          <p class="tip"><strong>💡 Dica de e-commerce:</strong> ${item.tip}</p>
          <div class="example-actions">
            <button class="btn btn-orange" type="button" data-copy-target="steps-${number}">📋 Copiar passo a passo</button>
            <span class="done-wrap"><input class="form-check-input" type="checkbox" id="done-${number}" data-done="${item.id}" ${checked ? "checked" : ""}><label for="done-${number}">Concluído</label></span>
          </div>
        </div>
      </div>
    </article>`;
  }

  renderExamples();

  // Tema claro/escuro independente do outro projeto.
  const themeButton = document.querySelector("[data-theme-toggle]");
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    if (!themeButton) return;
    themeButton.textContent = theme === "dark" ? "☀️" : "🌙";
    themeButton.setAttribute("aria-label", theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro");
  }
  applyTheme(document.documentElement.dataset.theme || "light");
  themeButton?.addEventListener("click", function () {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("gimp20-theme", next);
    applyTheme(next);
  });

  // Cópia do passo a passo com fallback para acesso via arquivo local.
  const toast = document.querySelector("[data-copy-toast]");
  let toastTimer;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 2000);
  }
  async function copyText(value) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(value);
    const helper = document.createElement("textarea");
    helper.value = value;
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }

  document.addEventListener("click", async function (event) {
    const copyButton = event.target.closest("[data-copy-target]");
    if (!copyButton) return;
    const target = document.getElementById(copyButton.dataset.copyTarget);
    if (!target) return;
    const original = copyButton.textContent;
    try {
      await copyText(target.textContent.trim());
      copyButton.textContent = "✅ Copiado!";
      showToast("✅ Passo a passo copiado!");
      setTimeout(function () { copyButton.textContent = original; }, 2000);
    } catch (error) { showToast("Não foi possível copiar automaticamente."); }
  });

  // Progresso dos 20 exercícios salvo no navegador.
  const progressText = document.querySelector("[data-progress-count]");
  function updateProgress() {
    const completed = examples.filter(function (item) { return progress[item.id] === true; }).length;
    if (progressText) {
      progressText.textContent = completed + "/" + examples.length;
      progressText.setAttribute("aria-label", completed + " de " + examples.length + " exemplos concluídos");
    }
  }
  document.addEventListener("change", function (event) {
    const checkbox = event.target.closest("[data-done]");
    if (!checkbox) return;
    progress[checkbox.dataset.done] = checkbox.checked;
    checkbox.closest("[data-example]")?.classList.toggle("is-complete", checkbox.checked);
    try { localStorage.setItem(progressKey, JSON.stringify(progress)); } catch (error) { /* Mantém o estado na sessão. */ }
    updateProgress();
  });
  updateProgress();

  // Busca combinada com filtro de nível, sem recarregar a página.
  const search = document.querySelector("[data-search]");
  const levelFilter = document.querySelector("[data-level-filter]");
  const emptyState = document.querySelector("[data-empty-state]");
  function filterExamples() {
    const query = (search?.value || "").trim().toLocaleLowerCase("pt-BR");
    const selectedLevel = levelFilter?.value || "all";
    let visible = 0;
    document.querySelectorAll("[data-example]").forEach(function (card) {
      const matchesText = card.dataset.searchText.includes(query);
      const matchesLevel = selectedLevel === "all" || card.dataset.level === selectedLevel;
      const show = matchesText && matchesLevel;
      card.hidden = !show;
      if (show) visible += 1;
    });
    document.querySelectorAll("[data-level-section]").forEach(function (section) {
      section.hidden = !section.querySelector("[data-example]:not([hidden])");
    });
    if (emptyState) emptyState.hidden = visible !== 0;
  }
  search?.addEventListener("input", filterExamples);
  levelFilter?.addEventListener("change", filterExamples);

  // Rolagem suave e fechamento do menu em telas pequenas.
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      history.pushState(null, "", link.getAttribute("href"));
      const openMenu = document.querySelector(".navbar-collapse.show");
      if (openMenu && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(openMenu).hide();
    });
  });

  // As seções de exemplos são criadas via JavaScript; resolve uma âncora recebida na URL após a renderização.
  if (window.location.hash) {
    requestAnimationFrame(function () {
      document.querySelector(window.location.hash)?.scrollIntoView({ block: "start" });
    });
  }
})();
