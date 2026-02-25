const UserCard = ({name, age, city}) => {
  return (
    <div className="user-card">
      <h2>Имя: {name}</h2>
      <p>Возраст: {age}, город: {city}</p>
    </div>
  )
}
export default UserCard