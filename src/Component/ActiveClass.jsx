import { CardData } from "./Card/CardData";
import Card from "./Card/Card";

function ActiveClass() {

    return(
            <div className="class-content-container">
                {CardData.map((data, index) => (
                    <Card
                    key={index}
                    topic={data.topic}
                    date={data.date}
                    status={data.status}
                    classCode={data.classcode}
                    zoomLink={data.zoomlink}
                    time={data.time}
                    />
                ))}
            </div>
    )
}

export default ActiveClass;