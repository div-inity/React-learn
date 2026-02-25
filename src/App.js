import UserList from './modules/UserList.js'
const users = [
  { id: 1, name: 'Анна', age: 25, city: 'Москва' },
  { id: 2, name: 'Иван', age: 30, city: 'СПб' },
  { id: 3, name: 'Мария', age: 28, city: 'Казань' }
];
function App() {
  return <UserList users={users} />
}
export default App;