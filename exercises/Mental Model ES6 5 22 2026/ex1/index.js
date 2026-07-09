function transformToObject(users) {
    let result = {};

    for (const user of users) {
        result[user.id] = user.name;
    }

    return result;
}

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const transformed = transformToObject(users);
console.log(transformed);