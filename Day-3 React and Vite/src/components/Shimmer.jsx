import React, { Fragment } from 'react'

const Shimmer = () => {
  return (
   <Fragment>
         <div className='shimmer-container'>
            {new Array(4).fill("").map((element,index) => <div key={index} className="shimmerCard"></div>)}
        </div>
   </Fragment>
  )
}

export default Shimmer

// [___, ____, _____,_____]  => ["", "", "", ""]