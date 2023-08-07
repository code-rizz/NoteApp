import React from 'react';
import {
    Header,
    CategoryList,
    Button,
    Input,
    CategoryListContainer,
    NoteContainer,
    GlobalStyle,
    Bg,
    ScrollBox
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

const Category = () => {
  return (
    <div>
    <GlobalStyle />
    <Bg backgroundImage={backgroundImage}>

<NoteContainer>
<CategoryListContainer>

<Header>Title 1</Header>
<ScrollBox renderView={CustomView} >

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
          <input type="checkbox" />
          <Input
            name="desc"
            type="text"
            label="Description"
            placeholder="Add List Item"
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

export default Category;