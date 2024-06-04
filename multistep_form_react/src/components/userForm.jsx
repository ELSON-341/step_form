
const UserForm = () => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input type="text" name="name" id="name" required  placeholder="Digite sue nome"/>
      </div>
      <div className="form-control">
        <label htmlFor="email">Nome:</label>
        <input type="email" name="email" id="email" required placeholder="Digite seu e-mail"/>
      </div>
    </div>
  )
}

export default UserForm