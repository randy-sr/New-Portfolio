
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub } from "react-icons/bs"
import { FaLink } from "react-icons/fa6";

const projects = [
    {
        name: "Coffeeholic",
        description:
          "Coffeeholic is an app to track your coffee consume, blood caffeine levels and costing.",
        image: "/coffeholic_app.png",
        github: "https://github.com/randy-sr/coffeeholic",
        link: "https://coffeeholic-tracker.netlify.app"
    },
    {
        name: "Pokedex",
        description:
          "Interactive Pokedex, dome interesting pokemons information",
        image: "/pokedex_app.png",
        github: "https://github.com/randy-sr/pokedex",
        link: "https://pokedex-randy.netlify.app/"
    },
    {
        name: "Todo App",
        description:
          "Easy app for taking notes todo, done checkit and delete",
        image: "/todo-app.png",
        github: "https://github.com/randy-sr/todo-app-react",
        link: "https://coolest-todo-app.netlify.app/"
    },
    {
        name: "TuPedido",
        description:
          "TuPedido is an app for room service for hotels.",
        image: "/img1.PNG",
        github: "https://github.com/randy-sr/tu-pedido"
    },
    {
        name: "Budget App",
        description:
          "Budget App calculates the budget.",
        image: "/img2.PNG",
        github: "https://github.com/randy-sr/Budget-App"
    },
    {
        name: "Tip App",
        description:
          "Make slice the tips easier.",
        image: "/img3.PNG",
        github: "https://github.com/randy-sr/Tips-Calculator"
    },
]
const ProjectSection = () => {
  return (
    <section id="projects">
        <h1 className='text-center font-bold text-3xl'>
            Projects
            <hr className="w-6 h-1 mx-auto my-4 bg-cyan-800 border-0 rounded"></hr>
        </h1>
        <div>
            {
                projects.map( (project, idx) => {
                    return (
                        <div key={idx}>
                            <SlideUp offset="-300px 0px -300px 0px">
                                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                                    <div className="mt-8 md:w-1/2">
                                        <Image 
                                            src={project.image}
                                            alt=""
                                            width={1000}
                                            height={1000}
                                            className="rounded-xl shadow-xl"
                                        />
                                    </div>
                                    <div className="mt-12 md:w-1/2">
                                        <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                                        <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">{project.description}</p>
                                        <div className="flex flex-row align-bottom space-x-4">
                                            <Link
                                                href={project.github}
                                                target="_blank"
                                            >
                                                <BsGithub 
                                                    size={30}
                                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                />
                                            </Link>
                                            {
                                                project.link && (
                                                    <Link
                                                        href={project.link}
                                                        target="_blank"
                                                    >
                                                        <FaLink 
                                                            size={30}
                                                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                        />
                                                    </Link>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </SlideUp> 
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default ProjectSection