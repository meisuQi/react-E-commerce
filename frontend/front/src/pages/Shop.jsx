import React from 'react'
import Hero from '../component/Hero/Hero'
import Popular from '../component/popular/popular'
import Offer from '../component/Offers/Offer'
import NewCollection from '../component/NewCollections/NewCollection'
import NewsLetter from '../component/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
     <Hero/>
     <Popular/>
     <Offer/>
     <NewCollection/>
     <NewsLetter/>
    </div>
  )
}

export default Shop