// Define the Image component that accepts img_file, alt, width, and height as props
export default function Image({img_file,alt,width,height}){

    return(
        // Render an img HTML element
        <img src={`/src/assets/${img_file}`}
        alt={alt} // Alt text for accessibility
        width={width} // Width of the image
        height={height} // Height of the image
        className="img_comp" // CSS class for additional styling
        />
    );

}