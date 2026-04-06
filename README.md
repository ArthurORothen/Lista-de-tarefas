📝 Lista de tarefas
Um gerenciador de tarefas dinâmico que permite ao usuário organizar suas atividades diárias com uma interface limpa e intuitiva. O projeto foca em manipulação do DOM e experiência do usuário (UX).

🚀 Funcionalidades:

Adição Dinâmica: Criação de tarefas em tempo real com validação de campo vazio ou checkbox desmarcado.

Feedback Visual: Uso de line-through automático via CSS ao marcar uma tarefa como concluída.

Remoção Seletiva: Filtro para remover apenas as tarefas marcadas, utilizando o método forEach.

Interface Inteligente: A lista de tarefas é ocultada automaticamente quando está vazia, mantendo o layout limpo.

🧠 Lógica de Desenvolvimento:

Neste projeto, apliquei conceitos fundamentais de engenharia de software:

Manipulação de Elementos: Uso de document.createElement e appendChild para gerar estruturas complexas (li + input + span) sem precisar engessar o HTML.

Estados de Interface: Implementação da classe .escondido para controlar a visibilidade da lista baseada no comprimento do elemento pai (children.length).

Estilização de Estados: Utilização do seletor CSS .checkbox:checked + span para aplicar estilos baseados no estado de um input, demonstrando conhecimento em seletores adjacentes.

🛠️ Tecnologias:

JavaScript: Lógica de eventos e manipulação de arrays.

HTML: Estrutura acessível com uso de labels e main.

CSS: Layout moderno com Flexbox e tipografia personalizada via Google Fonts.
