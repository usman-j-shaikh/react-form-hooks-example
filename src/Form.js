import React from "react";
import { useForm } from "react-hook-form";
import InputField from "./components/InputField";
import DropDownField from "./components/DropdownField";

function Form() {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors }
    } = useForm();

    const selectedOption = watch("dropdown1", "");

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }; // your form submit function which will invoke after successful validation

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputField register={register} errors={errors} />
            <DropDownField register={register} errors={errors} selectedOption={selectedOption} />
            
            <button type="submit" className="w-100">Submit</button>
            <button
                type="button"
                className="reset w-100"
                onClick={() => {
                    reset({
                        name: '',
                        dropdown1: ''
                    })
                }}
            >Reset</button>
        </form>
    );
}

export default Form