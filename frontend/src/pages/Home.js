import React from 'react';

import {
    Header,
    NoteTitle,
    CategoryList,
    Button,
    Input,
    Bg,
    CategoryListContainer,
    NoteContainer,
    ScrollBox,
    GlobalStyle,

} from '../styles';
import backgroundImage from '../bg-image.jpg';

// Your custom component to render the view
const CustomView = ({ style, ...props }) => (
        <div
          style={{
            ...style,
            overflowX: 'hidden', // Optionally, you can hide the x-axis scrollbar in the view
          }}
          {...props}
        />
      );

const Home = () => {
  return (
    <div>
    <GlobalStyle />
    <Bg backgroundImage={backgroundImage}>

<NoteContainer>
<CategoryListContainer>
<Header>Note App</Header>

<ScrollBox renderView={CustomView} >
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
        <NoteTitle>3</NoteTitle>
        <Input
                name="title"
                type="text"
                label="Title"
                placeholder="Add Item"
        />
        </CategoryList>

        <CategoryList>
        <NoteTitle>4</NoteTitle>
        <Input
                name="title"
                type="text"
                label="Title"
                placeholder="Add Item"
        />
        </CategoryList>

        <CategoryList>
        <NoteTitle>5</NoteTitle>
        <Input
                name="title"
                type="text"
                label="Title"
                placeholder="Add Item"
        />
        </CategoryList>
        <CategoryList>
        <NoteTitle>6</NoteTitle>
        <Input
                name="title"
                type="text"
                label="Title"
                placeholder="Add Item"
        />
        </CategoryList>
</ScrollBox>
        
        <CategoryList>
        <Button> 
          + 
          {/* funtionality to be added */}
        </Button>
        </CategoryList>

</CategoryListContainer>
</NoteContainer>
</Bg>
</div>

  );
};

export default Home;