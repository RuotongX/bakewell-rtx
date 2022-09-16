
import Image from 'next/image'
import bg from '../public/1.png'


function posterslide(props) {

    const styling = {
        backgroundImage: `url(${bg.src})`,
        width:"100%",
        height:"100%"
    }

    return(
        <Image
        src="/../public/1.png"
        layout="fill"
        sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                100vw"
      />
    ) 
};
export default posterslide;
