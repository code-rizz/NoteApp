import React from 'react';
import {
    FooterHeadContainer,
    FooterHeadText,
    Header,
    NoteTitle,
    CategoryList,
    Button,
    Input,
    Bg,
    CategoryListContainer,
    NoteContainer,
    GlobalStyle
} from '../styles';
import backgroundImage from '../bg-image.jpg';
const Home = () => {
  return (
    <div>
    <GlobalStyle />
    <Bg backgroundImage={backgroundImage}>

<NoteContainer>
<CategoryListContainer>
<Header>Note App</Header>

        <CategoryList>
        <NoteTitle>1</NoteTitle>
        <Input
                name="title"
                type="text"
                label="Title"
                placeholder="Add Item"
        />
        </CategoryList>

        <CategoryList>
        <NoteTitle>2</NoteTitle>
        <Input
                name="title"
                type="text"
                label="Title"
                placeholder="Add Item"
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

export default Home;