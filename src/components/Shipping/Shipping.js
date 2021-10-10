import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {
        console.log(data);
    };
    return (
        <form className = "shipping-form" onSubmit={handleSubmit(onSubmit)}>

        <input defaultValue={user?.displayName} placeholder = "Your Name" {...register("name")} />
        
        {/* include validation with required or other standard HTML validation rules */}
        <input defaultValue={user?.email} placeholder ="Your E-mail" {...register("email", { required: true })} />
        <input type="tel" placeholder = 'Phone no:' {...register("phone")} />
        <input type="text" placeholder = 'City' {...register("city")} />
        <input type="text" placeholder = 'Address' {...register("address")} />
        {/* errors will return when field validation fails  */}
        {errors.email && <span className = "error">This field is required</span>}
        
        <input type="submit" value = "Submit" className = "btn-regular"/>
      </form>
    );
};

export default Shipping;