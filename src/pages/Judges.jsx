import React from "react"
import judgeData from "../data/judgeData"
import JudgeInfo from "../components/JudgeInfo"

export default function Judges() {
    return (
        <div className="group-container">
            <h1>Judges</h1>
            <div className="person-container">
                {judgeData.map(judge => (
                    <JudgeInfo 
                        name={judge.name}
                        department={judge.department}
                        title={judge.title}
                        imgUrl={judge.imgUrl}
                        link={judge.link}
                    />
                ))}  
            </div>
        </div>
    )
}