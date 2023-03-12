import sass from "../Images/sass.png";
import bootstr from "../Images/bootstrap.png";
import jQuery from "../Images/jQuery.png";
import javaScript from "../Images/java-script.png";
import react from "../Images/react.png";
import git from "../Images/git.png";
import github from "../Images/github.png";
import gimp from "../Images/gimp.png";
import { FaCode, FaShapes } from "react-icons/fa";
import { BiAnalyse } from "react-icons/bi";
import avtotest from "../Images/avtotest.jpg";
import searchFilter from "../Images/search-filter.jpg"
import notesApp from "../Images/notes-app.jpg"
import ecommerce from "../Images/ecommerce.jpg"
export const services = [
    {
        id: 1,
        icon: <FaCode/>,
        title: "Website maintenance",
        text: "Website maintenance is the process of keeping a website up-to-date and running smoothly as well as performing optimally. Website maintenance includes tasks like ensuring all the links on your site are working, regularly updating content, and fixing any broken links."
    },
    {
        id: 2,
        icon: <FaShapes/>,
        title: "Web design",
        text: `The web design process involves creating a site’s architecture, designing its layout and user interface, and coding it to work correctly. To give you a sense of how the web app will look after it’s finished, web designers create wireframes and mockups, which then can be modified based on your wishes and code development.`
    },
    {
        id: 3,
        icon: <BiAnalyse/>,
        title: `Web optimization`,
        text: `Web optimization is the process of making web apps more user-friendly and visible to search engines. The developers will first check how your page ranks when it comes to SEO, speed, backlinks, load times, and mobile experience and then give their alternative solutions and suggestions on how your web app’s rank can be improved. `
    }
]
export const skills = [
    {
        id: 1,
        img: sass,
        title: "SASS",
        text: "stylesheet language that's compiled to CSS",
        modalTitle: "I know how to use",
        features: [
            `@import`,
            `@mixin`,
            `@extend`,
            `maps`,
            `loops`,
            `conditionals`,
            `functions`
        ]
    },
    {
        id: 2,
        img: bootstr,
        title: "Bootstrap",
        text: "powerful, feature-packed frontend toolkit",
        modalTitle: "I know how to use",
        features: [
            "Layout",
            "Forms",
            "Accordion",
            "Alert",
            "Badge",
            "Buttons",
            "Collapse",
            "Dropdowns",
            "List Group",
            "Paginations",
            "Progress",
            "Spinners"
        ]

    },
    {
        id: 3,
        img: jQuery,
        title: "jQuery",
        text: "fast, small, and feature-rich JavaScript library",
        modalTitle: "I know how to use",
        features: [
            "Events",
            "Hide/Show",
            "Fade",
            "Slide",
            "Animate",
            "Callback",
            "Chaining",
            "Get/Set",
            "Add/Remove",
            "CSS"
        ]
    },
    {
        id: 4,
        img: javaScript,
        title: "JavaScript",
        text: "the programming language of the Web",
        modalTitle: "I know how to use",
        features: [
            "Variables",
            "Operators",
            "Data Types",
            "Functions",
            "Objects",
            "Events",
            "String Methods/Templates",
            "Numbers",
            "Arrays/Methods/Iteration",
            "Dates",
            "Math/Random",
            "Boolens",
            "Comparisons",
            "Loops",
            "Maps",
            "Classes",
            "JSON",
            "Async/Await/Ajax",
            "DOM"
        ]
    },
    {
        id: 5,
        img: react,
        title: "ReactJS",
        text: "A JavaScript library for building user interfaces",
        modalTitle: "I know how to use",
        features: [
            "JSX",
            "Components",
            "Props",
            "Events",
            "Conditionls",
            "Lists",
            "Forms",
            "CSS",
            "React-icons",
            "Router",
            "Custom Hooks",
            "useState",
            "useEffect",
            "useReducer",
            "useContext",
            "useRef",
            "useMemo"

        ]
    },
    {
        id: 6,
        img: git,
        title: "Git",
        text: "open source distributed version control system",
        modalTitle: "I know how to use",
        features: [
            "git add",
            "git status",
            "git commit",
            "git branch",
            "pull",
            "push"
            
        ]
    },
    {
        id: 7,
        img: github,
        title: "Github",
        text: "code hosting platform for collaboration.",
        modalTitle: "I know how to use",
        features: [
            "Github Flow",
            "Github Pages",
            "Git Clone from GitHub"
        ]
    },
    {
        id: 8,
        img: gimp,
        title: "Gimp",
        text: "cross-platform image editor",
        modalTitle: "I know how to use",
        features: [
            "Paint/Transform Tools",
            "Blur/Enhance filters",
            "Colors",
            "Layer/Transperncy"
        ]
    },
]
export const projects = [
    {
        id: 1,
        active: "active",
        img: ecommerce,
        title: "E-Commerce",
        likes: 300,
        link: "https://techgood.netlify.app/"
    },
    {
        id: 2,
        img: avtotest,
        title: "Avto Test App",
        likes: 500,
        link: "https://farhod-avtotest.netlify.app/"
    },
    {
        id: 3,
        img: notesApp,
        title: "Notes App",
        likes: 400,
        link: "https://daily-notes-webapp.netlify.app/"
    },
    {
        id: 4,
        img: searchFilter,
        title: "Search-filter",
        likes: 100,
        link: "https://search-filter-app.netlify.app/"
    }
]
