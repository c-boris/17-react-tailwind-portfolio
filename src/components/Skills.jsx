import Sass from '../assets/sass.svg';
import Azure from '../assets/azure.svg';
import JavaScript from '../assets/javascript.svg';
import ReactImg from '../assets/react.svg';
import Node from '../assets/node.svg';
import RubyOnRails from '../assets/rails.svg';
import GitHub from '../assets/github.svg';
import Tailwind from '../assets/tailwind.svg';
import PostGre from '../assets/postgresql.svg'
import Aws from '../assets/aws.svg'
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  return (
    <div name='skills' className='w-full h-fit bg-[#0a192f] text-gray-200 pt-24 sm:h-screen'>
      {/* Container */}
      
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <Fade direction="left">
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-blue-600'>Skills</p>
          <p className='py-4 text-gray-400'>These are the technologies I’ve worked with.</p>
        </div>
        </Fade>
        <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8'>
          <Fade cascade damping={0.2}>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt='JavaScript icon' />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt='React icon' />
            <p className='my-4'>ReactJS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitHub} alt='GitHub icon' />
            <p className='my-4'>GitHub</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt='Node JS icon' />
            <p className='my-4'>NodeJS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt='Tailwind CSS icon' />
            <p className='my-4'>Tailwind CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={RubyOnRails} alt='Ruby on Rails icon' />
            <p className='my-4'>Ruby on Rails</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={PostGre} alt='PostgreSQL icon' />
            <p className='my-4'>PostgreSQL</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Sass} alt='Sass icon' />
            <p className='my-4'>Sass</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Azure} alt='Azure DevOps icon' />
            <p className='my-4'>Azure DevOps</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Aws} alt='Aws icon' />
            <p className='my-4'>Aws</p>
          </div>
          </Fade>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
