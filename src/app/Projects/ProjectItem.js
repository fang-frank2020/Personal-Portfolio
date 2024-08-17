'use client';
import { Image } from '@chakra-ui/react';
import TechGridItem from '../TechGridItem';

export default function ProjectItem(props) {
    const {title, date, stackArray, hasGit, gitLink, imageLink, imageAlt, description} = props;

    var stack = stackArray || [];
    return(
        <div className="ProjectItemWrapper">
            <div className="Image">
                <Image src={imageLink} alt={imageAlt} width="40em" height="25em"/>
            </div>
            <div className="ProjectText">
                <div className="ProjectTitle">
                    <p>{title}</p>
                </div>
                <div className="ProjectDate">
                    <p>{date}</p>
                </div>
                <div className="ProjectDescription">
                    <p>{description}</p>
                </div>
                <div style={{"display": "flex", "flexDirection": "row", "marginTop": "2em"}}>
                    <div className="ProjectStack">
                        {stack.map((element) =>{
                            return(<TechGridItem key={title + element}itemName={element} />)
                        })}
                    </div>
                    {hasGit ? <div className="GitBox">
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
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}