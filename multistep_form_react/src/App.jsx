// Components
import UserForm from './components/userForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'

// icons
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'

// Hooks
import { userForm } from './hooks/useForm'

import './App.css'

function App() {
  const formComponents = [<UserForm/>, <ReviewForm/>, <Thanks/>]

  const {currentStep, currentComponents, chagesStep, isLastStep, isFirstStep} = userForm(formComponents)
  
  return (
    <>
      <div className="app">
        <header className="header">
          <h2>Deixe sua avliação</h2>
          <p>
            Fimcamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto
          </p>
        </header>
        <div className="form-container">
          <p>etapas</p>
          <form onSubmit={(e) => chagesStep(currentStep + 1, e)}>
              <div className="inputs-container">{currentComponents}</div>
            <div className="actions">
              {!isFirstStep && (
                <button type='button' onClick={() => chagesStep(currentStep - 1)}>
                <span>Valtar</span>
                <GrFormPrevious />
              </button>
              )}
              {!isLastStep ? (
                 <button type='submit'>
                 <span>Avançar</span>
                 <GrFormNext />
               </button>
              ): (
                <button type='button'>
                <span>Avançar</span>
                <FiSend />
              </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
