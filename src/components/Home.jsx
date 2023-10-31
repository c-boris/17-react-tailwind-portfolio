import { Link } from 'react-scroll';
import ParticlesBg from "particles-bg";
import '../index.css';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen sm:h-screen'>
      <ParticlesBg color="#0c387b" num={5} type="circle" bg={true} />

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-gray-200 font-bold text-4xl'>Hello!</p>
        <h1 className='text-6xl font-bold text-gray-400'>I’m a Full Stack Dev.</h1>
        <h2 className='text-4xl font-bold text-gray-200'>I build Digital Experiences for People.</h2>
        <div>
          <button className='text-gray-200 border-2 border-gray-400 px-6 py-3 my-2 flex items-center rounded-md hover:bg-blue-600'>
            <Link to='work' smooth={true} duration={500}>
              View Work
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
