import React from "react";


export default function Meme() {
  const [meme, setImage] = React.useState({
    topText: "",
    bottomText: "",
    memeImage: "https://i.imgflip.com/1ihzfe.jpg",
  });

  const [allMemes, setAllMeme] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(res => setAllMeme(res.data.memes))
    
  },[])
  console.log(allMemes) 

  function getMemeImage() {
    // const allMemes = allMemes.data.memes;
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    
    setImage((prevMeme) => ({
      
      ...prevMeme,
      memeImage: allMemes[randomNumber].url,
      
    }));
  }
  
  function handleChange(event) { 
    const {name, value} = event.target
    setImage(prevData => ({
      ...prevData,
      [name] : value
    }))
  }

  return (
    <main>
      <div className="meme">
        <div className="form">
          <input 
            type="text" 
            className="input--field" 
            placeholder="Top Text" 
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            className="input--field"
            placeholder="Bottom Text"
            name="bottomText"
            value={meme.bottomText}
             onChange={handleChange}         
          />

          <button onClick={getMemeImage} type="submit" className="form--btn">
            Get a new meme image🖼️
          </button>
        </div>
        <div className="meme-container">
          <img src={meme.memeImage} alt="meme image" className="meme-image" />
          <h2 className="meme-text top">{meme.topText}</h2>
          <h2 className="meme-text bottom">{meme.bottomText} </h2>
        </div>
      </div>
    </main>
  );
}
