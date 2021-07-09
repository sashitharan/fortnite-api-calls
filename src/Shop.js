import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Shop() {
  //runs fetch call
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const [image, setImage] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      //   'https://fortnite-api.theapinetwork.com/store/get'
      //   'https://fortnite-api.com/v2/cosmetics/br/new'
      `https://fortnite-api.com/v2/news`
    );
    const items = await data.json();
    console.log(items.data.br.motds);

    setImage(items.data.br.image);
    setItems(items.data.br.motds);
  };

  return (
    <div>

<img src={image} alt="" />

      {items.map((items) => (
        <h1 key={items.id}>
          <p>
            <Link to={`/shop/${items.id}`}> {items.title} </Link>
          </p>
        </h1>
      ))}
    </div>
  );
}
export default Shop;
