
    function UpcomingClass({upcomingClassInfo}) {

        const {classTime, className, topic} = upcomingClassInfo;
        return(
            <section className="content-upcoming d-flex flex-column align-items-start justify-content-center bg-white rounded-3 p-4">
                <h5 className="text-primary fs-6 font-weight-bold" style={{fontWeight: '600'}}>Kelas Mendatang</h5>
                <h6 className="">{classTime}</h6>
                <h4>{className} - {topic}</h4>
            </section>
        )

    }

    export default UpcomingClass;