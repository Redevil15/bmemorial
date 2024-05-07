import { Alert, Button } from "flowbite-react";
import { MdOutlineImageSearch } from "react-icons/md";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface BodyComponentProps {
  className?: string
}

interface ImageData {
  image: string[];
}

export const BodyComponent = ({
  className
}: BodyComponentProps) => {


  const [files, setFiles] = useState<File[]>([])
  const [imagesData, setImagesData] = useState<string[]>([])


  const handleBrowseFiles = () => {
    const fileInput = document.getElementById('file');
    fileInput?.click();
  };

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
    setFiles([])
    if (files.length > 0) {
      console.log(files)
      const formData = new FormData()
      files.forEach(file => {
        formData.append('files', file)
      });

      axios.post("http://localhost:3001/api/images/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(res => {
          // show toast success notificacion
          toast.success('Images uploaded successfully!!')
        })
        .catch(err => {
          toast.error("Oops... algo salió mal, F")
          console.log("Error: ", err)
        })
    } else {
      console.log('No file selected')
    }
  };



  return (
    <div
      className={className}
    >
      <div className="w-full bg-[#f2eeea] rounded-3xl p-2 flex flex-col items-center">
        <div className="flex justify-center w-full">
          <h1
            className="text-center text-4xl my-10 font-bold text-[#8c7954]"
          >
            Faby & Brandon
          </h1>
        </div>
        <div
          className="mt-4 border-2 p-8 rounded-3xl border-dashed border-[#c19a5b]"
        >
          <h2
            className="text-3xl font-semibold text-[#c19a5b] my-4"
          >
            Sube las fotos o videos que quieras compartir.
          </h2>

          <div
            className="my-10 flex justify-center"
          >
            <input
              type="file"
              id="file"
              // ref={filePickerRef}
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
            <Button
              className="bg-[#c19a5b] text-white"
              pill
              onClick={handleBrowseFiles}
            >
              {files.length === 0 ? 'Browse files' : `${files.length} files selected`}
              <MdOutlineImageSearch className="ml-2 h-5 w-5" />
            </Button>
            <Button
              className="bg-[#c19a5b] text-white ml-4"
              pill
              onClick={handleUpload}
              disabled={files.length === 0}
            >
              Upload files
            </Button>
          </div>
          {/* {errorMessage && (
            <Alert
              color='failure'
            >
              {errorMessage}
            </Alert>
          )} */}
        </div>
      </div>
    </div>
  );
};