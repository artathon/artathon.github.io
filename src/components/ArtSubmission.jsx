import React from "react"
import { BrowserView, MobileView } from "react-device-detect";
import useDrivePicker from "react-google-drive-picker/dist"
import { BrowserRouter } from "react-router-dom";

export default function ArtSubmission() {
  return (
      
      <div>
        <BrowserView>
          <button className='upload-btn' onClick={() => handleOpenPicker()}>Upload Artwork</button>
          <div className="art-information">
            <h6>After upload, set uploadState == true and remove upload artwork button</h6>
            <img src='' alt='An image is displayed here'/>
            <p>Title</p><span>A look over life</span>
            <p>Artist</p><span>Me</span>
            <p>Inspiration</p><span>You</span>
            <p>AI used</p><span>Not used</span>
          </div>
        </BrowserView>
        <MobileView>
          <h3>This feature is not available on mobile</h3>
        </MobileView>
      </div>
  )
}
