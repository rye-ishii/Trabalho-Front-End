import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Header';

function App() {
  return (
    <>
      <Header
        texto="Look Inverno"
        imagem="https://daniellegervino.com/wp-content/uploads/2023/12/1-1.png"
        preco="R$210,56"
      />

      <Header
        texto="Look Outono"
        imagem="https://product-images-cdn.liketoknow.it/MzXmWK.JjdXueuTWa_VPBtQu55_EbkQjDZSv0djVOf485TLJUPQ5fv4LVEG3xYEkWhMchvUqmfEa.xTfL7IkJDVYqdB0eiyHkgWsjlbJy2fCNYWZL7d3ndMR3jP5.tulZixTsAlhMnbyQxQGuci0YmwveTrHqNZNpjxLUsL292SKbKXUHtv40.8dOYs-?v=0&auto=format&fm=webp&w=450&q=80&dpr=2.625"
        preco="R$199,99"
      />

      <Header
        texto="Look Casual"
        imagem="https://images.squarespace-cdn.com/content/v1/575ef1b97da24fd757acb056/a99def89-48fe-4037-914c-5251a445ce50/36.png"
        preco="R$160,75"
      />
    </>
  );
}

export default App;
