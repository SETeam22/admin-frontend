import React, { useState } from 'react';

const CheckboxOne = ({ text }: { text: string }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div>
      <label
        htmlFor={`checkboxLabel${text}`}
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id={`checkboxLabel${text}`}
            className="sr-only"
            checked={isChecked}
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <div
            className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
              isChecked && 'border-primary bg-gray dark:bg-transparent'
            }`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-sm ${isChecked && 'bg-primary'}`}
            ></span>
          </div>
        </div>
        {text}
      </label>
    </div>
  );
};

export default CheckboxOne;


// const CheckboxOne = ({ text }: { text: string }) => {
//   const [isChecked, setIsChecked] = useState<boolean>(false);

//   return (
//     <div>
//       <label
//         htmlFor="checkboxLabelOne"
//         className="flex cursor-pointer select-none items-center"
//       >
//         <div className="relative">
//           <input
//             type="checkbox"
//             id="checkboxLabelOne"
//             className="sr-only"
//             onChange={() => {
//               setIsChecked(!isChecked);
//             }}
//           />
//           <div
//             className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
//               isChecked && 'border-primary bg-gray dark:bg-transparent'
//             }`}
//           >
//             <span
//               className={`h-2.5 w-2.5 rounded-sm ${isChecked && 'bg-primary'}`}
//             ></span>
//           </div>
//         </div>
//         {text}
//       </label>
//     </div>
//   );
// };

// export default CheckboxOne;
