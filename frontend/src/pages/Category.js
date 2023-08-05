import React from 'react';
import {
    FooterHeadContainer,
    FooterHeadText,
    Header,
    CategoryList,
    Button,
    Input,
    CategoryListContainer,
    NoteContainer,
    GlobalStyle,
    Bg,
} from '../styles';
import backgroundImage from '../bg-image.jpg';

const Category = () => {
  return (
    <div>
    <GlobalStyle />
    <Bg backgroundImage={backgroundImage}>

<NoteContainer>
<CategoryListContainer>

<Header>Title 1</Header>

        <CategoryList>
          <input type="checkbox" />
          <Input
            name="desc"
            type="text"
            label="Description"
            placeholder="Add List Item"
          />
        </CategoryList>

        <CategoryList>
          <input type="checkbox" />
          <Input
            name="desc"
            type="text"
            label="Description"
            placeholder="Add List Item"
          />
        </CategoryList>
        <CategoryList>
        <Button> 
          + 
          {/* funtionality to be added */}
        </Button>
        </CategoryList>

        </CategoryListContainer>
        <FooterHeadContainer>
            <FooterHeadText>
                Note App - Made by Team Coderizz
            </FooterHeadText>
        </FooterHeadContainer>
    </NoteContainer>
    </Bg>
    </div>
  );
};

export default Category;