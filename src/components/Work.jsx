import { data } from '../data/data.js';
import { Fade } from "react-awesome-reveal";

const Work = () => {
  const project = data;

  return (
    <div name='work' className='w-full h-fit text-gray-200 bg-[#0a192f] pt-24 sm:h-screen'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <Fade direction="left">
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-200 border-blue-600'>
              Work
            </p>
            <p className='py-6 text-gray-400'>Some of my recent work.</p>
          </div>
        </Fade>

        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
        <Fade direction="up">
          {project.map((item, index) => (
            <div key={index} className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              {/* <a href={item.live} > */}
                <img className='rounded-t-lg' src={item.image} alt={item.name} />
              {/* </a> */}
              <div className='p-5'>
                {/* <a href={item.live} > */}
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{item.name}</h5>
                {/* </a> */}
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{item.description}</p>
                <a href={item.live} target='_blank' rel='noopener noreferrer' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                  Live
                  
                </a>
              </div>
            </div>
          ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Work;
