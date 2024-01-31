import { FaUser } from "react-icons/fa";

function ForumCard({ classText }) {
    return (
        <div className="forum-card-container">
            <div className="forum-card-content">
                <div className="forum-content-wrapper" style={{borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '10px', width: '35vh'}}>
                    <FaUser size={25} style={{ marginRight: '10px'}} />
                    <div className="forum-class-container">
                        <p className="forum-class" style={{fontSize: '14px', fontWeight: 'bold'}}>{classText}</p>
                    </div>
                    <p className="view-replies" style={{fontSize: '12px', color: '#2D76E5'}}>Lihat Balasan</p>
                </div>
            </div>
        </div>
    );
}

export default ForumCard;

