function fetchUserTodos() {
  const usersUrl = 'https://jsonplaceholder.typicode.com/users';
  const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

  return Promise.all([
    fetch(usersUrl).then(res => {
      if (!res.ok) throw new Error(`Failed to fetch users: ${res.status}`);
      return res.json();
    }),
    fetch(todosUrl).then(res => {
      if (!res.ok) throw new Error(`Failed to fetch todos: ${res.status}`);
      return res.json();
    })
  ])
    .then(([users, todos]) => {
        const result = [];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        
        const matchingTodos = [];
        for (let j = 0; j < todos.length; j++) {
            if (todos[j].userId === user.id) {
                matchingTodos.push(todos[j]);
            }
        }

        result.push({
        ...user,
        todos: matchingTodos
        });
    }

    return result;
    });
}

fetchUserTodos()
  .then(data => console.log(data[1]))
  .catch(err => console.error('Error fetching data:', err));





//   .then(([users, todos]) => {
//   return users.map(user => ({
//     ...user,
//     todos: todos.filter(todo => todo.userId === user.id)
//   }));
// });