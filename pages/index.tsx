import type { NextPage } from 'next'

import styles from '../styles/Home.module.css'

import WelcomeHero from '@/components/WelcomeHero'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <WelcomeHero />
    </div>
  )
}

export default Home
