import Image from 'next/image'

interface Ability {
  name: string
  image: string
}

interface PlayerProps {
  name: string
  images: string
  abilities: Array<Ability>
}

const Player = ({ name, images, abilities }: PlayerProps) => {
  return (
    <div className="bg-gray-900 w-80">
      <h1 className="font-hero rotate-90 w-3 text-6xl">{name}</h1>
      <Image
        className="relative"
        src={images}
        alt=""
        layout="responsive"
        width="352"
        height="592"
      />
      <div className="flex items-center justify-around p-3">
        {abilities.map((item, index) => (
          <Image
            key={index}
            src={item.image}
            alt={item.name}
            width={30}
            height={30}
          />
        ))}
      </div>
    </div>
  )
}

export default Player
