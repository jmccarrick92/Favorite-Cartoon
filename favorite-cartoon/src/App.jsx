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
      <div className="image-item">
        <h3>Wing Gundam</h3>
        <Image img_file={"wing-gundam.jpg"} width="350px" height="350px" alt="Picture of Wing Gundam" />
      </div>
      <div className="image-item">
        <h3>Deathscythe</h3>
        <Image img_file={"deathscythe.jpg"} width="350px" height="350px" alt="Picture of Deathscythe" />
      </div>
      <div className="image-item">
        <h3>Sandrock</h3>
        <Image img_file={"sandrock.jpg"} width="350px" height="350px" alt="Picture of Sandrock" />
      </div>
      <div className="image-item">
        <h3>Epyon</h3>
        <Image img_file={"epyon.jpg"} width="350px" height="350px" alt="Picture of Epyon" />
      </div>
    </div>
    </>
  );
}

// Export the App component as the default export
export default App