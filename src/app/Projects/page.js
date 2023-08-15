import Navbar from "../Navbar";
import Title from "../Title";
import ProjectItem from "./ProjectItem";
import ProjectItemSecond from "./ProjectItemSecond";

export default function Projects() {
    return(
        <div>
            <Navbar />
            <div className="Projects">
                <Title titleName="Projects" />
                <ProjectItem title="TravelTour" date="Summer 2023" stackArray={["ReactJS", "ExpressJS", "PostMan"]}hasGit={true} gitLink="https://github.com/fang-frank2020/TravelTour"
                imageLink="../TravelTour.png" imageAlt="TravelTour image"
                description="I built this web application as a space where people can come together and share their thoughts about different travel
                locations that they have been to and/or read about new locations. Under every location, people can gain an understanding of the location
                by reading other peoples' posts and/or help other people get a better understanding of the location by creating their own posts!
                "/>

                <ProjectItemSecond title="Holidays" date="Summer/Fall 2022" stackArray={["HTML/CSS", "JavaScript", "Git"]}hasGit={true} gitLink="https://github.com/fang-frank2020/Holidays" 
                imageLink="../Holidays.png" imageAlt="Holidays image" description="As a person celebrating many different cultures
                and holidays, I would always lose track of when different holidays were. As a result, I created this website to display all
                of the various holidays from different countries around the world. This way, people would be able to find all the different
                holidays from different countries all on one website!
                "/> 

                <ProjectItem title="Cat & Dog Classification" date="Spring 2021" stackArray={["Python", "TensorFlow", "Pandas"]}hasGit={false}
                imageLink="../catDog.png" imageAlt="Cat & Dog Classification image"
                description="I built a model to classify dogs and cats and it achieved an accuracy of ~73%. This project was my entry into Machine
                Learning and Neural Networks and I learned a lot about Convolution Neural Networks(CNN) and how they are used to classify images.
                Additionally, I played around with different types of optimizers and different sizes of layers.
                " />

            </div>
        </div>
    )
}