import React, { useId, useRef } from 'react'

// function Input() {
//   return (
//     <div>
//     </div>
//   )
// } can do this but prefer to do arrow fucntions better as more intuative

const Input = React.forwardRef(function Input({
    label,
   type="text",
   classname = "",
   ...props},ref){
    const id=  useId();
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'
            htmlFor={id}>
                {label}
                </label>}
            <input type={type}
            className={`${classname}`}
            ref={ref} //we pass ref from here and take access access of state thereas
            {...props}
            id={id}
             />
        </div>
    )
   })



export default Input
