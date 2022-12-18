import React from "react"
import devData from "../data/devData"
import DeveloperInfo from "../components/DeveloperInfo"

export default function Developers() {
    return (
        <div className="group-container">
            <h1 className="section-header">Developers</h1>
            <div className="person-container">
                {devData.map(dev => (
                    <DeveloperInfo 
                        name={dev.name}
                        degree={dev.degree}
                        gradDate={dev.gradDate}
                        imgUrl={dev.imgUrl}
                        link={dev.link}
                    />
                ))}  
            </div>
        </div>
    )
}