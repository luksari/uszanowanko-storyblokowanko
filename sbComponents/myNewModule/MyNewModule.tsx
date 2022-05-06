import React from 'react';

import { MyNewModuleProps } from 'sbComponents/myNewModule/MyNewModule.types';
import { ContainerStyled, WrapperStyled } from 'sbComponents/myNewModule/MyNewModule.styles';

export const MyNewModule = ({ blok, ...props }: MyNewModuleProps) => {
  /**
   * Here we are spreading the rest of storyblok posts, which enables Storyblok special functionalities
   * e.g clicking an element changes the schema bar
   * */
  return (
    <WrapperStyled {...props}>
      <ContainerStyled>
        <h1>This is just an example component, do not use it in production environment!</h1>
        {/** This is the same name as the field that we've declared in storyblok */}
        <p>{blok.new_field}</p>
      </ContainerStyled>
    </WrapperStyled>
  );
};
