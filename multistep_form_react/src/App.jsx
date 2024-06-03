// components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import UserForm from './components/userForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'


import './App.css'
const formComponents = [<UserForm/>, <ReviewForm/>, <Thanks/>]


function App() {

  return (
    <>
      <header className="header">
        <h2>Deixe sua avliação</h2>
        <p>
          Fimcamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto
        </p>
      </header>
      <div className="form-container">
        <p>etapas</p>
        <form>
          <div className="inputs-container"></div>
          <div className="actions">
            <button type='button'>
              <span>Valtar</span>
              <GrFormPrevious />
            </button>
            <button type='submit'>
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
