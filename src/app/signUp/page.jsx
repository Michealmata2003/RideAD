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
                <div className='w-[40%]'></div>
                <div className='w-1/2 justify-center shadow-xl h-[100vh] bg-white p-[3rem]'>
                    <div className=' bg-white p-4  m-auto align-center'>

                        <div className="  m-auto align-center flex justify-center"
                        >
                            <Image
                                src={logo}
                                alt="Logo"
                                width={180}
                                height={38}
                            />
                        </div>
                        <div>
                            <div className='m-auto justify-center align-center w-full'>
                                <h2 className='text-black text-3xl font-bold py-1'>Get Started Now</h2>
                                <p className='text-black'>Already have an account? <a href="/login" className='text-DeepBlue font-semibold'>login</a></p>
                            </div>
                            <div>
                                <div className='flex justify-between w-full gap-2'>
                                    <CustomInput label='First Name' />
                                    <CustomInput label='Last Name' />

                                </div>
                                <CustomFormInput label='Email' icon={mail} />
                                <CustomPasswordInput label='Password' icon={closed} lock={lock} />
                                <CustomPasswordInput label='Confirm Password' icon={closed} lock={lock}/>
                            </div>
                            <div className='py-2 flex gap-[5px]'>
                                <input type="checkbox" name="" id="" />
                                <p>Agree to the <a href="" className='text-DeepBlue font-semibold'>Terms of Service</a> and <a href="" className='text-DeepBlue font-semibold'>Privacy Policy</a></p>
                            </div>

                            <CustomButton>Create an Account</CustomButton>

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