// Import the main CSS file for styling the application
import './App.css'
// Import the Image component
import Image from './components/Image'

// Define the main App component
function App(){
  return(
    <>
    {/* Main header for the application */}
    <h2 className='gundamHeader'>Favorite Mobile Suits from Gundam Wing</h2>
    {/* Container for the images, using Flexbox for layout */}
    <div className="image-container">
      {/* Individual Image components with their respective props */}
      <Image img_file={"wing-gundam.jpg"} width="400px" height="400px" alt="Picture of Wing Gundam" />
      <br></br>
      <Image img_file={"deathscythe.jpg"} width="400px" height="400px" alt="Picture of Deathscythe" />
      <br></br>
      <Image img_file={"sandrock.jpg"} width="400px" height="400px" alt="Picture of Sandrock" />
      <br></br>
      <Image img_file={"epyon.jpg"} width="400px" height="400px" alt="Picture of Epyon" />
    </div>
    </>
  );
}

// Export the App component as the default export
export default App