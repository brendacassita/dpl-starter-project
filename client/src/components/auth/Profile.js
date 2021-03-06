import React, { useContext, useState } from "react";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import { AuthContext } from "../../providers/AuthProvider";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import axios from "axios";
import { Button } from "react-bootstrap";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function Profile() {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');
  const [showUpload, setShowUpload] = useState(false)

  // what is happening here?
//   const auth = useContext(AuthContext)
 
  const {  user, setUser } = useContext(AuthContext)


  const upload = () =>{
    if(showUpload){
      return ////// ??????  how to return whole form upload box
    }else{
      return 
    }
  }
  //   A file has been added or removed, receives a list of file items
  const handleUpdate = (files)=>{
      setFiles(files)      
  }

  const handleSubmit = async (e)=>{
      e.preventDefault()
      let data = new FormData()
      data.append('fileYO', files[0].file)
      data.append('name', name)
      console.log(data)
     // axios call
     try{
        console.log('updating with data:')
       let res = await axios.put('/api/users/update_image', data)
       setUser(res.data)
     } catch(err){
         alert('error occured updating')
     }
  }
  return (
    <div className="App">
      <h1>Profile Page</h1>
      
      {user.image && <img src={user.image} width={300} />}
      {!user.image && <p>no image</p>}
      < br/>
      < br/>

      {/* <p>{JSON.stringify(user)}</p> */}
      <form onSubmit={handleSubmit} style={{width:'600px',margin:'auto', padding:'20px', border:'1px solid'}}>
        <h1>Update User</h1>
        <p>name:</p>
        <input value={name} onChange={(e)=> setName(e.target.value)} />        
        <p>image:</p>
        {showUpload && <FilePond
            files={files}
            allowMultiple={false}
            onupdatefiles={handleUpdate}
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        />}
        <Button type = 'submit'>Save</Button>
        <Button type = 'button' onClick={()=>setShowUpload(!showUpload)}>Click to update profile image</Button>

      </form>
    </div>
  );
}

export default Profile