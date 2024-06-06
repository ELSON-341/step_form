
const UserForm = ({data, updeteFieldHandle}) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input type="text" name="name" id="name" required  placeholder="Digite sue nome" value={data.name || ""} onChange={(e) => updeteFieldHandle("name", e.target.value)}/>
      </div>
      <div className="form-control">
        <label htmlFor="email">Nome:</label>
        <input type="email" name="email" id="email" required placeholder="Digite seu e-mail" value={data.email || ""} onChange={(e) => updeteFieldHandle("email", e.target.value)}/>
      </div>
    </div>
  )
}

export default UserForm