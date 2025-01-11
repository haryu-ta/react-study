import { detailType } from '../type/type'
import "../assets/css/Card.css"

const Card = ({ content }: { content: detailType }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={content.sprites.front_default} alt="" />
      </div>
      <h3 className="cardName">
        {content.name}
      </h3>
      <div className="cardTypes">
        <div>タイプ</div>
        {content.types.map((type) => {
          return (
            <div key={type.slot}>
              <span className="typeName">{type.type.name}</span>
            </div>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">重さ:{content.weight}</p>
        </div>
        <div className="cardData">
          <p className="title">高さ:{content.height}</p>
        </div>
        <div className="cardData">
          <p className="title">アビリティ:{content.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Card