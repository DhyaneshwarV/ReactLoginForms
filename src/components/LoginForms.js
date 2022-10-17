import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
function LoginForms() {
    
    
    const schema=yup.object().shape({
        Name:yup.string().required("Required"),
        Email:yup.string().email().required(),
        Age:yup.number().positive().integer().min(18).required(),
        Password:yup.string().min(4).max(10).required(),
        ConfirmPassword:yup.string().oneOf([yup.ref("Password"),null]).required()
    })
    const{register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema)
    })
    const submit=(data)=>console.log(data)

  return (
    <div>
       <form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder='Name' {...register("Name")}/>
        <p>{errors.Name?.message}</p>
        <input type="text" placeholder='Email' {...register("Email")}/>
        <input type="number" placeholder='Age' {...register("Age")}/>
        <input type="password" placeholder='Password'  {...register("Password")}/>
        <input type="password" placeholder='Confirm password'  {...register("ConfirmPassword")}/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default LoginForms
