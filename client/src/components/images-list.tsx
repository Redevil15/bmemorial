import { Carousel } from "flowbite-react"

interface ImagesListProps {
  images: string[]
}

export const ImagesList = ({
  images
}: ImagesListProps) => {
  return (
    <div className="h-full sm:h-64 xl:h-80 2xl:h-96">
      <Carousel
        className="h-64 sm:h-64 xl:h-80 2xl:h-96"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="carousel"
            className="object-cover w-full h-64 sm:h-64 xl:h-80 2xl:h-96"
          />
        ))}

      </Carousel>

    </div>
  )

}