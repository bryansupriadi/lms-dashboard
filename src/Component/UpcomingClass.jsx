
function UpcomingClass({upcomingClassInfo}) {

    const {classTime, className, topic} = upcomingClassInfo;
    const cleanClassName = className.replace('-', '');

    return(
        <section className="content-upcoming d-flex flex-column align-items-start justify-content-center bg-white rounded-3 p-4">
            <h5 className="text-primary fs-6 font-weight-bold" style={{fontWeight: '600'}}>Kelas Mendatang</h5>
            <h6 className="text-secondary fs-6" style={{fontWeight: '500'}}>{classTime}</h6>
            <h4 className="text-dark fs-5" style={{fontWeight: '900'}}>{cleanClassName} - {topic}</h4>
        </section>
        )

    }
export default UpcomingClass;