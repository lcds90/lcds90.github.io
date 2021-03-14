const express = require("express");
const app = express();
var path = require("path");
const publicDirectory = path.join(__dirname, "public");
var livereload = require("livereload");
var connectLivereload = require("connect-livereload");
var liveReloadServer = livereload.createServer();
require('css.escape');
liveReloadServer.watch(publicDirectory);
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
app.use(connectLivereload());

// View engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Static
app.use(express.static("assets"));

// CONTENT

var certificates = [
  {
    id: 'cert-qualification',
    src: 'img/qualificacao-profissional.png',
    alt: 'Certificado de Qualificação Profissional de Infraestrutura, emitido pela UNINOVE',
  },
  {
    id: 'cert-node',
    src: 'img/certificado-node.png',
    alt: 'Certificado de Curso Completo de Node, emitido pela Udemy',
  },
  {
    id: 'cert-php',
    src: 'img/certificado-php.png',
    alt: 'Certificado de Curso Completo de PHP, emitido pela Udemy',
  }
]

var projects = {
  front: [
    {
      id: 'netflix',
      title: 'Netflix (Réplica)',
      desc : [
        'Projeto desenvolvido de simulação de ponto de entradas e saídas, desenvolvido em modelo POO',
        'Relatórios e Lista de usuários a serem implementados'
      ],
      link: {
        deploy: 'http://netflix.lcds.me/',
        git: 'https://github.com/lcds90/bootcamp-js-projeto-netflix'
      },
      img: [
        {src: 'img/projeto-netflix-1.png',
        alt: 'Versão de modelo de clone netflix em desktop'},
        {src: 'img/projeto-netflix-2.png',
        alt: 'Versão de modelo de clone netflix em mobile'},
      ],
    },
    {
      id: 'instagram',
      title: 'Instagram (Réplica)',
      desc : [
        'Projeto desenvolvido de simulação de ponto de entradas e saídas, desenvolvido em modelo POO',
        'Relatórios e Lista de usuários a serem implementados'
      ],
      link: {
        deploy: 'http://instagram.lcds.me/',
        git: 'https://github.com/lcds90/bootcamp-js-projeto-instagram'
      },
      img: [
        {src: 'img/projeto-netflix-1.png',
        alt: 'Versão de modelo de clone netflix em desktop'},
        {src: 'img/projeto-netflix-2.png',
        alt: 'Versão de modelo de clone netflix em mobile'},
      ],
    },
  ],
  games: [
    {
      id: 'dino',
      title: 'Dinossaurus',
      desc : [
        'Projeto desenvolvido tendo como inspiração o clássico jogo quando Google Chrome está sem internet.',
        'Tecnologias utilizadas: '
      ],
      link: {
        deploy: 'http://game-dino.lcds.me/',
        git: 'https://github.com/lcds90/bootcamp-js-projeto-jogo-dinossauro'
      },
      img: [
        {src: 'img/projeto-netflix-1.png',
        alt: 'Versão de modelo de clone netflix em desktop'},
        {src: 'img/projeto-netflix-2.png',
        alt: 'Versão de modelo de clone netflix em mobile'},
      ],
    },
    {
      id: 'genius',
      title: 'Genius',
      desc : [
        'Projeto desenvolvido tendo como inspiração o clássico jogo de memória Genius.',
        'Tecnologias utilizadas: '
      ],
      link: {
        deploy: 'http://game-genius.lcds.me/',
        git: 'https://github.com/lcds90/bootcamp-js-projeto-jogo-genius'
      },
      img: [
        {src: 'img/projeto-netflix-1.png',
        alt: 'Versão de modelo de clone netflix em desktop'},
        {src: 'img/projeto-netflix-2.png',
        alt: 'Versão de modelo de clone netflix em mobile'},
      ],
    },
    {
      id: 'spaceship',
      title: 'Naves',
      desc : [
        'Projeto desenvolvido de game de espaçonaves tendo como objetivo proteger aliado enquanto inimigos tentam atacar.',
        'Tecnologias utilizadas: '
      ],
      link: {
        deploy: 'http://game-spaceship.lcds.me/',
        git: 'https://github.com/lcds90/bootcamp-js-projeto-jogo-naves'
      },
      img: [
        {src: 'img/projeto-netflix-1.png',
        alt: 'Versão de modelo de clone netflix em desktop'},
        {src: 'img/projeto-netflix-2.png',
        alt: 'Versão de modelo de clone netflix em mobile'},
      ],
    }
  ],
  php: [
    {
      id: 'simulador',
      title: 'Simulador de Ponto',
      desc : [
        'Projeto desenvolvido de simulação de ponto de entradas e saídas, desenvolvido em modelo POO\nRelatórios e Lista de usuários a serem implementados',
        'Teste a aplicação\n<b>Usuário</b>: admin@lcds.com\n<b>Senha</b>: a'
      ],
      link: {
        deploy: 'http://innout.lcds.me/',
        git: 'https://github.com/lcds90/projeto-php-innout'
      },
      img: [
        {src: 'img/php-screenshoot1.png',
        alt: 'Versão de modelo de clone netflix em desktop'},
        {src: 'img/php-screenshoot2.png',
        alt: 'Versão de modelo de clone netflix em mobile'},
      ],
    }
  ]
}

projects.front.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
projects.games.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
projects.php.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))


// ---------------

app.get("/", (req, res) => {
  res.render("index", {
    certificates, projects
  });
});

app.listen(3000, () => {
  console.log("O servidor está rodando! http://localhost:3000");
});
