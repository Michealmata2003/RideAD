import React from 'react';
import Image from "next/image";
import logo from '../../assets/Logo.svg';
import mail from '../../assets/mail.svg';
import lock from '../../assets/lock.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import apple from '../../assets/apple.svg';
import google from '../../assets/google.svg';
import closed from '../../assets/closed.svg';
// import tricycle from '../../assets/images/tricycle.png'
import { CustomFormInput, CustomInput, CustomPasswordInput } from '@/components/input/Input';
import { CustomButton } from '@/components/button/Button';


const page = () => {
  return (
    <div className='component'>
      <div className='flex justify-between'>
        <div className='w-[50%]'></div>
        <div className='w-1/2 justify-center shadow-xl h-[100vh] bg-white p-[3rem]'>
          <div className=' bg-white p-4  m-auto align-center'>

            <div className="  m-auto align-center flex justify-center pb-4"
            >
              <Image
                src={logo}
                alt="Logo"
                width={180}
                height={38}
              />
            </div>
            <div>
              <div className='m-auto justify-center align-center w-full pb-[2rem]'>
                <h2 className='text-black text-3xl font-bold py-1'>Forgot Password</h2>
                <p className='text-black'>Enter the Email Address you registered to your account</p>
              </div>
              <div className='pt-[1rem] pb-[3rem]'>

                <CustomFormInput label='Email' icon={mail} placeholder='obuezeOne@gmail.com'/>
              </div>
             

              <CustomButton>Sign In</CustomButton>

             

              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page