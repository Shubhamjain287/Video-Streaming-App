import React, { useMemo, useRef, useState } from 'react'

const Hooks = () => {

    const [input,setInput] = useState(2);
    const [theme, settheme] = useState(true);


    const findPrime = num => {
        let i, primes = [2, 3], n = 5;
        const isPrime = n => {
           let i = 1, p = primes[i],
           limit = Math.ceil(Math.sqrt(n));
           while (p <= limit) {
              if (n % p === 0) {
                 return false;
              }
              i += 1;
              p = primes[i];
           }
           return true;
        }
        for (i = 2; i <= num; i += 1) {
           while (!isPrime(n)) {
              n += 2;
           }
           primes.push(n);
           n += 2;
        };
        return primes[num - 1];
     }

  const cachedValue = useMemo(() => findPrime(input) , [input]);
//   const cachedValue = findPrime(input);

  let ref = useRef(1);

  return (
    <div className='col-span-11 flex'>
        <div> 
        <h1 className='font-bold text-2xl m-2 p-2'> Use Memo Hook </h1>
        <button className='p-2 mx-4 bg-green-400 rounded-lg' onClick={() => settheme(!theme)}> Change Theme</button>
        <div className={`m-2 p-2 border border-black w-80 h-80  ${theme ? `bg-gray-500 text-white ` : null}`}>
            Enter Number :- <input className='border border-black text-black' type="number" value={input} onChange={(e) => setInput(e.target.value)} />
            <h2 className='m-2'> {`Prime Number of ${input} is : ${cachedValue}`} </h2>
        </div>
    </div>
    <div className={` col-span-11`}> 
        <h1 className='font-bold text-2xl m-2 p-2'> Use Ref Hook </h1>
        <div className={`m-2 p-2 border border-black w-80 h-80  ${theme ? `bg-gray-500 text-white ` : null}`}>
        <h2 className='m-2'> {ref.current} </h2>
        {console.log(ref)}
        <button className='p-2 mx-4 bg-green-400 rounded-lg' onClick={() => {ref.current = ref.current + 1}}> Increment </button>
        </div>
    </div>
    </div>
  )
}

export default Hooks;