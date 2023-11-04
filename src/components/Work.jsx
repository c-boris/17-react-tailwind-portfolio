import { data } from '../data/data.js';
import { Fade } from "react-awesome-reveal";

const Work = () => {
  const project = data;

  return (
    <div name='work' className='w-full h-fit pt-24 sm:h-screen'>
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
        <Fade cascade damping={0.3}>
          {project.map((item, index) => (
            <div key={index} className='max-w-sm  border  rounded-lg shadow bg-gray-800 border-gray-700'>
                <img className='rounded-t-lg' src={item.image} alt={item.name} />
              <div className='p-5'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-200'>{item.name}</h5>
                <p className='mb-3 font-norma text-gray-400'>{item.description}</p>
                <a href={item.live} target='_blank' rel='noopener noreferrer' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 '>
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
