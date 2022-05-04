import type { NextPage } from 'next'
import Header from '../components/Header'
import Player from '../components/Player'

const Home: NextPage = () => {
  return (
    <div className="bg-tail h-screen">
      <Header />
      <div className="flex items-center justify-evenly mt-3">
        <Player
          name="PHOENIX"
          images="/phoenix.png"
          abilities={[
            { name: 'habilidade1', image: '/p1.png' },
            { name: 'habilidade2', image: '/p2.png' },
            { name: 'habilidade3', image: '/p3.png' },
            { name: 'habilidade4', image: '/p4.png' }
          ]}
          country="United Kingdom"
        />
        <Player
          name="JETT"
          images="/jett.png"
          abilities={[
            { name: 'habilidade1', image: '/jett/j1.png' },
            { name: 'habilidade2', image: '/jett/j2.png' },
            { name: 'habilidade3', image: '/jett/j3.png' },
            { name: 'habilidade4', image: '/jett/j4.png' }
          ]}
          country="South Korea"
        />
        <Player
          name="Sova"
          images="/sova.png"
          abilities={[
            { name: 'habilidade1', image: '/sova/s1.png' },
            { name: 'habilidade2', image: '/sova/s2.png' },
            { name: 'habilidade3', image: '/sova/s3.png' },
            { name: 'habilidade4', image: '/sova/s4.png' }
          ]}
          country="Russian"
        />
      </div>
    </div>
  )
}

export default Home
