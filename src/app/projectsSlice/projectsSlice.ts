import { createSlice,
    Draft,
    PayloadAction
} from "@reduxjs/toolkit"

export type ProjectType = {
    name: string,
    id:number,
    favorite?: boolean,
    technos: string[]
    descriptions: { 
        EN: string, 
        FR: string 
    },
    skills: {
        EN: {skill: string, desc: string}[],
        FR: {skill: string, desc: string}[]
    },
    links: {
        github: string,
        web?: string
    },
    formation?: "OpenClassrooms" | "Le Wagon"
}

export type ProjectsType = {
    projects: ProjectType[]
}

const initialState: ProjectsType= {
    projects: [
        {
            name: "Art App",
            id: 15,
            favorite: true,
            technos: [
                "React",
                "Next",
                "TypeScript",
                "Tailwind",
                "Shadcn/ui",
                "Prisma",
            ],
            descriptions: {
                EN: "Development of an online painting sales application with a modern and responsive design.",
                FR: "Développement d'une application de vente en ligne de peintures avec un design moderne et responsive."
            },
            skills: {
                EN: [
                    {
                        skill: "Next.js & TypeScript Development",
                        desc: "Developed a high-performance and scalable e-commerce platform using Next.js and TypeScript."
                    },
                    {
                        skill: "Database Management",
                        desc: "Utilized Prisma for efficient data management and integration with a relational database."
                    },
                    {
                        skill: "Performance Optimization",
                        desc: "Optimized rendering and performance using React Server Components and caching strategies."
                    },
                    {
                        skill: "Responsive UI Design",
                        desc: "Designed and implemented a fully responsive user interface using Tailwind CSS and Shadcn/ui to ensure seamless experience across devices."
                    },
                ],
                FR: [
                    {
                        skill: "Développement avec Next.js et TypeScript",
                        desc: "Développement d'une plateforme e-commerce performante et évolutive avec Next.js et TypeScript."
                    },
                    {
                        skill: "Gestion de base de données",
                        desc: "Utilisation de Prisma pour une gestion efficace des données et l'intégration avec une base de données relationnelle."
                    },
                    {
                        skill: "Optimisation des performances",
                        desc: "Optimisation du rendu et des performances via les React Server Components et des stratégies de mise en cache."
                    },
                    {
                        skill: "Conception d'interface responsive",
                        desc: "Conception et implémentation d'une interface utilisateur entièrement responsive avec Tailwind CSS et Shadcn/ui pour une expérience fluide sur tous les appareils."
                    },
                    
                ]
            },
            links: {
                github: "https://github.com/madelineGrammatico/Art-app"
            },
        },
        {
            name: "Pulse",
            id: 14,
            favorite: true,
            technos: [
                "React",
                "TypeScript",
                "Node",
                "WebSocket",
                "MaterialUI",
            ],
            descriptions: {
                EN: "A dance school class booking application with real-time updates and a modern, user-friendly interface.",
                FR: "Application de réservation de cours pour une école de danse avec mises à jour en temps réel et une interface moderne et intuitive."
            },
            skills: {
                EN: [
                    {
                        skill: "Real-time Reservation Management",
                        desc: "Integrated WebSocket for dynamic, real-time class booking updates to ensure seamless user experience."
                    },
                    
                    {
                        skill: "Fullstack Development",
                        desc: "Built a robust backend with Node.js to handle bookings and manage data efficiently."
                    },
                    {
                        skill: "State Management",
                        desc: "Implemented optimized state management using React and TypeScript for a smooth and performant app."
                    },
                    {
                        skill: "Modern UI/UX Design",
                        desc: "Designed and developed a sleek, responsive interface using MaterialUI for optimal usability."
                    },
                ],
                FR: [
                    {
                        skill: "Gestion dynamique des réservations",
                        desc: "Intégration de WebSocket pour permettre des mises à jour en temps réel et une expérience fluide pour les utilisateurs."
                    },
                    
                    {
                        skill: "Développement Fullstack",
                        desc: "Mise en place d'un backend performant avec Node.js pour la gestion des réservations et des données."
                    },
                    {
                        skill: "Gestion de l'état",
                        desc: "Optimisation de la gestion de l'état avec React et TypeScript pour assurer une application fluide et réactive."
                    },
                    {
                        skill: "Conception d'interface moderne",
                        desc: "Développement d'une interface utilisateur ergonomique et responsive avec MaterialUI."
                    },
                ]
            },
            links: {
                github: "https://github.com/madelineGrammatico"
            },
        },
        {
            name: "Burger Typed",
            id: 13,
            technos: [
                "React",
                "TypeScript",
                "Vite",
                "Vercel",
                "FireBase",
                "Styled Components",
                "React-transition-group",
            ],
            descriptions: {
                EN: "A burger ordering application initially built in React, migrated to TypeScript for better type safety and maintainability.",
                FR: "Application de commande de burgers initialement développée en React, migrée vers TypeScript pour une meilleure sécurité et maintenabilité du code."
            },
            skills: {
                EN: [
                    {
                        skill: "TypeScript Migration",
                        desc: "Refactored an existing React project to TypeScript, improving type safety and reducing runtime errors."
                    },
                    {
                        skill: "Use of Import Aliases",
                        desc: "Implemented import aliases to streamline the codebase, improving readability and maintainability by avoiding long relative paths."
                    },
                    {
                        skill: "Generics and Utility Types",
                        desc: "Utilized TypeScript generics and utility types to enhance code reusability, type safety, and reduce redundancy across the application."
                    }
                ],
                FR: [
                    {
                        skill: "Migration vers TypeScript",
                        desc: "Refonte d’un projet React en TypeScript pour améliorer la sécurité des types et réduire les erreurs à l'exécution."
                    },
                    {
                        skill: "Utilisation des Import Aliases",
                        desc: "Mise en place des alias d'importation pour simplifier la base de code, améliorer la lisibilité et éviter les chemins relatifs longs."
                    },
                    {
                        skill: "Génériques et Types Utilitaires",
                        desc: "Utilisation des génériques et des types utilitaires de TypeScript pour améliorer la réutilisabilité du code, la sécurité des types et réduire la redondance."
                    }
                ]
            },
            links: {
                github: "https://github.com/madelineGrammatico/BurgerTyped"
            },
        },
        {
            name: "Crazee Burger",
            id: 12,
            favorite: true,
            technos: [
                "React",
                "TypeScript",
                "Vite",
                "Vercel",
                "FireBase",
                "Styled Components",
                "React-transition-group",
            ],
            descriptions: {
                EN: "A burger ordering application built with React and TypeScript, featuring an intuitive design, real-time data management, and an administrator mode.",
                FR: "Application de commande de burgers développée avec React et TypeScript, offrant un design intuitif, une gestion des données en temps réel et un mode administrateur."
            },
            skills: {
                EN: [
                    {
                        skill: "Global State Management",
                        desc: "Used advanced React hooks to manage the global state efficiently, ensuring smooth user interactions."
                    },
                    {
                        skill: "Design System Implementation",
                        desc: "Created a consistent and reusable design system using Styled-Components."
                    },
                    {
                        skill: "Enhanced User Experience",
                        desc: "Improved animations and transitions using React-Transition-Group for a more dynamic interface."
                    },
                    {
                        skill: "Administrator Mode",
                        desc: "Developed an admin panel for managing orders and menu updates."
                    },
                    {
                        skill: "Firebase Integration",
                        desc: "Connected Firebase for real-time order tracking, authentication, and database management."
                    },
                    {
                        skill: "Performance Optimization",
                        desc: "Optimized the application with Vite for fast development and deployment on Vercel."
                    }
                ],
                FR: [
                    {
                        skill: "Gestion de l'état global",
                        desc: "Utilisation avancée des hooks React pour gérer efficacement l’état global et assurer une fluidité des interactions utilisateur."
                    },
                    {
                        skill: "Implémentation d'un design system",
                        desc: "Création d’un système de design cohérent et réutilisable avec Styled-Components."
                    },
                    {
                        skill: "Expérience utilisateur améliorée",
                        desc: "Amélioration des animations et des transitions avec React-Transition-Group pour une interface plus dynamique."
                    },
                    {
                        skill: "Mode Administrateur",
                        desc: "Développement d’un panneau d’administration pour la gestion des commandes et la mise à jour du menu."
                    },
                    {
                        skill: "Intégration Firebase",
                        desc: "Connexion à Firebase pour le suivi des commandes en temps réel, l’authentification et la gestion de la base de données."
                    },
                    {
                        skill: "Optimisation des performances",
                        desc: "Optimisation de l’application avec Vite pour un développement rapide et un déploiement efficace sur Vercel."
                    }
                ]
            },
            links: {
                github: "https://github.com/madelineGrammatico/crazee-burger",
                web: "crazee-burger-madeline.vercel.app/"
            },
        },
        {
            name: "CacaoStreet",
            id: 11,
            favorite: true,
            technos: ["Node", "Express", "Sequelize", "MySQL", "JWT", "Bcrypt"],
            descriptions: {
                EN: "Backend API developed for locating bars or restaurants offering chocolate-based beverages.",
                FR: "API backend pour la localisation de bars ou de restaurants proposant des boissons à base de chocolat."
            },
            skills: {
                EN: [
                    { skill: "Develop a search algorithm in JavaScript", desc: "Implemented a search algorithm to efficiently locate places serving chocolate-based drinks using JavaScript." },
                    { skill: "Implement a state manager in a React application", desc: "Created a state management system to handle user interactions with real-time data in the frontend application." }
                ],
                FR: [
                    { skill: "Authentification sécurisée : JWT et bcrypt", desc: "Mise en place d'un système d'authentification sécurisé avec JWT et bcrypt pour gérer les utilisateurs." },
                    { skill: "Gestion des rôles utilisateurs avec permissions adaptées", desc: "Création d'un système de gestion des rôles permettant d’attribuer des permissions spécifiques aux utilisateurs." },
                    { skill: "Middleware personnalisé pour la gestion centralisée des erreurs", desc: "Développement d’un middleware pour capturer et gérer les erreurs à travers l’application de manière centralisée." }
                ]
            },
            links: { github: "https://github.com/madelineGrammatico/CacaoStreetAPI" }
        },
        {
            name: "Portfolio",
            id: 10,
            technos: ["React", "TypeScript", "Redux Toolkit", "React Router", "Styled Components", "Vite"],
            descriptions: {
                EN: "Front-End developer portfolio with technology search functionality.",
                FR: "Portfolio de développeuse Front-End avec une fonctionnalité de recherche par technologies."
            },
            skills: {
                EN: [
                    { skill: "Develop a search algorithm in JavaScript", desc: "Created a robust search algorithm that allows users to search for projects based on technology stacks in JavaScript." },
                    { skill: "Implement a state manager in a React application", desc: "Used Redux Toolkit to handle state management, providing a smooth user experience with efficient state updates." }
                ],
                FR: [
                    { skill: "Développer un algorithme de recherche en JavaScript", desc: "Création d'un algorithme de recherche performant pour filtrer les projets par technologies." },
                    { skill: "Implémenter un gestionnaire d’état dans une application React", desc: "Utilisation de Redux Toolkit pour la gestion de l'état, assurant des mises à jour rapides et une expérience utilisateur fluide." }
                ]
            },
            links: { 
                github: "https://github.com/madelineGrammatico/Porfolio",
                web: "https://madelinegrammatico.github.io/portfolio"
             }
        },
        {
            name: "RHnet",
            id: 9,
            technos: ["React", "TypeScript", "Redux Toolkit", "React Router", "React Hook Form", "MaterialUI", "CSS Modules", "Vite"],
            descriptions: {
                EN: "Interface for HR allowing you to add and display employees.",
                FR: "Interface à destination des RH permettant d’ajouter et d’afficher des employés."
            },
            skills: {
                EN: [
                    { skill: "Recast of a jQuery application in React", desc: "Rewritten a legacy jQuery application using React to improve performance and maintainability." },
                    { skill: "Implement a state manager in a React application", desc: "Used Redux Toolkit to handle global state in the React app, enabling efficient data flow and UI updates." }
                ],
                FR: [
                    { skill: "Refonte d’une application jQuery en React", desc: "Reconstruction d'une application ancienne en jQuery vers React pour améliorer la performance et la maintenabilité." },
                    { skill: "Implémenter un gestionnaire d’état dans une application React", desc: "Implémentation de Redux Toolkit pour gérer l’état global de l’application et améliorer la gestion des données." }
                ]
            },
            links: { github: "https://github.com/madelineGrammatico/P14_RHnet_React" },
            formation: "OpenClassrooms"
        },
        {
            name: "mg-p14-modal",
            id: 8,
            technos: ["React", "React Router", "Vite", "StoryBook"],
            descriptions: {
                EN: "Library making it easier to add modal to an application.",
                FR: "Librairie facilitant l’ajout de modale dans une application."
            },
            skills: {
                EN: [
                    { skill: "Implement a Library", desc: "Developed a custom modal library to simplify the integration of modals into React applications." },
                    { skill: "Uploaded to NPM", desc: "Successfully published the library to NPM, making it available for installation by other developers." },
                    { skill: "Produce technical documentation", desc: "Created clear and concise technical documentation to guide developers on how to use the modal library effectively." }
                ],
                FR: [
                    { skill: "Implémenter une Librairie", desc: "Développement d'une librairie de modale personnalisée facilitant son intégration dans des applications React." },
                    { skill: "Mise en ligne sur NPM", desc: "Publication réussie de la librairie sur NPM pour la rendre accessible à d'autres développeurs." },
                    { skill: "Produire la documentation technique", desc: "Création d'une documentation technique claire pour guider les développeurs dans l'utilisation de la librairie de modale." }
                ]
            },
            links: { 
                github: "https://github.com/madelineGrammatico/P14_RHnet_React", 
                web: "https://www.npmjs.com/package/mg-p14-modal" 
            },
            formation: "OpenClassrooms"
        },
        {
            name: "ArgentBank",
            id: 7,
            technos: ["React", "TypeScript", "Redux Toolkit", "React Router", "Vite", "CSS Modules"],
            descriptions: {
                EN: "Secure banking interface allowing access to accounts and modification of identifiers",
                FR: "Interface bancaire sécurisée permettant l’accès à ses comptes et la modification de ses identifiants"
            },
            skills: {
                EN: [
                    { skill: "Interact with a Back-End API", desc: "Created secure and efficient API requests to interact with the backend for account information and modification." },
                    { skill: "User authentication", desc: "Implemented secure user authentication with features like login, registration, and session management." },
                    { skill: "Implement a state manager in a React application", desc: "Utilized Redux Toolkit to manage the application's state, ensuring data consistency and easy updates across the app." }
                ],
                FR: [
                    { skill: "Intéragir avec une API Back-End", desc: "Création de requêtes API sécurisées et efficaces pour interagir avec le back-end concernant les informations de compte et les modifications." },
                    { skill: "Authentification d’utilisateur", desc: "Mise en place de l’authentification sécurisée des utilisateurs avec des fonctionnalités telles que la connexion, l’inscription et la gestion des sessions." },
                    { skill: "Implémenter un gestionnaire d’état dans une application React", desc: "Utilisation de Redux Toolkit pour gérer l’état de l’application et assurer la cohérence des données et des mises à jour dans toute l’application." }
                ]
            },
            links: { github: "https://github.com/madelineGrammatico/P13-argentBank" },
            formation: "OpenClassrooms"
        },
        {
            name: "SportSee",
            id: 6,
            technos: ["React", "TypeScript", "React Router", "Vite", "CSS Modules", "Recharts", "TypeDoc"],
            descriptions: {
                EN: "A profile page showing all the user's information through graphics.",
                FR: "Une page de profil montrant toutes les informations de l’utilisateur par le biais de graphiques."
            },
            skills: {
                EN: [
                    { skill: "Ensuring the quality of an application's data", desc: "Ensured the integrity and consistency of user data by handling API responses effectively and verifying data accuracy." },
                    { skill: "Develop advanced graphics using JavaScript libraries", desc: "Used Recharts to display data visualizations, including interactive charts and graphs, to improve user experience." },
                    { skill: "Interact with a web service", desc: "Integrated with web services to fetch user data and display it in real-time, enabling dynamic updates of information." }
                ],
                FR: [
                    { skill: "Assurer la qualité des données d'une application", desc: "Assuré l’intégrité et la cohérence des données utilisateur en traitant efficacement les réponses API et en vérifiant leur exactitude." },
                    { skill: "Développer des éléments graphiques avancés à l'aide de bibliothèques JavaScript", desc: "Utilisation de Recharts pour développer des graphiques interactifs et des visualisations de données pour améliorer l’expérience utilisateur." },
                    { skill: "Interagir avec un service Web", desc: "Intégration avec des services Web pour récupérer les données des utilisateurs et les afficher en temps réel." }
                ]
            },
            links: { github: "https://github.com/madelineGrammatico/SportSee" },
            formation: "OpenClassrooms"
        },
        {
            name: "Kasa",
            id: 5,
            technos: ["React", "React Router", "CRA", "SASS"],
            descriptions: {
                EN: "An interface for apartment rental between individuals.",
                FR: "Une interface de location d'appartement entre particuliers."
            },
            skills: {
                EN: [
                    { skill: "Create components with React", desc: "Built reusable and modular React components that handle apartment listings, details, and user interactions." },
                    { skill: "Develop routes for a web application with React Router", desc: "Implemented dynamic routing to handle navigation between different pages, such as apartment listings, details, and bookings." },
                    { skill: "Initialize a web application with a framework", desc: "Used Create React App (CRA) to initialize the project, ensuring a solid foundation for future development." }
                ],
                FR: [
                    { skill: "Créer des composants avec React", desc: "Création de composants réutilisables et modulaires en React pour gérer les annonces d’appartements, les détails et les interactions avec les utilisateurs." },
                    { skill: "Développer les routes d'une application web avec React Router", desc: "Mise en place du routage dynamique pour gérer la navigation entre différentes pages comme les annonces, les détails et les réservations." },
                    { skill: "Initialiser une application web avec un framework", desc: "Utilisation de Create React App (CRA) pour initialiser le projet et poser les bases solides pour le développement futur." }
                ]
            },
            links: { github: "https://github.com/madelineGrammatico/kasa" },
            formation: "OpenClassrooms"
        },
        {
            name: "Billed",
            id: 4,
            technos: ["HTML", "CSS", "SASS", "JavaScript", "Jest"],
            descriptions: {
                EN: "Debug and test an HR SaaS",
                FR: "Débuggez et testez un SaaS RH"
            },
            skills: {
                EN: [
                    { skill: "Debug a web application with the Chrome Debugger", desc: "Used Chrome's built-in debugger tools to inspect and debug the web application, identifying issues in code execution." },
                    { skill: "Writing unit tests with JavaScript", desc: "Developed unit tests to ensure the individual functionalities of the application work as expected." },
                    { skill: "Writing integration tests with JavaScript", desc: "Created integration tests to verify that different parts of the application work together properly." },
                    { skill: "Write a manual end-to-end test plan", desc: "Designed a comprehensive manual test plan to check the application's overall functionality from start to finish." }
                ],
                FR: [
                    { skill: "Débugger une application web avec le Chrome Debugger", desc: "Utilisation des outils de débogage intégrés de Chrome pour inspecter et déboguer l’application web, en identifiant les problèmes dans l’exécution du code." },
                    { skill: "Ecrire des tests unitaires avec JavaScript", desc: "Développement de tests unitaires pour s'assurer que les fonctionnalités individuelles de l’application fonctionnent comme prévu." },
                    { skill: "Ecrire des tests d'intégration avec JavaScript", desc: "Création de tests d’intégration pour vérifier que les différentes parties de l’application fonctionnent correctement ensemble." },
                    { skill: "Rédiger un plan de test end-to-end manuel", desc: "Conception d'un plan de test manuel complet pour vérifier la fonctionnalité globale de l'application de bout en bout." }
                ]
            },
            links: {
                github: "https://github.com/madelineGrammatico/Billed-app-FR-Front"
            },
            formation: "OpenClassrooms"
        },
        {
            name: "Les Petits Plats",
            id: 3,
            technos: ["HTML", "CSS", "SASS", "JavaScript"],
            descriptions: {
                EN: "A cooking recipe site with functionality to search by ingredients, utensils or kitchen appliances as well as user input.",
                FR: "Un site de recettes de cuisine avec une fonctionnalité de recherche par ingrédients, ustensils ou par appareils de cuisine ainsi que par la saisie de l'utilisateur."
            },
            skills: {
                EN: [
                    { skill: "Develop a search algorithm in JavaScript", desc: "Implemented a search algorithm that allows users to find recipes based on various criteria like ingredients and utensils." },
                    { skill: "Analyze a computer problem", desc: "Analyzed complex user needs and translated them into workable technical solutions." },
                    { skill: "Develop an algorithm to solve a problem", desc: "Developed efficient algorithms to handle search functionality and filter data based on user input." },
                    { skill: "Manage data within a JSON file", desc: "Managed and structured the recipe data using JSON files to ensure fast retrieval and easy maintenance." },
                    { skill: "Implement your code with 'factories Patterns'", desc: "Applied the factory design pattern to streamline the creation of recipe objects and maintain code modularity." }
                ],
                FR: [
                    { skill: "Développer un algorithme de recherche en JavaScript", desc: "Implémentation d’un algorithme de recherche permettant aux utilisateurs de trouver des recettes en fonction de différents critères comme les ingrédients et ustensiles." },
                    { skill: "Analyser un problème informatique", desc: "Analyse des besoins utilisateurs complexes et traduction en solutions techniques réalisables." },
                    { skill: "Développer un algorithme pour résoudre un problème", desc: "Développement d'algorithmes efficaces pour gérer la fonctionnalité de recherche et filtrer les données en fonction des saisies utilisateurs." },
                    { skill: "Gérer de la donnée au sein d'un fichier JSON", desc: "Gestion et structuration des données de recettes à l'aide de fichiers JSON pour assurer une récupération rapide et une maintenance aisée." },
                    { skill: "Implémenter son code avec des 'factories Patterns'", desc: "Application du design pattern Factory pour simplifier la création d’objets recette et maintenir la modularité du code." }
                ]
            },
            links: {
                github: "https://github.com/madelineGrammatico/Les_Petits_Plats"
            },
            formation: "OpenClassrooms"
        },
        {
            name: "FishEyes",
            id: 2,
            technos: ["HTML", "CSS", "SASS", "JavaScript"],
            descriptions: {
                EN: "FishEye is a screen reader-friendly website that allows independent photographers to showcase their work.",
                FR: "FishEye est un site web utilisable par les lecteurs d'écran, qui permet aux photographes indépendants de présenter leurs travaux."
            },
            skills: {
                EN: [
                    { skill: "Ensuring the accessibility of a website", desc: "Ensured the accessibility of the website by following WCAG guidelines and making it compatible with screen readers." },
                    { skill: "Write maintainable JavaScript code", desc: "Wrote clean and maintainable JavaScript code that was easy to debug and modify as needed." },
                    { skill: "Manage site events with JavaScript", desc: "Used JavaScript to manage and handle different site events like user interaction, navigation, and data loading." },
                    { skill: "Develop a modular web application with design patterns", desc: "Applied design patterns to structure the codebase in a modular and maintainable way." }
                ],
                FR: [
                    { skill: "Assurer l'accessibilité d'un site web", desc: "Assuré l'accessibilité du site en suivant les directives WCAG et en le rendant compatible avec les lecteurs d'écran." },
                    { skill: "Ecrire du code JavaScript maintenable", desc: "Rédaction d’un code JavaScript propre et maintenable, facile à déboguer et à modifier en cas de besoin." },
                    { skill: "Gérer les évènements d'un site avec JavaScript", desc: "Utilisation de JavaScript pour gérer et traiter différents événements du site tels que les interactions utilisateurs, la navigation et le chargement des données." },
                    { skill: "Développer une application web modulaire avec des design patterns", desc: "Application de design patterns pour structurer la base de code de manière modulaire et maintenable." }
                ]
            },
            links: {
                github: "https://github.com/madelineGrammatico/Front-End-Fisheye"
            },
            formation: "OpenClassrooms"
        },
        {
            name: "GameOn",
            id: 1,
            technos: ["HTML", "CSS", "SASS", "JavaScript"],
            descriptions: {
                EN: "A home page for registering for e-sport competitions",
                FR: "Une page d'accueil pour l'inscription à des concours d'e-sport"
            },
            skills: {
                EN: [
                    { skill: "Create a landing page with Javascript", desc: "Created a responsive and interactive landing page for users to register for esports competitions." },
                    { skill: "Manage a form with HTML and Javascript", desc: "Handled form validation and submission to ensure proper registration of users for events." }
                ],
                FR: [
                    { skill: "Créer une landing page avec Javascript", desc: "Création d'une landing page responsive et interactive pour permettre aux utilisateurs de s’inscrire aux compétitions e-sport." },
                    { skill: "Gérer un formulaire avec HTML et Javascript", desc: "Gestion de la validation et de la soumission du formulaire pour garantir une inscription correcte des utilisateurs aux événements." }
                ]
            },
            links: {
                github: "https://github.com/madelineGrammatico/GameOn-website-FR"
            },
            formation: "OpenClassrooms"
        },
        {
            name: "ohmyfood",
            id: 0,
            technos: ["HTML", "CSS", "SASS"],
            descriptions: {
                EN: 'A "mobile fisrt" interface which lists the menus of gourmet restaurants. Customers will be able to compose the menu for their meal so that the dishes are ready upon their arrival.',
                FR: 'Une interface "mobile fisrt" qui répertorie les menus de restaurants gastronomiques. Les clients pourront composer le menu de leur repas pour que les plats soient prêts à leur arrivée.'
            },
            skills: {
                EN: [
                    { 
                        skill: "Implement advanced CSS graphics effects", 
                        desc: "Utilized advanced CSS techniques to create visually appealing and interactive UI elements." 
                    },
                    { skill: "Set up a navigation structure for a website", 
                        desc: "Developed a clear and intuitive navigation structure that enhances user experience on both desktop and mobile." },
                    { skill: "Ensuring the graphic consistency of a website", desc: "Maintained consistent design principles across the site, ensuring a cohesive and professional visual experience." },
                    { skill: "Use a version management system for project monitoring and hosting", 
                        desc: "Employed Git for version control, ensuring proper tracking of code changes and facilitating collaboration." },
                    { skill: "Set up your Front-End environment", 
                        desc: "Configured the front-end development environment to ensure efficient coding, testing, and deployment." }
                ],
                FR: [
                    { skill: "Mettre en œuvre des effets CSS graphiques avancés", desc: "Utilisation de techniques CSS avancées pour créer des éléments UI interactifs et visuellement attrayants." },
                    { skill: "Mettre en place une structure de navigation pour un site web", desc: "Développement d’une structure de navigation claire et intuitive pour améliorer l’expérience utilisateur sur desktop et mobile." },
                    { skill: "Assurer la cohérence graphique d'un site web", desc: "Maintien de principes de design cohérents sur le site, garantissant une expérience visuelle professionnelle et harmonieuse." },
                    { skill: "Utiliser un système de gestion de versions pour le suivi du projet et son hébergement", desc: "Utilisation de Git pour la gestion des versions, assurant un suivi précis des modifications de code et facilitant la collaboration." },
                    { skill: "Mettre en place son environnement Front-End", desc: "Configuration de l’environnement de développement front-end pour assurer un codage, un test et un déploiement efficaces." }
                ]
            },
            links: {
                github: "https://github.com/madelineGrammatico/Grammatico_3_22122021"
            },
            formation: "OpenClassrooms"
        }
    ]
}

export const projectsSlice = createSlice({
    name:"projects",
    initialState,
    reducers: {
        filterProjects:(state: Draft<ProjectsType>, action: PayloadAction<string[]>) => {
            action.payload.map((filter)=> {
                state.projects = state.projects.filter((project) => {
                    
                        return project.technos.includes(filter)
                })
            })
        },
        initializeProjects: () =>{
            return initialState
        }
    }
})

export const {
    filterProjects,
    initializeProjects
} = projectsSlice.actions

export default projectsSlice.reducer
