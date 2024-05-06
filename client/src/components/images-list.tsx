import { Carousel } from "flowbite-react"

interface ImagesListProps {
  images: string[]
}

export const ImagesList = ({
  images
}: ImagesListProps) => {
  return (
    <div className="h-66 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {images.map((image, index) => (
          <img key={index} src={image} alt="carousel" className="object-cover w-full h-full" />
        ))}
      </Carousel>
    </div>
  )

}