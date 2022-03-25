import './App.css';
import React, { useState } from "react";

const App: React.FC = () => {
  const [mode, setMode] = useState("night")
  return (
    <div className={`${ mode === 'day' ? 'bg-white text-black': 'bg-black text-white' } h-screen w-screen flex justify-center items-center`}>
      <div className='flex flex-col justify-around h-full w-[80%] min-w-[70%]'>
        <nav className='flex w-full justify-center md:justify-end'>
          <div className='flex items-center font space-x-10'>
            {
              mode === "night" ? (
                <div className='flex space-x-2'>
                  <img src="/icons/day_icon_white.svg" alt="ToggleOn" className='h-2 md:h-4 cursor-pointer' onClick={() => setMode("day")}/>
                  <img src="/icons/toggle-on-solid_white.svg" alt="ToggleOn" className='h-4 md:h-8 cursor-pointer' onClick={() => setMode("day")}/>
                  <img src="/icons/night_icon_white.svg" alt="ToggleOn" className='h-2 md:h-4 cursor-pointer' onClick={() => setMode("night")}/>
                </div>
              ) : (
                <div className='flex space-x-2'>
                  <img src="/icons/day_icon_black.svg" alt="ToggleOn" className='h-2 md:h-4 cursor-pointer' onClick={() => setMode("day")}/>
                  <img src="/icons/toggle-on-solid_black.svg" alt="ToggleOn" className='h-4 md:h-8 cursor-pointer rotate-180' onClick={() => setMode("night")}/>
                  <img src="/icons/night_icon_black.svg" alt="ToggleOn" className='h-2 md:h-4 cursor-pointer' onClick={() => setMode("night")}/>
                </div>
              )
            }
            <h1 className='hover:animate-bounce cursor-pointer' onClick={() => window.open('https://drive.google.com/file/d/1r8surSSejgSw6O52HViRiu9RqzvNT5LA/view?usp=sharing', '_blank', 'noreferrer noopener')}>Resume</h1>
            <h1 className='hover:animate-bounce cursor-pointer' onClick={() => window.open('https://medium.com/@rsrofficial99/react-vite-tailwind-6238209f95ad', '_blank', 'noreferrer noopener')}>Blog</h1>
          </div>
        </nav>
        <div className='space-y-10'>
          <p className='text-xl md:text-2xl font-semibold'>Hi, I'm</p>
          <h1 className='text-4xl md:text-6xl font-extrabold'>Rohan Singh Rawat</h1>
          <h1 className='text-2xl md:text-4xl font-extrabold'>I do magic with code!</h1>
          <p className='text-xl md:text-2xl font-semibold'>I am a final year engineering student, trying to create a difference in people's life by writing code. I'm always excited to learn and work on new technologies. Having about 3 years of experience in startup culture. Hustler.</p>
        </div>
        <footer className='flex w-full justify-center'>
          <div className='flex items-center font space-x-16'>
            <img src={ `${mode === "night" ? '/icons/github_icon_white.svg' : '/icons/github_icon_black.svg'}`} alt="ToggleOn" className='h-4 md:h-8 cursor-pointer' onClick={() => window.open('https://github.com/rohansinghrawat99', '_blank', 'noreferrer noopener')}/>
            <img src={ `${mode === "night" ? '/icons/linkedin_icon_white.svg' : '/icons/linkedin_icon_black.svg'}`} alt="ToggleOn" className='h-4 md:h-8 cursor-pointer' onClick={() => window.open('https://www.linkedin.com/in/rohan-singh-rawat-110022168/', '_blank', 'noreferrer noopener')}/>
            <img src={ `${mode === "night" ? '/icons/twitter_icon_white.svg' : '/icons/twitter_icon_black.svg'}`} alt="ToggleOn" className='h-4 md:h-8 cursor-pointer' onClick={() =>  window.open('https://twitter.com/rohansrawat', '_blank', 'noreferrer noopener')}/>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App;
