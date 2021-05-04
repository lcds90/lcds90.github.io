const express = require("express");
const app = express();
var path = require("path");
const publicDirectory = path.join(__dirname, "public");
var pug = require('pug');

var livereload = require("livereload");
var connectLivereload = require("connect-livereload");
var liveReloadServer = livereload.createServer();
require("css.escape");
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
    id: "cert-qualification",
    src: "img/qualificacao-profissional.png",
    alt:
      "Certificado de Qualificação Profissional de Infraestrutura, emitido pela UNINOVE",
  },
  {
    id: "cert-node",
    src: "img/certificado-node.png",
    alt: "Certificado de Curso Completo de Node, emitido pela Udemy",
  },
  {
    id: "cert-php",
    src: "img/certificado-php.png",
    alt: "Certificado de Curso Completo de PHP, emitido pela Udemy",
  },
  {
    id: "cert-dio-js-es6",
    src: "img/certificado-js-es6.jpg",
    alt: "Certificado de Desenvolvimento com Javascript ES6, emitido pela Digital Innovation One",
  },
  {
    id: "cert-dio-async-await",
    src: "img/certificado-async-await.jpg",
    alt: "Certificado de conhecimentos sobre async e await, emitido pela Digital Innovation One",
  },
  {
    id: "cert-dio-conceitos-ux",
    src: "img/certificado-conceitos-responsivo-ux.jpg",
    alt: "Certificado de conceitos de responsividade e experiência do usuário, emitido pela Digital Innovation One",
  },
  {
    id: "cert-dio-arquitetura",
    src: "img/ceritifcado-arquitetura-de-sistemas.jpg",
    alt: "Certificado de fundamentos de Arquitetura de Sistemas, emitido pela Digital Innovation One",
  },
  {
    id: "cert-dio-gestao-complexidade",
    src: "img/certificado-arquiteutra-complexidade-front.jpg",
    alt: "Certificado de fundamentos de arquitetura de componentes e a gestão da complexidade no front-end, emitido pela Digital Innovation One",
  },
  {
    id: "cert-dio-angular-tecnicas",
    src: "img/certificado-tecnicas-angular-8.jpg",
    alt: "Certificado de técnicas avançadas em Angular 8, emitido pela Digital Innovation One",
  },
  {
    id: "cert-dio-angular-avancado",
    src: "img/certificado-angular-avancado.jpg",
    alt: "Certificado de aplicações avançadas com Angular, emitido pela Digital Innovation One",
  },
  {
    id: "cert-dio-cypress",
    src: "img/certificado-cypress.jpg",
    alt: "Certificado de implementação testes automatizados usando Cypress em uma aplicação Angular, emitido pela Digital Innovation One",
  },
];

