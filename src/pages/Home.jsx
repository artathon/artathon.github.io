import React, {useState, useEffect} from "react"
import SubmissionPortal from "../components/SubmissionPortal"
import JudgePortal from "../components/JudgePortal"

export default function Home() {

const [active, setActive] = useState(false)
    return (
        <div className="user-selection-container">
            <div className="user-selection">
                <button onClick={()=>setActive(true)}
                    className={`user-selection-btn ${active ? 'active' : ''}`} 
                    >
                    Judge
                </button>
                <button onClick={()=>setActive(false)}
                    className={`user-selection-btn ${!active ? 'active' : ''}`} 
                    type="button">
                    Artist
                </button>
            </div>

            <div className="portals">
                    {active && <JudgePortal /> }
                    {!active && <SubmissionPortal />}
            </div>
        </div>
    )
}