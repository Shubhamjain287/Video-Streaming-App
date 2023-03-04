import React from 'react'

const ButtonCategory = () => {

  const ButtonCategoryList = ["All", "Music", "Live", "Gaming", "T-Series", "Coding", "Javascript", "React", "Node", "SQL" , "New To You", "Recently Uploaded"];  

  return (
    <div className='p-2 flex'>
        {
            ButtonCategoryList.map((category) => {
                return <button className='m-2 px-3 py-2 bg-gray-400 rounded-md'> { category } </button>
            })
        }
    </div>
  )
}

export default ButtonCategory;