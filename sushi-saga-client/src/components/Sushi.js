import React, { Fragment } from 'react'

const Sushi = (props) => {
  const { sushi, eaten } = props
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.eat(sushi)}>
        { 
            eaten.includes(sushi) ?
            null
          :
            <img src={sushi.img_url} alt={sushi.name} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi