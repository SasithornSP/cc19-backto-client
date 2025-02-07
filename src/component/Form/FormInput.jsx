import React from "react";

function FormInput({register,name}) {
  return (
    
      <input
        placeholder={name}
        type="text"
        {...register(name)}
        className="border w-full border-blue-200 round-md p-1 px-4"
      />
    
  );
}

export default FormInput;
