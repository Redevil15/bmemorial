import { Alert, Button } from "flowbite-react";
import { MdOutlineImageSearch } from "react-icons/md";
import { useRef, useState } from "react";

interface BodyComponentProps {
  className?: string
}


export const BodyComponent = ({
  className
}: BodyComponentProps) => {
  const [errorMessage, setErrorMessage] = useState('');

  const filePickerRef = useRef<HTMLInputElement>(null);

  const handleBrowseFiles = () => {
    // Funcionalidad para poder seleccionar 
    if (filePickerRef.current) {
      filePickerRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 10) {
      setErrorMessage('You can only upload up to 10 photos');
      event.target.value = '';
    } else {
      setErrorMessage('');
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
              ref={filePickerRef}
              type="file"
              accept="image/*"
              className="hidden"
              id="images"
              onChange={handleFileChange}
            />
            <Button
              className="bg-[#c19a5b] text-white"
              pill
              onClick={handleBrowseFiles}
            >
              Browse files
              <MdOutlineImageSearch className="ml-2 h-5 w-5" />
            </Button>
          </div>
          {errorMessage && (
            <Alert
              color='failure'
            >
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};