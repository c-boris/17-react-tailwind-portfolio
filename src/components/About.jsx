import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-400'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
          <Fade direction="left">
            <p className='text-4xl text-gray-200 font-bold inline border-b-4 border-blue-600 transition-opacity duration-500 hover:opacity-100'>
              About
            </p>
            </Fade>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
          <Fade direction="up">
            <p className='transition-opacity duration-500 hover:opacity-100'>
              I aim to help bring your projects to life through my flexibility and adaptability.
            </p>
            </Fade>
          </div>
          <div>
          <Fade direction="right">
            <p className='transition-opacity duration-500 hover:opacity-100'>
            Over the past two years, I have focused on enhancing my skills in creative web development, with a strong emphasis on interactivity. <br/>I belive in crafting web experiences that are not just functional but also visually captivating.<br/>Let’s collaborate and work together to create something.
            </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
