//This code is for test purpose

import React from "react";
import {
  getCategory,
  addCategory,
  deleteCategory,
  editCategory,
} from "../api/api";

function CategoryTest() {
  const [categories, setcategories] = React.useState([]);
  const [newcategory, setNewcategory] = React.useState("");
  const [editIndex, setEditIndex] = React.useState(null);
  const [editedcategory, setEditedcategory] = React.useState("");

  React.useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      const response = await getCategory();
      setcategories(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleAddCategory = async () => {
    try {
      await addCategory(newcategory);
      setNewcategory("");
      fetchCategory();
    } catch (error) {
      console.error("Error adding todos:", error);
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await deleteCategory(id);
      fetchCategory();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleEditCategory = async () => {
    try {
      await editCategory(editIndex, editedcategory);
      setEditIndex(null);
      setEditedcategory("");
      fetchCategory();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <div>
      <h2>Category List</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat._id}>
            {editIndex === cat._id ? (
              <>
                <input
                  type="text"
                  value={editedcategory}
                  onChange={(e) => setEditedcategory(e.target.value)}
                />
                <button onClick={handleEditCategory}>Save</button>
              </>
            ) : (
              <>
                {cat.name}
                <button onClick={() => handleDeleteCategory(cat._id)}>
                  Delete
                </button>
                <button
                  onClick={() => {
                    setEditIndex(cat._id);
                    setEditedcategory(cat.name);
                  }}
                >
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newcategory}
        onChange={(e) => setNewcategory(e.target.value)}
      />
      <button onClick={handleAddCategory}>Add</button>
    </div>
  );
}

export default CategoryTest;
