import TechGridItem from './TechGridItem';
import Title from './Title';

export default function About() {
    return(
        <div className="About">
            <Title titleName="About Me" />
            <div className="AboutText">
                <div className="Me">
                    <div className="MeFirst">
                        Hey, I'm Frank! I am sophomore studying Computer Science at the University of Michigan,
                        Ann Arbor. I am currently looking for a software eningeering internships for Summer 2024.
                        Please contact me through
                    </div> 
                    <a className="LinkedinLink" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/frank-fang-b7a20b21a/">Linkedin</a>
                    <div className="MeThird">
                        for any questions!
                    </div>
                </div>

                <div className="Technologies">
                    Lanuages and Technologies that I have worked with:
                    <div className="TechGrid">
                        <TechGridItem itemName="C++" />
                        <TechGridItem itemName="ReactJS" />
                        <TechGridItem itemName="Git" />
                        <TechGridItem itemName="Python" />
                        <TechGridItem itemName="ExpressJS" />
                        <TechGridItem itemName="TensorFlow" />
                        <TechGridItem itemName="Javascript" />
                        <TechGridItem itemName="HTML/CSS" />
                        <TechGridItem itemName="PostMan" />
                    </div>
                </div>
            </div>
        </div>
    )
}