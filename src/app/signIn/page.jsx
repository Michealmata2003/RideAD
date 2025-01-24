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
import { CustomFormInput,  CustomPasswordInput } from '@/components/input/Input';
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
                <h2 className='text-black text-3xl font-bold py-1'>Welcome Back</h2>
                <p className='text-black'>Log in to your account to continue </p>
              </div>
              <div>

                <CustomFormInput label='Email' icon={mail} />
                <CustomPasswordInput label='Password' icon={closed} lock={lock} />
              </div>
              <div className='py-4 flex justify-between w-full'>
                <div className='flex gap-[5px]'>
                  <input type="checkbox" name="" id="" />
                  <p>Remember Me</p>
                </div>
                <a href="" className='text-DeepBlue font-semibold'>forgot password?</a>
              </div>

              <CustomButton>Sign In</CustomButton>

              <div className='flex m-auto py-2 justify-center items-center gap-[5px] text-center' >
                <hr />
                <p className=''>Or</p>
                <hr />

              </div>

              <div className='flex gap-4 justify-between w-1/2 m-auto py-2'>
                <a href="" className='border rounded-md p-1'>
                  <Image
                    src={google}
                    alt="google"
                    width={30}
                    height={20}

                  />
                </a>
                <a href="" className='border rounded-md p-1'>
                  <Image
                    src={facebook}
                    alt="google"
                    width={30}
                    height={20}
                  />
                </a>
                <a href="" className='border rounded-md p-1'>
                  <Image
                    src={apple}
                    alt="google"
                    width={30}
                    height={20}
                  />
                </a>
                <a href="" className='border rounded-md p-1'>
                  <Image
                    src={twitter}
                    alt="google"
                    width={30}
                    height={20}
                  />
                </a>




              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page