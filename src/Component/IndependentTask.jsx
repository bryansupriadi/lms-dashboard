import React from 'react';
import { studentData } from '../studentData.js';

function IndependentTask() {
    const latestStudentData = studentData[studentData.length - 1];

    return (
        <div className="independent-task-container">
            <h5 className="text-primary fs-6 font-weight-bold text-start" style={{ fontWeight: '600' }}>Tugas Mandiri</h5>
            <div className="independent-task-card" style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                width: '35vh',
                height: '150px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                padding: '10px',
                textAlign: 'left'
             }}>
                <div className='d-flex flex-column'>
                    <h5 style={{ fontSize: '18px', fontWeight: '700', marginTop: '2vh' }}>{latestStudentData.classCode}</h5>
                    <p style={{fontSize: '13px', marginBottom: '1px'}}>{latestStudentData.lastUpdate}</p>
                    <p style={{fontSize: '13px'}}>{latestStudentData.time} GMT +7</p>
                    <p style={{fontSize: '12px', color: '#2D76E5'}}>Lihat detail</p>
                </div>
                <img
                    src={latestStudentData.icon}
                    alt="Tugas Mandiri"
                    style={{ width: '15vh', height: '15vh', borderRadius: '8px' }}
                />
            </div>
        </div>
    );
}

export default IndependentTask;
