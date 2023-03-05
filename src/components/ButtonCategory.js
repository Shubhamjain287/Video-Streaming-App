import React from 'react'

const ButtonCategory = () => {

  const ButtonCategoryList = ["All", "Music", "Live", "Gaming", "T-Series", "Coding", "Javascript", "React", "Node", "SQL" , "New To You", "Recently Uploaded"];  

  return (
    <div className='p-2 flex items-center'>
        {
            ButtonCategoryList.map((category,index) => {
                return <button key={index} className='m-2 px-3 py-2 bg-gray-300 rounded-md'> { category } </button>
            })
        }
    </div>
  )
}

export default ButtonCategory;