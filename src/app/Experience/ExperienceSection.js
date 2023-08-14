

export default function ExperienceSection(props) {
    const {position, date, description} = props;
    return(
        <div className="ExperienceSection">
            <div className="ExperienceText">
                <div className="Position">
                    <p>{position}</p>
                </div>
                <div className="ExperienceTextSection">
                    <p>{date}</p>
                </div>
                <div className="ExperienceTextSection">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}