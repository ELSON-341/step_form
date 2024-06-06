import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

import './Thanks.css'

const Thanks = ({data}) => {
  return (
    <div className="Thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importonte, em breve você receberá um cupom de 10% de desconto para a sua próxima compra.
      </p>
      <p>
        Para concluir sua avalição clique no botão de Enviar abaixo.
      </p>
      <h3>Aqui está o resumo da sua avalição:</h3>
      <p className="review-data">
        <span>Satisção com o produto:</span>
      </p>
      <p className="review-data">
        <span>Comentáreo:</span>
      </p>
    </div>
  )
}

export default Thanks