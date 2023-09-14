"use client";
import Title from '../Title';
import Navbar from '../Navbar';
import ExperienceSection from './ExperienceSection';


export default function Experience() {
    return(
        <div>
            <Navbar />
            <div className="Experience">
                <Title titleName="Experience" />
                <div className="ExperienceSectionWrapper">
                    <ExperienceSection position="EECS 203(Discrete Mathematics) Instructional Aide" date="August 2023 - Present"
                    description="I host weekly discussions and office hours, where I am supporting students in learning course content. Additionally,
                    I also coordinate with the course staff to perform administrative duties such as making discussion slides and homework as well as reviewing
                    exam material" />

                    <ExperienceSection position="Coding Instructor @ iD Tech Camps" date="June 2023 - August 2023"
                    description="I taught groups of 5-8 students basic programming principles where I first
                    taught visual programming through Scratch and then transitioned into Python.
                    "/>

                    <ExperienceSection position="Tech Consultant @ University of Michigan" date="January 2023 - May 2023"
                    description="I served as the face of the IT department where I interacted with customers, analyzed customers' technological problems,
                    performed troubleshooting, created tickets, and also worked at checkout.
                    " />
                </div>
            </div>
        </div>
    )
}