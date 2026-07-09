function extractUserData(user, arg){
    const {
        id,
        profile: {
            name,
            preferences: { theme }
        }
    } = user;

    return { id, name, theme };

}


const user = {
  id: 1,
  profile: {
    name: "John Doe",
    email: "john@example.com",
    preferences: {
      theme: "dark",
      notifications: true
    }   
  },
};

// Test cases
console.log(extractUserData(user, ['id', 'profile.name', 'profile.preferences.theme']));
// Expected: { id: 1, name: "John Doe", theme: "dark" }
