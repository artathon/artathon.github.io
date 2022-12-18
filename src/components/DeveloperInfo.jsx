import React from "react"

export default function DeveloperInfo({ name, degree, imgUrl, link, gradDate }) {
    return (
        <div className="dev">
            <div>
                <a href={link} target='_blank'>
                    <img src={imgUrl}
                    alt={name}
                    className='developer-picture'
                    />
                </a>
                <div className="about">
                    <h3>{name}</h3>
                    <p>{degree}</p>  
                    <p>{gradDate}</p> 
                </div>
            </div>
        </div>
    )
}