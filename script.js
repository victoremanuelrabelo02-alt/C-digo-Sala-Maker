// Atualiza automaticamente o ano do rodapé.
document.getElementById('year').textContent =
 new Date().getFullYear();


// Animações reaparecem ao rolar a página para baixo e para cima.
const observer = new IntersectionObserver(entries => {
 entries.forEach(entry => {

  if (entry.isIntersecting) {

   entry.target.style.transitionDelay =
    (
     entry.target.classList.contains('project')
      ? (
         Array.from(entry.target.parentElement.children)
          .indexOf(entry.target) % 3
        ) * 70
      : 0
    ) + 'ms';

   entry.target.classList.add('visible');

  } else {

   entry.target.classList.remove('visible');
   entry.target.style.transitionDelay = '0ms';

  }

 });
}, {
 threshold: 0.12
});

document.querySelectorAll('.reveal').forEach(element => {
 observer.observe(element);
});


// Informações dos seis projetos.
const projectData = [

 {
  title: 'Projeto dos Peixes',
  icon: '🐟',

  intro:
   'Conheça os componentes que ajudam a manter o sistema dos peixes funcionando e a água em condições adequadas.',

  items: [

   [
    'Filtros',
    '🧽',
    'Filtros',
    'Ajudam a retirar impurezas e resíduos da água, contribuindo para manter o sistema mais limpo.'
   ],

   [
    'Aquecedor',
    '🌡️',
    'Aquecedor',
    'Utilizado para aquecer a água dos peixes durante os períodos de frio.'
   ],

   [
    'Caixa-d’água dos peixes',
    '💧',
    'Caixa-d’água dos peixes',
    'É o reservatório onde os peixes ficam durante todo o ciclo de vida.'
   ]

  ],

  extra:
   'O sistema destaca a importância do cuidado com os peixes e da qualidade da água.'
 },


 {
  title: 'Horta Inteligente',
  icon: '🌱',

  intro:
   'Uma proposta de horta automatizada que utiliza componentes de controle e sensores para apoiar o cultivo em maior escala.',

  items: [

   [
    'Placa-mãe',
    '🧠',
    'Placa-mãe',
    'Funciona como o cérebro do sistema: gerencia e organiza os dados e os comandos para melhorar o funcionamento.'
   ],

   [
    'Sensores profissionais',
    '📡',
    'Sensores profissionais',
    'Sensores profissionais usados para medir dados importantes e apoiar o controle da horta em maior escala.'
   ],

   [
    'Local da horta',
    '🌿',
    'Local do projeto',
    'Espaço amplo onde vamos desenvolver a horta inteligente.'
   ]

  ],

  extra:
   'A proposta é desenvolver uma horta de maior porte com apoio de tecnologia e automação.'
 },


 {
  title: 'Aquaponia',
  icon: '💧',

  intro:
   'A aquaponia integra a criação de peixes ao cultivo de plantas, aproveitando a circulação da água entre os sistemas.',

  items: [

   [
    'Sistema de aquaponia',
    '🐟',
    'Imagem do sistema de aquaponia',
    'Espaço reservado para uma foto do sistema completo de aquaponia.'
   ],

   [
    'Circulação da água',
    '🔄',
    'Circulação da água',
    'Espaço reservado para mostrar os componentes que movimentam e recirculam a água.'
   ],

   [
    'Peixes e plantas',
    '🌱',
    'Peixes e plantas',
    'Espaço reservado para mostrar a integração entre os peixes e o cultivo de plantas.'
   ]

  ],

  extra:
   'As imagens e informações específicas podem ser completadas quando as fotos do projeto forem enviadas.'
 },


 {
  title: 'Hidroponia',
  icon: '🪴',

  intro:
   'A hidroponia permite cultivar plantas sem solo, usando água com nutrientes e uma estrutura que conduz a solução até as plantas.',

  items: [

   [
    'Canos da hidroponia',
    '🪴',
    'Canos da hidroponia',
    'Conduzem e distribuem a água com nutrientes pelo sistema até as plantas.'
   ],

   [
    'Caixa-d’água da hidroponia',
    '💧',
    'Caixa-d’água da hidroponia',
    'Armazena a água utilizada no sistema, permitindo sua circulação e reaproveitamento.'
   ],

   [
    'Controladora da hidroponia',
    '⚙️',
    'Controladora da hidroponia',
    'Controla o acionamento das bombas, ligando e desligando conforme o funcionamento previsto.'
   ]

  ],

  extra:
   'Os componentes trabalham em conjunto para manter a circulação da água e apoiar o desenvolvimento das plantas.'
 },


 {
  title: 'Filamentador PET',
  icon: '♻️',

  intro:
   'O filamentador PET é um projeto de reaproveitamento de garrafas PET para produzir material que pode ser utilizado em impressoras 3D.',

  items: [

   [
    'Primeiro driver do motor',
    '🔌',
    'Primeiro driver do motor',
    'Gera os ciclos de comando enviados ao segundo driver.'
   ],

   [
    'Segundo driver do motor',
    '⚙️',
    'Segundo driver do motor',
    'Recebe e decodifica os ciclos enviados pelo primeiro driver, permitindo controlar o movimento do motor.'
   ],

   [
    'Tracionador em funcionamento',
    '↔️',
    'Tracionador em funcionamento',
    'O tracionador puxa e movimenta o material durante o funcionamento do equipamento.'
   ],

   [
    'Bico',
    '♨️',
    'Bico do filamentador',
    'Espaço reservado para mostrar o bico utilizado no processamento do material.'
   ],

   [
    'Fazedor de fita',
    '🧵',
    'Imagem do fazedor de fita',
    'Espaço demonstrativo reservado para a imagem do fazedor de fita.'
   ]

  ],

  extra:
   'As imagens reais dos componentes podem ser inseridas nos espaços reservados quando forem enviadas.'
 },


 {
  title: 'Protótipo da Horta Inteligente',
  icon: '🤖',

  intro:
   'O protótipo foi montado para testar, em escala experimental, componentes de automação para irrigação inteligente.',

  items: [

   [
    'ESP32',
    '💻',
    'ESP32',
    'Placa de desenvolvimento que pode ler informações dos sensores e executar comandos de controle do protótipo.'
   ],

   [
    'Sensores',
    '📡',
    'Sensores',
    'Medem dados do ambiente, como a umidade do solo. Com base nessas informações, o sistema pode tomar decisões para melhorar seu funcionamento.'
   ],

   [
    'Cubo acrílico',
    '🔷',
    'Cubo acrílico',
    'Estrutura que abriga ou organiza os componentes do protótipo, ajudando a protegê-los e mantê-los organizados.'
   ]

  ],

  extra:
   'O protótipo serve como modelo de demonstração e teste antes da implantação da horta inteligente em maior escala.'
 }

];


