// Components
import UserForm from './components/userForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import Steps from './components/Steps'

// icons
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'

// Hooks
import { userForm } from './hooks/useForm'
import { useState } from 'react' 

import './App.css'

const formTemplete = {
  name: '',
  email: '',
  review: '',
  comment: ''
}

function App() {
  const [data, setData] = useState(formTemplete)

  const updeteFieldHandler = (key, value) => {
    setData((prev => {
      return {...prev, [key]: value}
    }))
  }
  
  const formComponents = [
  <UserForm data={data} updeteFieldHandler={updeteFieldHandler}/>,
  <ReviewForm data={data} updeteFieldHandler={updeteFieldHandler}/>,
  <Thanks data={data}/>]

  const {currentStep, currentComponents, chagesStep, isLastStep, isFirstStep} = userForm(formComponents)
  
  return (
    <>
      <div className="app">
        <header className="header">
          <h2>Deixe sua avaliação</h2>
          <p>
            Fimcamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto
          </p>
        </header>
        <div className="form-container">
          <Steps currentStep={currentStep}/>
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
