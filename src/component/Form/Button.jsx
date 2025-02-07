import React from "react";
import { Loader } from 'lucide-react';

function Button({isSubmitting, Label}) {
  return (
      <button className="bg-blue-500 text-gray-200 px-2 py-2 rounded-md  hover:cursor-pointer">
        {isSubmitting 
        ? <div className="flex gap-2">
            <Loader className="animate-spin" />
            <p>Loading...</p>
            </div> 
        : <p>{Label}</p>}
        
      </button>
  );
}

export default Button;
