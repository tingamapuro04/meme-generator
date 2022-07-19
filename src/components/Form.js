import React, {useState} from 'react';
import dataC from './memedata';



function Form() {


  const [url, setUrl] = useState('')

  function addUrl () {
    // const num = Math.floor(Math.random()* dataC.data.memes.length);
    // const picked = dataC.data.memes[num].url;
    // setUrl(picked)
  }

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



  return (
    <div className="second-Con">
      <div className="form">
        <input type="text" placeholder="shut" />
        <input type="text" placeholder="and take the money" />
        <button onClick={AddMeme} className="btn">Pick a meme</button>
        <br />
      </div>
      <div className="img">
        <img src={meme.Url} alt='' className="abi" />
      </div>
    </div>
  )
}

export default Form
