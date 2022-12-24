import React, {useState} from "react"
import { BrowserView, MobileView } from "react-device-detect";
import useDrivePicker from "react-google-drive-picker/dist"
import UploadedInformation from "./UploadedInformation";

export default function SubmissionPortal() {

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [inspiration, setInspiration] = useState("");
  const [ai, setAi] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  return (
      
      <>
        <BrowserView>
        <div className="box">
          <div className="row">
            <div className="information-collection">
              <form className="upload-form">
                <input
                id="choose-file-btn"
                type = 'file' 
                value = { selectedFile } 
                onChange = {(e) => setSelectedFile(e.target.value)} />

                <input
                  placeholder="Artwork Title"
                  type = 'text'
                  value = { title }
                  onChange = {(e) => setTitle(e.target.value)} />
                
                <input
                  placeholder="Artist Name"
                  type = 'text'
                  value = { name }
                  onChange = {(e) => setName(e.target.value)} />

                <input
                  placeholder="Inspiration"
                  type = 'text'
                  value = { inspiration }
                  onChange = {(e) => setInspiration(e.target.value)} />

                <input
                  placeholder="AI Used"
                  type = 'text'
                  value = { ai }
                  onChange = {(e) => setAi(e.target.value)} />
              </form>
              <button className='upload-btn' onClick={() => handleOpenPicker()}>Upload Artwork</button>
            </div>
            <UploadedInformation />
          </div>
        </div>
        </BrowserView>
        <MobileView>
          <h3>This feature is not available on mobile</h3>
        </MobileView>
      </>
  )
}
