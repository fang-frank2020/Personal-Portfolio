import TechGridItem from '../TechGridItem';
import Title from '../Title';
import Navbar from '../Navbar';

export default function About() {
    return(
        <div>
            <Navbar />
            <div className="About">
                <Title titleName="About Me" />
                <div className="AboutText">
                    <div className="Me">
                        <div className="MeFirst">
                            <span>{`Hey, I'm Frank! I am a junior studying Computer Science at the University of Michigan,
                            Ann Arbor. I am currently looking for a software engineering internship for Summer 2024.
                            Please contact me through`}</span>
                        </div> 
                        <a className="LinkedinText" target="_blank" href="https://www.linkedin.com/in/frank-fang-b7a20b21a/">Linkedin</a>
                        <div className="MeThird">
                            for any questions!
                        </div>
                    </div>

                    <div className="Technologies">
                        Languages and Technologies that I have worked with:
                        <div className="TechGrid">
                            <TechGridItem itemName="C++" />
                            <TechGridItem itemName="C#" />
                            <TechGridItem itemName="ASP.NET (Blazor)" />
                            <TechGridItem itemName="Azure Portal" />
                            <TechGridItem itemName="ReactJS" />
                            <TechGridItem itemName="MySQL" />
                            <TechGridItem itemName="Python" />
                            <TechGridItem itemName="ExpressJS" />
                            <TechGridItem itemName="TensorFlow" />
                            <TechGridItem itemName="JavaScript" />
                            <TechGridItem itemName="NextJS" />
                            <TechGridItem itemName="HTML/CSS" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}