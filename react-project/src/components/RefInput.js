import React, {useRef} from 'react';

const RefInput = () => {

    let ref = useRef()

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(ref.current.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={ref}/>
                <button>Принять</button>
            </form>
        </div>
    );
};

export default RefInput;