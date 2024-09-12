import React from 'react'
import WelcomeButton from '@/app/components/WelcomeButton';

const WelcomePage = () => {
  console.log('Hey Im here');
  return (
    <>
      <h1 className="text-center text-3xl mt-3">Welcome to the Blog</h1>
      <p className="text-center mb-[20%]">click to see anything and everything</p>
      <div className='flex justify-center'>
        <WelcomeButton />
      </div>
    </>
  )
}

export default WelcomePage