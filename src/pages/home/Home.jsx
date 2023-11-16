/* eslint-disable no-unused-vars */
import React , {useContext} from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';

function Home() {
const context = useContext(myContext);

const {state ,color} = context;
  return (
    <Layout >
            Home</Layout>
  )
}

export default Home