var projects = {
  front: [
    {
      id: "netflix",
      title: "Netflix (Réplica)",
      desc: [
        "Projeto desenvolvido de simulação de ponto de entradas e saídas, desenvolvido em modelo POO",
        "Relatórios e Lista de usuários a serem implementados",
      ],
      link: {
        deploy: "http://netflix.lcds.me/",
        git: "https://github.com/lcds90/bootcamp-js-projeto-netflix",
      },
      img: [
        {
          src: "img/projeto-netflix-1.png",
          alt: "Versão de modelo de clone netflix em desktop",
        },
        {
          src: "img/projeto-netflix-2.png",
          alt: "Versão de modelo de clone netflix em mobile",
        },
      ],
    },
    {
      id: "instagram",
      title: "Instagram (Réplica)",
      desc: [
        "Projeto desenvolvido de simulação de ponto de entradas e saídas, desenvolvido em modelo POO",
        "Relatórios e Lista de usuários a serem implementados",
      ],
      link: {
        deploy: "http://instagram.lcds.me/",
        git: "https://github.com/lcds90/bootcamp-js-projeto-instagram",
      },
      img: [
        {
          src: "img/projeto-netflix-1.png",
          alt: "Versão de modelo de clone netflix em desktop",
        },
        {
          src: "img/projeto-netflix-2.png",
          alt: "Versão de modelo de clone netflix em mobile",
        },
      ],
    },
    {
      id: "api-uso-anotacoes",
      title: "Dashboard Anotações",
      desc: [
        "Projeto desenvolvido de game de espaçonaves tendo como objetivo proteger aliado enquanto inimigos tentam atacar.",
        "Tecnologias utilizadas: ",
      ],
      link: {
        deploy: "https://lcds-api-rest-login.herokuapp.com/",
        git: "https://github.com/lcds90/projeto-api-rest-login",
      },
      img: [
        {
          src: "img/projeto-netflix-1.png",
          alt: "Versão de modelo de clone netflix em desktop",
        },
        {
          src: "img/projeto-netflix-2.png",
          alt: "Versão de modelo de clone netflix em mobile",
        },
      ],
    },
    {
      id: "xpressions",
      title: "Xpressions",
      desc: [
        "Projeto desenvolvido de simulação de ponto de entradas e saídas, desenvolvido em modelo POO",
        "Relatórios e Lista de usuários a serem implementados",
      ],
      link: {
        deploy: "http://xpressions.lcds.me/",
        git: "https://github.com/lcds90/projeto-xpressions",
      },
      img: [
        {
          src: "img/projeto-netflix-1.png",
          alt: "Versão de modelo de clone netflix em desktop",
        },
        {
          src: "img/projeto-netflix-2.png",
          alt: "Versão de modelo de clone netflix em mobile",
        },
      ],
    },
    {
      id: "ecommerce",
      title: "ecommerce",
      desc: [
        "Projeto desenvolvido de simulação de ponto de entradas e saídas, desenvolvido em modelo POO",
        "Relatórios e Lista de usuários a serem implementados",
      ],
      link: {
        deploy: "http://ecommerce.lcds.me/",
        git: "https://github.com/lcds90/projeto-ecommerce-jogos",
      },
      img: [
        {
          src: "img/projeto-netflix-1.png",
          alt: "Versão de modelo de clone netflix em desktop",
        },
        {
          src: "img/projeto-netflix-2.png",
          alt: "Versão de modelo de clone netflix em mobile",
        },
      ],
    },
  ],
  games: [
    {
      id: "dino",
      title: "Dinossaurus",
      desc: [
        "Projeto desenvolvido tendo como inspiração o clássico jogo quando Google Chrome está sem internet.",
        "Tecnologias utilizadas: ",
      ],
      link: {
        deploy: "http://game-dino.lcds.me/",
        git: "https://github.com/lcds90/bootcamp-js-projeto-jogo-dinossauro",
      },
      img: [
        {
          src: "img/projeto-netflix-1.png",
          alt: "Versão de modelo de clone netflix em desktop",
        },
        {
          src: "img/projeto-netflix-2.png",
          alt: "Versão de modelo de clone netflix em mobile",
        },
      ],
    },
    {
      id: "genius",
      title: "Genius",
      desc: [
        "Projeto desenvolvido tendo como inspiração o clássico jogo de memória Genius.",
        "Tecnologias utilizadas: ",
      ],
      link: {
        deploy: "http://game-genius.lcds.me/",
        git: "https://github.com/lcds90/bootcamp-js-projeto-jogo-genius",
      },
      img: [
        {
          src: "img/projeto-netflix-1.png",
          alt: "Versão de modelo de clone netflix em desktop",
        },
        {
          src: "img/projeto-netflix-2.png",
          alt: "Versão de modelo de clone netflix em mobile",
        },
      ],
    },
    {
      id: "spaceship",
      title: "Naves",
      desc: [
        "Projeto desenvolvido de game de espaçonaves tendo como objetivo proteger aliado enquanto inimigos tentam atacar.",
        "Tecnologias utilizadas: ",
      ],
      link: {
        deploy: "http://game-spaceship.lcds.me/",
        git: "https://github.com/lcds90/bootcamp-js-projeto-jogo-naves",
      },
      img: [
        {
          src: "img/projeto-netflix-1.png",
          alt: "Versão de modelo de clone netflix em desktop",
        },
        {
          src: "img/projeto-netflix-2.png",
          alt: "Versão de modelo de clone netflix em mobile",
        },
      ],
    },
    {
      id: "void",
      title: "Void",
      desc: [
        "Projeto desenvolvido de game de espaçonaves tendo como objetivo proteger aliado enquanto inimigos tentam atacar.",
        "Tecnologias utilizadas: ",
      ],
      link: {
        deploy: "http://game-void.lcds.me	/",
        git: "https://github.com/lcds90/projeto-jogo-void",
      },
      img: [
        {
          src: "img/projeto-netflix-1.png",
          alt: "Versão de modelo de clone netflix em desktop",
        },
        {
          src: "img/projeto-netflix-2.png",
          alt: "Versão de modelo de clone netflix em mobile",
        },
      ],
    },
  ],
  node: [
    {
      id: "agendamento",
      title: "Sistema de Agendamento",
      desc: [
        "Projeto desenvolvido tendo como inspiração o clássico jogo quando Google Chrome está sem internet.",
        "Tecnologias utilizadas: ",
      ],
      link: {
        deploy: "http://game-dino.lcds.me/",
        git: "https://github.com/lcds90/bootcamp-js-projeto-jogo-dinossauro",
      },
      img: [
        {
          src: "img/projeto-netflix-1.png",
          alt: "Versão de modelo de clone netflix em desktop",
        },
        {
          src: "img/projeto-netflix-2.png",
          alt: "Versão de modelo de clone netflix em mobile",
        },
      ],
    },
    {
      id: "guia",
      title: "Guia de Perguntas",
      desc: [
        "Projeto desenvolvido tendo como inspiração o clássico jogo de memória Genius.",
        "Tecnologias utilizadas: ",
      ],
      link: {
        deploy: "https://lcds-guia-perguntas.herokuapp.com/",
        git: "https://github.com/lcds90/projeto-sistema-agendamento",
      },
      img: [
        {
          src: "img/projeto-netflix-1.png",
          alt: "Versão de modelo de clone netflix em desktop",
        },
        {
          src: "img/projeto-netflix-2.png",
          alt: "Versão de modelo de clone netflix em mobile",
        },
      ],
    },
    {
      id: "api-rest-login",
      title: "(API) Login",
      desc: [
        "Projeto desenvolvido de game de espaçonaves tendo como objetivo proteger aliado enquanto inimigos tentam atacar.",
        "Tecnologias utilizadas: ",
      ],
      link: {
        deploy: "https://lcds-api-rest-login.herokuapp.com/",
        git: "https://github.com/lcds90/projeto-api-rest-login",
      },
      img: [
        {
          src: "img/projeto-netflix-1.png",
          alt: "Versão de modelo de clone netflix em desktop",
        },
        {
          src: "img/projeto-netflix-2.png",
          alt: "Versão de modelo de clone netflix em mobile",
        },
      ],
    },
    {
      id: "api-rest-anotacoes",
      title: "(API) Anotações",
      desc: [
        "Projeto desenvolvido de game de espaçonaves tendo como objetivo proteger aliado enquanto inimigos tentam atacar.",
        "Tecnologias utilizadas: ",
      ],
      link: {
        deploy: "https://lcds-api-rest-login.herokuapp.com/",
        git: "https://github.com/lcds90/projeto-api-rest-login",
      },
      img: [
        {
          src: "img/projeto-netflix-1.png",
          alt: "Versão de modelo de clone netflix em desktop",
        },
        {
          src: "img/projeto-netflix-2.png",
          alt: "Versão de modelo de clone netflix em mobile",
        },
      ],
    },
  ],
  php: [
    {
      id: "simulador",
      title: "Simulador de Ponto",
      desc: [
        "Projeto desenvolvido de simulação de ponto de entradas e saídas, desenvolvido em modelo POO\nRelatórios e Lista de usuários a serem implementados",
        "Teste a aplicação\n<b>Usuário</b>: admin@lcds.com\n<b>Senha</b>: a",
      ],
      link: {
        deploy: "http://innout.lcds.me/",
        git: "https://github.com/lcds90/projeto-php-innout",
      },
      img: [
        {
          src: "img/php-screenshoot1.png",
          alt: "Versão de modelo de clone netflix em desktop",
        },
        {
          src: "img/php-screenshoot2.png",
          alt: "Versão de modelo de clone netflix em mobile",
        },
      ],
    },
    {
      id: "estudos",
      title: "Dashboard de Estudos",
      desc: [
        "Projeto desenvolvido de simulação de ponto de entradas e saídas, desenvolvido em modelo POO\nRelatórios e Lista de usuários a serem implementados",
        "Teste a aplicação\n<b>Usuário</b>: admin@lcds.com\n<b>Senha</b>: a",
      ],
      link: {
        deploy: "http://dashboard-estudos.lcds.me/",
        git: "https://github.com/lcds90/projeto-curso-php",
      },
      img: [
        {
          src: "img/php-screenshoot1.png",
          alt: "Versão de modelo de clone netflix em desktop",
        },
        {
          src: "img/php-screenshoot2.png",
          alt: "Versão de modelo de clone netflix em mobile",
        },
      ],
    },
  ],
};

// ---------------

app.get("/", (req, res) => {
  projects.front.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
  projects.games.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
  projects.node.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
  projects.php.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });

  res.render("index", {
    certificates: certificates,
    projects: projects,
  });
});


app.listen(3000, () => {
  console.log("O servidor está rodando! http://localhost:3000");
});

console.warn = () => {};
