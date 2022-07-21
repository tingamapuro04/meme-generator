import React, {useState} from 'react';
import dataC from './memedata';



function Form() {


  const [url, setUrl] = useState('')


  const [meme, setMeme] = useState({
    top: '',
    bottom: '',
    Url: 'https://i.imgflip.com/1o00in.jpg'
  });

  const [allMemes, setAllMemes] = useState(dataC)

  const AddMeme = () => {
    const num = Math.floor(Math.random()* allMemes.data.memes.length);
    const picked = allMemes.data.memes[num].url;
    setMeme(prev => ({
      ...prev,
      Url: picked
    }))
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setMeme(prev => ({
      ...prev,
      [name]: value
    }))
  }



  return (
    <div className="second-Con">
      <div className="form">
        <input type="text" placeholder="shut" name="top" value={meme.top} onChange={handleChange} />
        <input type="text" placeholder="and take the money" name="bottom" value={meme.bottom} onChange={handleChange} />
        <button onClick={AddMeme} className="btn">Pick a meme</button>
        <br />
      </div>
      <div className="img">
        <img src={meme.Url} alt='' className="abi" />
        <p className='Akwaba'> {meme.top} </p>
        <p className='Akwaba1'> {meme.bottom} </p>
      </div>
    </div>
  )
}

export default Form
