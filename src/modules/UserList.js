import UserCard from "./UserCard";
function UserList({ users }) {
  if (users.length === 0) {
    return <p>Нет пользователей для отображения</p>
  }
  
  return users.map(user => (
    <UserCard key={user.id} {...user} />
  ))
}
export default UserList