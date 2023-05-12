import { useState } from "react";
import Modal from "./components/Modal";


const App = () => {
  const [images, setImages] = useState(null)
  const [value, setValue] = useState(null)
  const [error, setError] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)


  const surpriseOptions = [
    'A green car driving sideways',
    'A yellow panda eating chicken nuggets',
    'A lampshade printing newspapers'
  ]

  const surpriseMe = () => {
    setImages(null)
    const randomValue = surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)]
    setValue(randomValue)
  }

  const getImages = async () => {
    setImages(null)
    if (value === null) {
      setError('Search Term Missing!')
      return
    }
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          message: value
        }),
        headers: {
          "Content-type": "application/json"
        }
      }
      const response = await fetch('http://localhost:8000/images', options)
      const data = await response.json()
      console.log(data)
      setImages(data)
    } catch (error) {
      console.error(error)
    }
  };

  const uploadImage = async (e) => {
    console.log(e.target.files[0])
    const formData = new FormData()
    formData.append('file', e.target.files[0])
    setModalOpen(true)
    setSelectedImage(e.target.files[0])

    try {
      const options = {
        method: 'POST',
        body: formData
      }
      const response = await fetch('http://localhost:8000/upload', options)
      const data = response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="app">
      <section className="search-section">
        <p>Start with a detailed description
          <span onClickCapture={surpriseMe} className="surprise">Surprise me</span>
        </p>
        <div className="input-container">
          <input
            value={value}
            placeholder="A small Giraffe"
            onChange={e => setValue(e.target.value)}
          />
          <button onClick={getImages}>Generate</button>
        </div>
        <p className="extra-info">
          <span>
            <label htmlFor="files">Click here to upload an image in 256x256, 512x512 or 1024x1024 format</label>
            <input onChange={uploadImage} type="file" id="files" accept="image/*" hidden />
          </span>

        </p>
        {error && <p>{error}</p>}
        {modalOpen && <div className="overlay">
          <Modal setModalOpen={setModalOpen} setSelectedImage={setSelectedImage} selectedImage={selectedImage}></Modal>
        </div>}
      </section>
      <section className="image-section">
        {images?.map((image, _index) => (
          <img key={_index} src={image.url} alt={`Generated image of ${value}`} />
        ))}
      </section>
    </div>
  )
};

export default App;
