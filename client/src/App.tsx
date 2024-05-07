import { useEffect, useState, ChangeEvent } from "react";
import { BodyComponent } from "./components/body";
import { FooterComponent } from "./components/footer";
import HeaderComponent from "./components/header";
import axios from "axios";
import { ImagesList } from "./components/images-list";

interface ImageData {
  image: string[];
}

export default function App() {


  const [files, setFiles] = useState<File[]>([])
  const [imagesData, setImagesData] = useState<string[]>([])

  useEffect(() => {
    getImages()
  }, [])

  // Get all images
  const getImages = () => {
    axios.get("http://localhost:3001/api/images/getImage", {
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
      <HeaderComponent className="flex-shrink-0" />
      <BodyComponent className="flex-grow mt-8" />
      {imagesData.length === 0 && (
        <div className="flex justify-center items-center h-64">
          <h1 className="text-2xl text-gray-500">No images to display</h1>
        </div>
      )}
      <ImagesList
        images={imagesData}
      />
      <FooterComponent className="flex-shrink-0 mb-8" />
    </div>
  )
}
