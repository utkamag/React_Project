import React from 'react';
import styled from 'styled-components'

const StyledComponentTest = () => {

    //Первый стилизованный компонент

    const StyledTest = styled.div`
      font-family: "Arial Black";
      color: antiquewhite;
    `

    return (
        <StyledTest>
            <div>123</div>
        </StyledTest>
    );
};

export default StyledComponentTest;