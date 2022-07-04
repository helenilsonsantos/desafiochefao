import React from 'react';
import * as S from "./styled"


const Container = ({children}:{children: React.ReactNode}) => (
    <S.StyledContainer>
        {children}
    </S.StyledContainer>
)

export default Container;