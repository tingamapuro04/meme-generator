import React, {useState, useEffect} from 'react';
import dataC from './memedata';

function Meme() {

  const [url, setUrl] = useState('')
  const [Data, setData] = useState([])

  function addUrl () {
    const num = Math.floor(Math.random()* Data.length);
    const picked = Data[num].url;
    setUrl(picked)
  }

  useEffect(() => {
    async function getData () {
      const res = await fetch(`https://api.imgflip.com/get_memes`)
      const data1 = await res.json()
      setData(data1.data.memes)
    }
    getData()

  }, [])



  return (
    <div className="img">
      <button onClick={addUrl} className="btn">Pick a meme</button>
      <img src={url} alt='' className="abi" />
    </div>
  )
}

export default Meme
