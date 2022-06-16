import React from 'react'
import { Footer } from '../Pages/Footer/Footer'
import DecorToSeize from '../Pages/Home/DecorToSeize'
import GotYourStyle from '../Pages/Home/GotYourStyle'
import { NewWaysToBring } from '../Pages/Home/NewWaysToBring'
import RedTagSale from '../Pages/Home/RedTagSale'
import SummerReady from '../Pages/Home/SummerReadyBedroom'
import TrendingSearches from '../Pages/Home/TrendingSearch'

export default function Home() {
  return (
    <div>
      <RedTagSale/>
    <SummerReady/>
    <NewWaysToBring/>
    <DecorToSeize/>
    <GotYourStyle/>
    <TrendingSearches/>

    </div>
  )
}
