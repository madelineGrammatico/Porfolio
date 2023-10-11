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
        EN: string[],
        FR: string[]
    },
    links: {
        github: string,
        web?: string
    },
    formation?: "Openclassrooms" | "Le Wagon"
}

export type ProjectsType = {
    projects: ProjectType[]
}

const initialState: ProjectsType= {
    projects: [
        {
            name: "Portfolio",
            id: 10,
            favorite: true,
            technos: [
                "React",
                "TypeScript",
                "Redux Toolkit",
                "React Router",
                "Vite",
            ],
            descriptions: {
                EN: "Front-End developer portfolio with technology search functionality.",
                FR: "Portfolio de développeuse Front-End avec une fonctionnalité de recherche par thechnologies.",
            },
            skills: {
                EN: [
                    "Develop a search algorithm in JavaScript",
                    "Implement a state manager in a React application",
                ],
                FR: [
                    "Développer un algorithme de recherche en JavaScript",
                    "Implémenter un gestionnaire d’état dans une application React",
                ]
            },
            links: {
                github: ""
            },
        },
        {
            name: "P14_RHnet_React",
            id: 9,
            favorite: true,
            technos: [
                "React",
                "TypeScript",
                "Redux Toolkit",
                "React Router",
                "React hook Form",
                "MaterialUI",
                "CSS Modules",
                "Vite",
            ],
            descriptions: {
                EN: "Interface for HR allowing you to add and display employees",
                FR: "Interface à destination des RH permettant d’ajouter et d’afficher des employés"
            },
            skills: {
                EN: [
                    "Recast of a jQuery application in React",
                    "Implement a state manager in a React application"
                ],
                FR: [
                    "Refonte d’une application jQuery en React",
                    "Implémenter un gestionnaire d’état dans une application React"
                ]
            },
            links: {
                github: ""
            },
        },
        {
            name: "mg-p14-modal",
            id: 8,
            favorite: true,
            technos: [
                "React",
                "React Router",
                "Vite",
                "StoryBook",
            ],
            descriptions: {
                EN: "Library making it easier to add modal to an application.",
                FR: "Librairie facilitant l’ajout de modale dans une application.",
            },
            skills: {
                EN: [
                    "Implement a Library",
                    "Uploaded to NPM",
                    "Produce technical documentation",
                ],
                FR: [
                    "Implémenter une Librairie",
                    "Mise en ligne sur NPM",
                    "Produire la documentation technique",
                ]
            },
            links: {
                github: "https://github.com/madelineGrammatico/kasa",
                web: "https://www.npmjs.com/package/mg-p14-modal"
            },
        },
        {
            name: "ArgentBank",
            id: 7,
            favorite: true,
            technos: [
                "React",
                "TypeScript",
                "Redux Toolkit",
                "React Router",
                "Vite",
                "CSS Modules"
            ],
            descriptions: {
                EN: "Secure banking interface allowing access to accounts and modification of identifiers",
                FR: "Interface bancaire sécurisée permettant l’accès à ses comptes et la modification de ses identifiants"
            },
            skills: {
                EN: [
                    "Interact with a Back-End API",
                    "User authentication",
                    "Implement a state manager in a React application"
                ],
                FR: [
                    "Intéragir avec une API Back-End",
                    "Authentification d’utilisateur",
                    "Implémenter un gestionnaire d’état dans une application React"
                ]
            },
            links: {
                github: "",
            },
        },
        {
            name: "SportSee",
            id: 6,
            technos: [
                "React",
                "TypeScript",
                "React Router",
                "Vite",
                "CSS Modules",
                "Recharts",
                "TypeDoc",
            ],
            descriptions: {
                EN: "A profile page showing all the user's information through graphics.",
                FR: "Une page de profile montrant toutes les informations de l’utilisateur par le biais de graphiques.",
            },
            skills: {
                EN: [
                    "Ensuring the quality of an application's data",
                    "Develop advanced graphics using JavaScript libraries",
                    "Interact with a web service",
                ],
                FR: [
                    "Assurer la qualité des données d'une application",
                    "Développer des éléments graphiques avancés à l'aide de bibliothèques JavaScript",
                    "Interagir avec un service Web",
                ]
            },
            links: {
                github: "https://github.com/madelineGrammatico/SportSee",
            },
        },
        {
            name: "Kasa",
            id: 5,
            technos: [
                "React",
                "React Router",
                "CRA",
                "SASS",
            ],
            descriptions: {
                EN: "An interface for apartment rental between individuals.",
                FR: "Une interface de location d'appartement entre particuliers.",
            },
            skills: {
                EN: [
                    "Create components with React",
                    "Develop routes for a web application with React Router",
                    "Initialize a web application with a framework",
                ],
                FR: [
                    "Créer des composants avec React",
                    "Développer les routes d'une application web avec React Router",
                    "Initialiser une application web avec un framework",
                ]
            },
            links: {
                github: "https://github.com/madelineGrammatico/kasa",
            },
        },
        {
            name: "Billed",
            id: 4,
            technos: [
                "HTML",
                "CSS",
                "SASS",
                "JavaScript",
                "Jest"
            ],
            descriptions: {
                EN: "Debug and test an HR SaaS",
                FR: "Débuggez et testez un SaaS RH",
            },
            skills: {
                EN: [
                    "Debug a web application with the Chrome Debugger",
                    "Writing unit tests with JavaScript",
                    "Writing integration tests with JavaScript",
                    "Write a manual end-to-end test plan",
                ],
                FR: [
                    "Débugger une application web avec le Chrome Debugger",
                    "Ecrire des tests unitaires avec JavaScript",
                    "Ecrire des tests d'intégration avec JavaScript",
                    "Rédiger un plan de test end-to-end manuel",
                ]
            },
            links: {
                github: "https://github.com/madelineGrammatico/Billed-app-FR-Front",
            },
        },
        {
            name: "Les Petits Plats",
            id:3,
            technos: [
                "HTML",
                "CSS",
                "SASS",
                "JavaScript"
            ],
            descriptions: {
                EN: "A cooking recipe site with functionality to search by ingredients, utensils or kitchen appliances as well as user input.",
                FR: "Un site de recettes de cuisine avec une fonctionnalité de recherche par ingrédients, ustensils ou par appareils de cuisine ainsi que par la saisie de l'utilisateur.",
            },
            skills: {
                EN: [
                    "Develop a search algorithm in JavaScript",
                    "Analyze a computer problem",
                    "Develop an algorithm to solve a problem",
                    "Manage data within a JSON file",
                    "Implement your code with 'factories Patterns'",
                ],
                FR: [
                    "Développer un algorithme de recherche en JavaScript",
                    "Analyser un problème informatique",
                    "Développer un algorithme pour résoudre un problème",
                    "Gérer de la donnée au sein d'un fichier JSON",
                    "Implémenter son code avec des 'factories Patterns'",
                ]
            },
            links: {
                github: "https://github.com/madelineGrammatico/Les_Petits_Plats",
            },
        },
        {
            name: "FishEyes",
            id:2,
            technos: [
                "HTML",
                "CSS",
                "SASS",
                "JavaScript"
            ],
            descriptions: {
                EN: "FishEye is a screen reader-friendly website that allows independent photographers to showcase their work.",
                FR: "FishEye est un site web utilisable par les lecteurs d'écran, qui permet aux photographes indépendants de présenter leurs travaux.",
            },
            skills: {
                EN: [
                    "Ensuring the accessibility of a website",
                    "Write maintainable JavaScript code",
                    "Manage site events with JavaScript",
                    "Develop a modular web application with design patterns",
                ],
                FR: [
                    "Assurer l'accessibilité d'un site web",
                    "Ecrire du code JavaScript maintenable",
                    "Gérer les évènements d'un site avec JavaScript",
                    "Développer une application web modulaire avec des design patterns",
                ]
            },
            links: {
                github: "https://github.com/madelineGrammatico/Front-End-Fisheye",
            },
        },
        {
            name: "GameOn",
            id:1,
            technos: [
                "HTML",
                "CSS",
                "SASS",
                "JavaScript"
            ],
            descriptions: {
                EN: "A home page for registering for e-sport competitions",
                FR: "Une page d'accueil pour l'inscription à des concours d'e-sport",
            },
            skills: {
                EN: [
                    "Create a landing page with Javascript",
                    "Manage a form with HTML and Javascript",
                ],
                FR: [
                    "Créer une landing page avec Javascript",
                    "Gérer un formulaire avec HTML et Javascript",
                ]
            },
            links: {
                github: "https://github.com/madelineGrammatico/GameOn-website-FR",
            },
        },
        {
            name: "ohmyfood",
            id:0,
            technos: [
                "HTML",
                "CSS",
                "SASS"
            ],
            descriptions: {
                EN: 'A "mobile fisrt" interface which lists the menus of gourmet restaurants. In addition to traditional reservation systems, customers will be able to compose the menu for their meal so that the dishes are ready upon their arrival.',
                FR: 'Une interface "mobile fisrt" qui répertorie les menus de restaurants gastronomiques. En plus des systèmes classiques de réservation, les clients pourront composer le menu de leur repas pour que les plats soient prêts à leur arrivée.',
            },
            skills: {
                EN: [
                    "Implement advanced CSS graphics effects",
                    "Set up a navigation structure for a website",
                    "Ensuring the graphic consistency of a website",
                    "Use a version management system for project monitoring and hosting",
                    "Set up your Front-End environment",
                ],
                FR: [
                    "Mettre en œuvre des effets CSS graphiques avancés",
                    "Mettre en place une structure de navigation pour un site web",
                    "Assurer la cohérence graphique d'un site web",
                    "Utiliser un système de gestion de versions pour le suivi du projet et son hébergement",
                    "Mettre en place son environnement Front-End",
                ]
            },
            links: {
                github: "https://github.com/madelineGrammatico/Grammatico_3_22122021",
            },
        },
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
