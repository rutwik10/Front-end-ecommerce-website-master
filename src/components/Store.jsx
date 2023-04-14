import React from 'react'
import { CartState } from './context/Context'
import SingleProduct from './SingleProduct'
import './styles.css'

const Store = () => {

  const {state:{products}} = CartState()

  return (
    <div className='home'>
      <div className='productcontainer'>
        {
          products.map((prod) => {
            return <SingleProduct prod={prod} key={prod.id}/>
          })
        }
      </div>
    </div>
  )
}

export default Store
