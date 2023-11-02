import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-24 sm:h-screen'>
      <form name='contact' method='POST' data-netlify="true" className='flex flex-col max-w-[600px] w-full'>
        <Fade direction="down">
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-blue-600 text-gray-200'>Contact</p>
            <p className='text-gray-400 py-4'>Submit the form below.</p>
          </div>
        </Fade>
        <input
          className='bg-transparent border-2 rounded-md border-gray-400 p-2 text-gray-400'
          type='text'
          placeholder='Name'
          name='name'
          id='name'
          autoComplete='name'
        />
        <input
          className='my-4 p-2 bg-transparent border-2 rounded-md border-gray-400 text-gray-400'
          type='email'
          placeholder='Email'
          name='email'
          id='email'
          autoComplete='email'
        />
        <textarea
          className='bg-transparent border-2 rounded-md border-gray-400 p-2 text-gray-400'
          name='message'
          rows='10'
          placeholder='Message'
          id='message'
          autoComplete='message'
        />
        <button type="submit" className='text-gray-200 rounded-md border-2 border-gray-400 hover:bg-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>
          Let’s Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
