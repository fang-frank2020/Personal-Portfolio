'use client';
import { Image } from '@chakra-ui/react';

export default function Hero() {
    return(
        <div>
            <div className="HeroContainer">
                <div className="LeftSide">
                    <div className="Welcome">
                        <p>Hi, I'm Frank!</p>
                    </div>
                    <div className="Intro">
                        <span className="beginning">I am a </span>
                        <span className="changed"></span>
                        
                    </div>
                </div>
                <div className="RightSide">
                    <Image 
                    src='/img.jpg'
                    boxSize="35vw"
                    borderRadius="50%"
                    alt="personal picture"
                    />
                </div>
            </div>
        </div>
    )
}