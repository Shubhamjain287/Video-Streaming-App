import React from 'react'
import { Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs";

const ButtonCategory = () => {

  const ButtonCategoryList = ["All", "Music", "Live", "Gaming", "T-Series", "Coding", "Javascript", "React", "Node", "SQL", "Engineering" , "Learning","Hacking","New To You", "Recently Uploaded"];  

  return (
    <div className='flex items-center justify-between'>
    <div>
      <BsFillArrowLeftCircleFill size="2rem" className='mx-4 cursor-pointer' />
    </div>
    <div className='m-4 flex items-center w-full overflow-auto'>
        {
            ButtonCategoryList.map((category,index) => {
                return <Link to={`/results?search_query=${category}`} key={index} className='m-1 p-2 bg-blue-200 rounded-md text-sm font-semibold hover:bg-black hover:text-white'> { category } </Link> 
            })
        }
    </div>
        <BsFillArrowRightCircleFill size="2rem" className='mx-4 cursor-pointer' />
    </div>
  )
}

export default ButtonCategory;