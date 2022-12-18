import React from "react"
import facultyData from "../data/facultyData"
import FacultyInfo from "../components/FacultyInfo"

export default function Faculty() {
    return (
        <div className="group-container">
            <h1>Faculty</h1>
            <div className="person-container">
                {facultyData.map(faculty => (
                    <FacultyInfo 
                        name={faculty.name}
                        department={faculty.department}
                        title={faculty.title}
                        imgUrl={faculty.imgUrl}
                        link={faculty.link}
                    />
                ))}  
            </div>
        </div>
    )
}