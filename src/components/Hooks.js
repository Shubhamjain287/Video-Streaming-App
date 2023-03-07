import React, { useMemo } from 'react'

const Hooks = () => {

    const getPrimeNumber = (n) => {
        let result = 0;
        
        let i=1;
        while(n!=0){
            if(i%i==0){
                n--;
            }
            i++;
        }
    
        return result;
      }

  const prime = getPrimeNumber(7);

  return (
    <div className=' col-span-11'> 
        <h1 className='font-bold text-2xl m-2 p-2'> Hooks </h1>
        <div className='m-2 p-2 border border-black w-80 h-80'>

        </div>
    </div>
  )
}

export default Hooks;