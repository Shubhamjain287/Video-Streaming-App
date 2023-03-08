import React from 'react'
import { Link } from 'react-router-dom';

const ButtonCategory = () => {

  const ButtonCategoryList = ["All", "Music", "Live", "Gaming", "T-Series", "Coding", "Javascript", "React", "Node", "SQL" , "New To You", "Recently Uploaded"];  

  return (
    <div className='m-4 flex items-center'>
        {
            ButtonCategoryList.map((category,index) => {
                return <Link to={`/results?search_query=${category}`} key={index} className='m-1 p-2 bg-blue-200 rounded-md text-sm font-semibold'> { category } </Link> 
            })
        }
    </div>
  )
}

export default ButtonCategory;