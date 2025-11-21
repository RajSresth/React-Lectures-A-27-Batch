import React from 'react'

const Shimmer = () => {
  return (
   <div>
         <div className='shimmer-container'>
            {new Array(4).fill("").map((element,index) => <div key={index} className="shimmerCard"></div>)}
        </div>
   </div>
  )
}

export default Shimmer

// [___, ____, _____,_____]  => ["", "", "", ""]