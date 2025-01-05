import React from 'react'
import Heading from './Heading'
import Card from './Card'


const data = [
    {
        id: 0,
        title: "Todo App",
        img: "/project1copy.png",
        tags: ["React", "Node", "CSS", "Typescript"]
    },
    {
        id: 1,
        title: "Facebook page",
        img: "/project2copy.png",
        tags: ["React", "Node", "CSS", "Typescript"]
    },
    {
        id: 2,
        title: "Countdown Timer",
        img: "/project3copy.png",
        tags: ["React", "Node", "CSS", "Typescript"]
    },
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
      
    </div>
  )
}

export default Projects
