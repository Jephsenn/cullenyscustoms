import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Layout from '../components/layout'


const Home: NextPage = () => {
  return (
    <Layout page="home">
      <div className={styles.container}>
        <h1 className={styles.header_text}>Featured Designs</h1>
        <div className={styles.featured_container}>
          <div className={styles.design_card}></div>
          <div className={styles.design_card}></div>
          <div className={styles.design_card}></div>
          <div className={styles.design_card}></div>
          <div className={styles.design_card}></div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
