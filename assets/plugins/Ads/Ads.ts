export interface Ad {
  imageUrl: string;
  title: string;
  body: string;
  url: string;
}

const ALL_ADS: Ad[] = [
  {
    imageUrl:
      "https://static.platzi.com/media/achievements/badge-profesional-javascript-13538df2-24ce-433f-9aa6-e34eed608e70.png",
    title: "Curso Profesional de JavaScript",
    body:
      "Mejora tus habilidades en Javascript. Conoce Typescript y c�mo puedes ocuparlo para mejorar el control de tus variables.",
    url: "https://platzi.com/cursos/javascript-profesional/",
  },

  {
    imageUrl:
      "https://static.platzi.com/media/achievements/badge-frontend-developer-8a49e681-3e22-408d-b886-2f47dfc9953a.png",
    title: "Curso de Frontend Developer",
    body:
      "Domina las bases de HTML y CSS. Define la arquitectura de tu c�digo y construye un sitio web usando componentes est�ticos. ",
    url: "https://platzi.com/cursos/frontend-developer/",
  },

  {
    imageUrl:
      "https://static.platzi.com/media/achievements/badge-backend-node-8e6aa8a9-f7cd-42b7-bf4a-e1ee916a942b.png",
    title: "Curso de Backend con Node.js",
    body:
      "Crea aplicaciones backend utilizando Node.js, Express y Mongo. Entiende c�mo funciona Javascript en un servidor y escribe aplicaciones con Node.js.",
    url: "https://platzi.com/cursos/backend-nodejs/",
  },

  {
    imageUrl:
      "https://static.platzi.com/media/achievements/badge-prework-da6b0493-9908-40f3-ad53-f5d330b995b8.png",
    title:
      "Comienza tus proyectos de desarrollo para JavaScript configurando un entorno de desarrollo c�modo y adaptado a tus necesidades.",
    body:
      "Mejora tus habilidades en Javascript. Conoce Typescript y c�mo puedes ocuparlo para mejorar el control de tus variables.",
    url: "https://platzi.com/cursos/prework/",
  },

  {
    imageUrl:
      "https://static.platzi.com/media/achievements/badge-autenticacion-passport-6d45426a-2b24-4757-8927-7bfaf54529dd.png",
    title: "Curso de Autenticaci�n con Passport.js",
    body:
      "Genera estrategias de autenticaci�n Sign-In y Sign-Out usando Passport.js. Agrega autenticaci�n con Facebook, Twitter y Google a tus desarrollos.",
    url: "https://platzi.com/cursos/passport/",
  },

  {
    imageUrl:
      "https://static.platzi.com/media/achievements/badge-backend-frontend-02b2ac18-331a-4959-85bf-0bd3c2aa009c.png",
    title: "Curso de Backend for Frontend",
    body:
      "La ingenier�a de software evoluciona d�a a d�a, no te quedes atr�s. Ahora que eres un Desarrollador FullStack JavaScript necesitas evolucionar con el software, construye arquitecturas de software modernas.",
    url: "https://platzi.com/cursos/bff/",
  },

  {
    imageUrl:
      "https://static.platzi.com/media/achievements/badge-react-adec89d0-1c35-4c9c-847e-18c284dc79dd.png",
    title: "Curso Pr�ctico de React JS",
    body:
      "React es una de las librer�as m�s utilizadas hoy para crear aplicaciones web. Aprende a trav�s de la creaci�n de la interfaz de PlatziVideo todo lo que necesitas para crear incre�bles componentes con React.      ",
    url: "https://platzi.com/cursos/react-ejs/",
  },

  {
    imageUrl:
      "https://static.platzi.com/media/achievements/badge-react-redux-2ca3c0a5-fc53-437f-bfba-69e9ddd5a803.png",
    title: "Curso de React Router y Redux",
    body:
      "Aprende de forma pr�ctica a implementar React Router para manejar rutas en tus proyectos de frontend como un profesional.",
    url: "https://platzi.com/cursos/react-router-redux/",
  },
];

class Ads {
  private static instance: Ads;
  private ads: Ad[];
  private constructor() {
      this.initAds();
  }

  public static getInstance() {
    if (!Ads.instance) {
      Ads.instance = new Ads();
    }
    return Ads.instance;
  }

  private initAds() {
    // this.ads = ALL_ADS //no queremos quitar el original, hacemos 1 copia
    this.ads = [...ALL_ADS] // Volcamos el contenido de 1 arreglo a otro
  }
  getAd() {
      if(this.ads.length === 0){
          this.initAds(); //reiniciamos los ads cuando se acaben
      }
    return this.ads.pop();
  }
}

export default Ads;

