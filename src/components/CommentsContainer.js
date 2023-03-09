import React from 'react';

const commentData = [
  {
    name: "Shubham Jain",
    comment: "Hello Shubham, How are Youu it is an Comment !!",
    replies : [
      {
        name: "Sakshi Raghuwanshi",
        comment: "Hello Sakshi, How are Youu it is an Comment !!",
        replies : [
    
        ]
      }
    ]
  },
  {
    name: "Sakshi Raghuwanshi",
    comment: "Hello Sakshi, How are Youu it is an Comment !!",
    replies : [

    ]
  },
  {
    name: "Yash Sharma",
    comment: "Hello Yash, How are Youu it is an Comment !!",
    replies : [
      {
        name: "Bhavna Tikare",
        comment: "Hello Bhavna, How are Youu it is an Comment !!",
        replies : [
    
        ]
      }
    ]
  },
  {
    name: "Tanveer Saini",
    comment: "Hello Tanveer, How are Youu it is an Comment !!",
    replies : [
      {
        name: "Shubhanjali Singh",
        comment: "Hello Shubhanjali, How are Youu it is an Comment !!",
        replies : [
          {
            name: "Harsh Sanchore",
            comment: "Hello Harsh, How are Youu it is an Comment !!",
            replies : [
              
            ]
          }
        ]
      },
      {
        name: "Sudhishka Lambhate",
        comment: "Hello Sudhishka, How are Youu it is an Comment !!",
        replies : [
          
        ]
      }
    ]
  },
  {
    name: "Vinit Solanki",
    comment: "Hello Vinit, How are Youu it is an Comment !!",
    replies : [

    ]
  }
]

const Comment = ({comments}) => {
  
    const { name, comment, replies } = comments;

    return (
      <div className='m-5 flex bg-gray-300 rounded-lg'>
      <div className='mx-2 p-2'>
        <img className='h-10' alt='Profile' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&usqp=CAU" />
      </div>
      <div>
        <p className='font-bold'> { name } </p>
        <p> { comment } </p>
      </div>
      </div>
    )
}

const CommentList = ({comments}) => {
  return comments.map((comment,index) => {
    return (
      <div key={index}>
        <Comment comments={comment} />
        <div className='ml-10 border border-l-black'>
          {/* <Comment key={index} comments={comment} /> */}
          {/* Recursion --> Nested N Level Comments */}
          <CommentList comments={comment.replies} />
        </div>
      </div>
    )
  })
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2 col-span-11 w-[1000px]'>
        <h1 className='font-bold text-2xl'> Comments </h1>
        <CommentList comments={commentData} />
    </div>
  )
}

export default CommentsContainer;