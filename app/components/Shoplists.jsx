import React from 'react';
import Shoplist from './Shoplist.jsx';

export default ({shoplists}) => {
  return (
    <div className="shoplists">{shoplists.map(shoplist =>
      <Shoplist className="shoplist" key={shoplist.id} shoplist={shoplist} />
    )}</div>
  );
};
