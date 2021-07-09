import React, {useState, useEffect} from 'react';

function ItemDetails({match}) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({
      images: {}
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://fortnite-api.com/v2/news`);
    const item = await fetchItem.json();
    setItem(item.data.br.motds);
    console.log(item.data.br.motds);
    
  };

  return (
    <div>
        <h1>details</h1>
    </div>
  );
}
export default ItemDetails;