// Seleciona os cartões e o espaço dos detalhes.
const cards = [
 ...document.querySelectorAll('#projetos .project')
];

const details = document.getElementById('projectDetails');


// Abre os detalhes do projeto selecionado.
function openProject(index) {

 const project = projectData[index];

 if (!project) {
  return;
 }


 // Cria os cartões dos componentes.
 const items = project.items.map(item => {

  return `
   <article class="component-card">

    <div class="component-image">

     <img alt="${item[2]}">

     <div class="component-placeholder">
      <span>${item[1]}</span>
      <strong>
       ESPAÇO PARA IMAGEM: ${item[0].toUpperCase()}
      </strong>
     </div>

    </div>

    <div class="component-copy">
     <h3>${item[0]}</h3>
     <p>${item[3]}</p>
    </div>

   </article>
  `;

 }).join('');


 // Monta a área completa de detalhes.
 details.innerHTML = `

  <div class="detail-top">

   <div>
    <div class="kicker">// DETALHES DO PROJETO</div>
    <h2>${project.icon} ${project.title}</h2>
   </div>

   <button class="detail-close" type="button">
    Fechar ✕
   </button>

  </div>

  <p class="detail-intro">
   ${project.intro}
  </p>

  <div class="component-grid">
   ${items}
  </div>

  <div class="scroll-hint">
   ↓ Para mais informações, role a página para baixo ↓
  </div>

  <div class="detail-extra">
   <h3>Sobre este projeto</h3>
   <p>${project.extra}</p>
  </div>

 `;


 // Mostra a área de detalhes.
 details.classList.add('active');


 // Botão para fechar os detalhes.
 details.querySelector('.detail-close')
  .addEventListener('click', () => {

   details.classList.remove('active');
   details.innerHTML = '';

  });


 // Anima os cartões dos componentes.
 const componentObserver = new IntersectionObserver(entries => {

  entries.forEach(entry => {

   if (entry.isIntersecting) {

    entry.target.classList.add('visible');

   } else {

    entry.target.classList.remove('visible');

   }

  });

 }, {
  threshold: 0.12
 });


 details.querySelectorAll('.component-card').forEach(element => {
  componentObserver.observe(element);
 });


 // Desloca a página até os detalhes.
 details.scrollIntoView({
  behavior: 'smooth',
  block: 'start'
 });

}


// Permite abrir os projetos com clique, Enter ou espaço.
cards.forEach((card, index) => {

 card.addEventListener('click', () => {
  openProject(index);
 });

 card.addEventListener('keydown', event => {

  if (event.key === 'Enter' || event.key === ' ') {

   event.preventDefault();
   openProject(index);

  }

 });

});
