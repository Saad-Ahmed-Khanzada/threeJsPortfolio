"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser"
import { Toaster } from 'sonner';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const sendEmail = (params) => {

    // emailjs
    //   .send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID,
    //     params,
    //     {
    //     publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        
    //     limitRate:{
    //         throttle:5000, //you cannot send more than 1 email /5 seconds
    //     }
    //   })
    //   .then(
    //     () => {
    //       console.log('SUCCESS!');
    //     },
    //     (error) => {
    //       console.log('FAILED...', error.text);
    //     },
    //   );
  };


  const onSubmit = data =>{

    const templateParams= {
        to_name:"Saad Ahmed Khanzada",
        from_name:data.name,
        reply_to: data.email,
        message:data.message

    }
    sendEmail(templateParams);
//   console.log(errors);
}
  return (
    <>
    <Toaster/>
    <form onSubmit={handleSubmit(onSubmit)}
    className='max-w-md w-full flex flex-col items-center justify-center 
    space-y-4'>
      <input type="text" placeholder="name" {...register("name", {required: 'This field is required!',
        minLength:{
            value:3,
            message:"Name should be atleast 3 characters long."
        }
      })} 
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none
      focus:ring-2 focus:ring-accent/50 custom-bg'/>

      {
        errors.name && <span className='inline-blocks self-start text-red-600  '>{errors.name.message}</span>
      }
      
      <input type="email" placeholder="email" {...register("email", {required: 'This field is required!'})}
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none
      focus:ring-2 focus:ring-accent/50 custom-bg' />

{
        errors.email && <span className='inline-blocks self-start text-red-600  '>{errors.email.message}</span>
      }
      
      <textarea placeholder='message' {...register("message", {required:'This field is required!',
       maxLength: {
        value:500,
        message: "Message should be less than 500 characters"
       }, 
       minLength:  {
        value:50,
        message: "Message should be more than 50 characters"
       }})} 
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none
      focus:ring-2 focus:ring-accent/50 custom-bg'/>

{
        errors.message && <span className='inline-blocks self-start text-red-600  '>{errors.message.message}</span>
      }

      <input
      value={"send your message"}
      className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid 
      hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 capitalize ' type="submit" />
    </form>
    </>
  );
}