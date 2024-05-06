import { useEffect, useState, ChangeEvent } from "react";
import { BodyComponent } from "./components/body";
import { FooterComponent } from "./components/footer";
import HeaderComponent from "./components/header";
import axios from "axios";

interface ImageData {
  image: string[];
}

export default function App() {


  const [files, setFiles] = useState<File[]>([])
  const [imagesData, setImagesData] = useState<string[]>([])

  useEffect(() => {
    getImages()
  }, [])

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {  // Check if files are not null
      const fileList = e.target.files; // Get the FileList object
      const selectedFiles = Array.from(fileList).slice(0, 10); // Convert FileList to Array and slice it
      setFiles(selectedFiles); // Update state
    } else {
      console.log('No files selected');
    }
  };


  const handleUpload = (e: any) => {
    if (files.length > 0) {
      console.log(files)
      const formData = new FormData()
      files.forEach(file => {
        formData.append('files', file)
      });

      axios.post("http://localhost:3001/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(res => console.log("Response: ", res))
        .catch(err => console.log("Error: ", err))
    } else {
      console.log('No file selected')
    }
  };

  // Get all images
  const getImages = () => {
    axios.get("http://localhost:3001/getImage", {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log("Response: ", res)
        setImagesData(res.data.map((item: ImageData) => item.image.map(img => `http://localhost:3001/images/${img.replace(/^public\\images\\/, '')}`)).flat())
        console.log(imagesData)
      })
      .catch(err => console.log("Error: ", err)
      )
  }



  return (
    <div className="flex flex-col min-h-screen">
      {/* <HeaderComponent className="flex-shrink-0" />
      <BodyComponent className="flex-grow mt-8" />
      <FooterComponent className="flex-shrink-0 mb-8" /> */}


      <input
        type="file"
        id="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
      <button
        onClick={handleUpload}
      >
        Upload
      </button>

      <div>
        <button onClick={getImages}>Get Images</button>
        <div>
          {imagesData.map((img, index) => (
            <img key={index} src={img} alt={`Uploaded ${index}`} />
          ))}
        </div>
      </div>

    </div>
  )
}
