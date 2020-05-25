const button = document.getElementById('addBtn');
const lists = document.getElementById('lists');

//Users一覧の取得
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return users;
}

//Listの表示
async function listUsers() {
  const users = await getUsers();
  //DOM操作
  users.forEach((user) => {
    const list = document.createElement('li');
    list.innerText = user.name;
    lists.appendChild(list);
  });
}

window.addEventListener('load', listUsers);

button.addEventListener('click', listUsers);
