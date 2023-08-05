import React from "react";
// import Loading from './Ball in a pipe.gif'
const spinner1 = () => {
    return (
        // <div className='text-center'>
        //   <img src={Loading} alt="Loading" />
        // </div>

        <div className="text-center " >
            <div className="spinner-border my-3" role="status">
                {/* <span className="visually-hidden">Loading...</span> */}
            </div>
        </div>
    );
}

export default spinner1;