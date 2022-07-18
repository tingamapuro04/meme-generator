import React, {useState} from 'react';
import dataC from './memedata';

function Meme() {

  const [url, setUrl] = useState('')

  function addUrl () {
    const num = Math.floor(Math.random()* dataC.data.memes.length);
    const picked = dataC.data.memes[num].url;
    setUrl(picked)
  }



  return (
    <div className="img">
      <button onClick={addUrl} className="btn">Pick a meme</button>
      <img src={url} alt='' className="abi" />
    </div>
  )
}

export default Meme
