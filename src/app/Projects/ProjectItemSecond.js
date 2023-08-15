'use client';
import { Image } from '@chakra-ui/react';

export default function ProjectItemSecond(props) {
    const {title, date, gitLink, imageLink, imageAlt, description} = props;
    return(
        <div className="ProjectItemWrapper">
            <div className="ProjectText">
                <div className="ProjectTitle">
                    <p>{title}</p>
                </div>
                <div className="ProjectDate">
                    <p>{date}</p>
                </div>
                <div className="GitBox">
                    <div className="GitImage">
                        <Image 
                            src="/github-mark.svg"
                            boxSize="3vw"
                            alt="github-mark"
                        />
                    </div>
                    <div className="GitName">
                        <a className="SourceCode" href={gitLink}>Source Code</a>
                    </div>
                </div>
                <div className="ProjectDescription">
                    <p>{description}</p>
                </div>
            </div>
            <div className="Image">
                <Image src={imageLink} alt={imageAlt} width="40em" height="25em"/>
            </div>
        </div>
    )
}