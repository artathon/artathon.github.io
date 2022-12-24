import React from "react"

export default function UploadedInformation() {
    return (
        <div className="uploaded-information">
        <img className='uploaded-image' src='./artwork.jpg' alt='An image is displayed here'/>
        <p>Title</p><span>A look over life</span>
        <p>Artist</p><span>Me</span>
        <p>Inspiration</p><span>You</span>
        <p>AI used</p><span>Not used</span>
      </div>
    )
}