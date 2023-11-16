/* eslint-disable no-unused-vars */
import React , {useContext} from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';
import HeroSection from '../../components/HeroSection/HeroSection';
import Filter from '../../components/filter/Filter'

function Home() {
const context = useContext(myContext);

const {state ,color} = context;
  return (
    <Layout >
           <HeroSection />
           <Filter />
            </Layout>
  )
}

export default Home