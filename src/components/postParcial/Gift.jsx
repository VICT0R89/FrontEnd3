import '../../styles/GiftStyles.css'
import { useState, useEffect } from "react"

export const Gift = () => {
  const apiKey = "J0rQgAaS2JRpe6VYzYWl0VAxviRcLRMS";
  const [gifts, setGifts] = useState([])
  const [gift, setGift] = useState({
    value:""
  })
  const [cargando, setCargando] = useState(true)

  useEffect(()=>{
      fetchRandomGift()
  },[])

  const fetchRandomGift = async () => {
    const randomUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=demonslayer&limit=15&offset=0&rating=g&lang=en`
    const response = await fetch(randomUrl);
    const json = await response.json();
    const randomGift = json.data;
    setGifts(randomGift);
    setCargando(false);
  };

  const searchGift = async e => {
      e.preventDefault();
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${gift.value}&limit=15&offset=0&rating=g&lang=en`;
      console.log(url);
      const response = await fetch(url)
      const json = await response.json()
      const data = json.data;
      setGifts(data);
      setCargando(false)
  }
  const handleChange = (e) =>{
    const { name, value } = e.target;
    setGift((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  let {value} = gift
  return (
    <div>
      <div className="title">
        <h1>¡Busca tu Gift!</h1>
      </div>
      <div className="mainContainer">
        <form id="searchForm" onSubmit={searchGift}>
          <input  id="giftInput"
                  placeholder="BUSCA TU GIFT"
                  name="value"
                  value={value}
                  onChange={handleChange}
                  required/>
          <button id="searchBtn">BUSCAR</button>
        </form>
        {
          cargando ? 
          <p>CARGANDO</p>
          :
          <div id="giftContainer">
            {gifts.map((item, index) => {
              let url = item.images.fixed_height_small.url
              return (
                <div className="img-container" key={index}>
                  <img src={url} alt="gift" />
                </div>
              );
            })}
          </div>
        }
      </div>
    </div>
  );
}