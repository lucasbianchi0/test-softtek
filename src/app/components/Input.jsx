'use client'

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { BsFillSendFill } from "react-icons/bs";
import analizarCadena from '../utils/analizarCadenas';

const Input = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    useEffect(() => {
        console.log('hola')
        return () => {
            clearErrors();
        };
    }, []);

    const clearErrors = () => {
        Object.keys(errors).forEach(field => {
            clearErrors(field);
        });
    };

    const handleSubmitForm = (data,e) => {
        e.preventDefault();
        try {
            const schema = z.string();
            schema.parse(data.input);
            console.log('Entrada válida:', data.input);
            const resultado = analizarCadena(data.input);
            console.log(resultado)
            onSubmit(resultado);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const onlyLetters = (value) => /^[a-zA-Z]+$/.test(value);

    return (
        <div className="grid rounded-lg place-items-center mt-3 lg:mt-12">
            <div className="w-72 lg:w-[500px]  ">
                <form onSubmit={handleSubmit(handleSubmitForm)} className="flex bg-gray-900 relative lg:min-w-[400px] ">
                    <div className="relative h-14  w-full min-w-[200px] flex-1">
                        <input
                            type="text"
                            className={` peer h-full w-full rounded-[7px] border border-white border-t-transparent bg-transparent px-3 py-4  font-sans text-lg lg:text-lg font-normal text-white outline-none transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 ${errors.input ? 'border-red-500' : ''} `}
                            placeholder=" "
                            {...register("input", { 
                                required: true,
                                validate: value => onlyLetters(value) || "Solo se permiten letras"
                            })}
                        />
                        <label
                            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 lg:-top-3 flex h-full w-full select-none !overflow-visible truncate text-lg  font-normal leading-tight !text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-white before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white after:transition-all peer-placeholder-shown:text-lg  peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-lg  peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 lg:text-xl"
                        >
                            Solo acepta letras
                        </label>
                        <button type="submit" className=" absolute right-4 top-1/2 transform -translate-y-1/2"  ><BsFillSendFill />
                        </button>
                    </div>
                </form>
                {errors.input && <span className="text-red-500 text-sm lg:mt-5 lg:text-lg">Solo se permiten letras</span>}
            </div>
        </div>
    );
};

export default Input;
