import React from "react"

export default function JudgeInfo({ name, department, title, imgUrl, link }) {
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
                    <h3 style={{fontWeight: 'normal'}}>{department}</h3>  
                    <p style={{fontSize: 'small'}}>{title}</p> 
                </div>
            </div>
        </div>
    )
}