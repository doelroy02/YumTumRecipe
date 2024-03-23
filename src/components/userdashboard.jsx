import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
//code   
import React, { useState } from 'react';

const UserDashboard = () => {

    const [searchHistory, setSearchHistory] = useState([]);
                const [recipeName, setRecipeName] = useState('');
        const [favoriteRecipes, setFavoriteRecipes] = useState([]);

 


  const handleFavoriteToggle = (recipeName) => {
    if (favoriteRecipes.includes(recipeName)) {
      setFavoriteRecipes(favoriteRecipes.filter(recipe => recipe !== recipeName));
    } else {
      setFavoriteRecipes([...favoriteRecipes, recipeName]);
    }
  }; 
   const handleRecipeSubmit = () => {
    // Here you can perform submission logic
    // For demonstration, we're just logging the search history
    console.log('Search History:', searchHistory);
    setSearchHistory([...searchHistory, recipeName]);
    setRecipeName(''); // Clear input field after submission
  };
  const handleRecipeNameChange = (text) => {
    setRecipeName(text);
  };

  return (
    <View style={{ flex: 1 }}> <View style={{ flexDirection: 'row', margin: 10 }}><TextInput
          style={{ flex: 1, borderWidth: 1, borderColor: 'gray', padding: 5 }}
     value={recipeName}
          placeholder="Enter recipe name to search" onChangeText={handleRecipeNameChange}
        />
        <TouchableOpacity
          onPress={handleRecipeSubmit}
          style={{ backgroundColor: 'blue', padding: 10, marginLeft: 10 }}
        >
          <Text style={{ color: 'white' }}>Search</Text>    </TouchableOpacity>  </View>  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
        <ScrollView style={{ flex: 1, marginRight: 5 }}>
          <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Here is the Search History</Text>
          {searchHistory.map((search, index) => (
            <TouchableOpacity key={index} onPress={() => console.log('Search History:', search)}>
              <Text>{search}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <ScrollView style={{ flex: 1, marginLeft: 5 }}>

          <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Favorite Recipes</Text>


          {favoriteRecipes.map((recipe, index) => (
            <TouchableOpacity key={index} onPress={() => handleFavoriteToggle(recipe)}>
              <Text>{recipe}</Text>
            </TouchableOpacity>
             ))}</ScrollView></View></View>
  );
};

export default UserDashboard;
