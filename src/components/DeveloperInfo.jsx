import React from "react"

export default function DeveloperInfo({ name, degree, imgUrl, link, gradDate }) {
    return (
        <div className="person">
            <div>
                <a href={link} target='_blank'>
                    <img src={imgUrl}
                    alt={name}
                    className='picture'
                    />
                </a>
                <div className="about">
                    <h3 style={{fontSize: '20px'}}>{name}</h3>
                    <h3 style={{fontWeight: 'normal'}}>{degree}</h3>  
                    <p style={{fontSize: 'small'}}>{gradDate}</p> 
                </div>
            </div>
        </div>
    )
}