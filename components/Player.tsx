import Image from 'next/image'

interface Ability {
  name: string
  image: string
}

interface PlayerProps {
  country: string
  name: string
  images: string
  abilities: Array<Ability>
}

const Player = ({ name, images, abilities, country }: PlayerProps) => {
  return (
    <div className="bg-card w-80 rounded-tl-lg">
      <div className="rotate-90 w-10">
        <p className="text-red-600 text-xl w-40">{country}</p>
        <h1 className="font-hero text-white text-6xl">{name}</h1>
      </div>
      <Image
        className="relative"
        src={images}
        alt=""
        layout="responsive"
        width="300"
        height="480"
      />
      <div className="bg-card flex items-center justify-around p-3 border-2 border-sky-20 translate-x-2.5 translate-y-2.5">
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
