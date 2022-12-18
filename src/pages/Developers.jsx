import React from "react"
import devData from "../data/devData"
import DeveloperInfo from "../components/DeveloperInfo"

export default function Developers() {
    return (
        <div className="developers-container">
            <h1>Developers</h1>
            <div className="dev-container">
                {devData.map(dev => (
                    <DeveloperInfo 
                        name={dev.name}
                        degree={dev.degree}
                        gradDate={dev.gradDate}
                        imgUrl={dev.imgUrl}
                        link={dev.link}
                        linkName={dev.linkName}
                    />
                ))}  
            </div>
        </div>
    )
}