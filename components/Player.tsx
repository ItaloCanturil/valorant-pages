import Image from "next/image";

interface Ability {
  name: string;
  image: string;
}

interface PlayerProps {
  name: string;
  image: string;
  abilities: Array<Ability>;
}

const Player = ({ name, image, abilities }: PlayerProps) => {
  return (
    <>
      <Image src={image} alt="" layout="responsive" />
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
    </>
  );
};

export default Player;
