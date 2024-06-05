import {AiOutlineUser, AiOutlineStar} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'

import "./Steps.css"

const steps = ({ currentStep }) => {
  return <div className="steps">
    <div className="step active">
        <AiOutlineUser />
        <p>Indentificão</p>
    </div>
    <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
        <AiOutlineStar/>
        <p>Avaliacão</p>
    </div>
    <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
        <FiSend />
        <p>Envio</p>
    </div>
  </div>
}

export default steps