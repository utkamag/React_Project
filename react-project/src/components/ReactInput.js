import React, {useRef, useState} from 'react';

const ReactInput = () => {

    const [value, setValue] = useState("")

    const handleChange = (e) => {
      setValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(value)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={value} onChange={handleChange}/>
                <button>Принять</button>
            </form>
        </div>
    );
};

export default ReactInput;
