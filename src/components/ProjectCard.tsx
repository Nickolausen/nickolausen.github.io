import template_img from '../assets/media/template.jpeg'
import Button from './Button'

function ProjectCard() {
    return <>
        <article className='flex flex-col flex-wrap content-center'>
            <img src={template_img}></img>
            <h3 className='text-2xl mt-4 font-bold'>&lt;/Title Project&gt;</h3>
            <small className='mt-1'>
                <span className='font-bold'>Created on: </span><span className='text-gray-500'>24/05/2023</span> | <span className='font-bold'>Last Update: </span><span className='text-gray-500'>24/05/2023</span>
            </small>
            <p className='text-pretty py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores veniam praesentium ipsam quos quaerat molestias, quia, dolorum neque hic, distinctio quod nemo officiis cum officia cumque nisi sit at libero!</p>
            <Button></Button>
        </article>
    </>
}

export default ProjectCard