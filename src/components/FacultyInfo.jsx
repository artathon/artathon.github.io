import React from "react"

export default function FacultyInfo({ name, department, title, imgUrl, link }) {
    return (
        <div>
            <div className="cont">
                <a href={link} target='_blank'>
                    <img src={imgUrl}
                    alt={name}
                    className='picture'
                    />
                </a>
                <div className="about">
                    <h3 style={{fontSize: '23px'}}>{name}</h3>
                    <h3 style={{fontWeight: 'normal'}}>{department}</h3>  
                    <p>{title}</p> 
                </div>
            </div>
        </div>
    )
}