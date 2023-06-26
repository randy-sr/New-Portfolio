import React from 'react'

const skills = [
    {skill: "HTML5"},
    {skill: "CSS3"},
    {skill: "JavaScript"},
    {skill: "React"},
    {skill: "Next.js"},
    {skill: "Tailwind CSS"},
    {skill: "PHP"},
    {skill: "Laravel"},
    {skill: "Java"},
    {skill: "SpringBoot"},
    {skill: "Oracle"},
    {skill: "MySql"},
    {skill: "Git"},
    {skill: "Github"}
]

const AboutSection = () => {
  return (
    <section id="about">
        <div className="my-12 pb-12 md:pt-16 md:pb-48">
            <h1 className='text-center font-bold text-3xl'>
                About Me
                <hr className="w-6 h-1 mx-auto my-4 bg-cyan-800 border-0 rounded"></hr>
            </h1>
            <div className='flex flex-col space-y-10 items-stretch justify-between align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'>
                <div className='md:w-3/2'>
                    <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Get to know me!</h1>
                    <p>
                        I describe myself as a passionate developer who loves coding.
                        <span className="font-bold text-cyan-800">{" Certified"}</span> in web technologies and learning more every day about tecnologies 
                        I need to be better in my career.
                    </p>
                    <br/>
                    <p>
                        Besides my studies, i like to spend time visiting new places, at the beach or hanging out with family and friend. 
                        I always get the best of me in my daily life. 
                        <span className="font-bold text-cyan-800">{" I like to work in team and solve problems for better results. 🙂"}</span>
                    </p>
                </div>
            
                <div className='text-center md:1/2 md:text-left'>
                    <h1 className='text-2xl font-bold mb-6'>My Skills</h1>
                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                        {
                            skills.map( (skill, idx) => {
                                return (<p className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold" key={idx}>{skill.skill}</p>)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection