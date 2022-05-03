import type { NextPage } from 'next'
import Header from '../components/Header'
import Player from '../components/Player'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Player
        name="PHOENIX"
        images="/phoenix.png"
        abilities={[
          { name: 'habilidade1', image: '/p1.png' },
          { name: 'habilidade2', image: '/p2.png' },
          { name: 'habilidade3', image: '/p3.png' },
          { name: 'habilidade4', image: '/p4.png' }
        ]}
      />
    </>
  )
}

export default Home
