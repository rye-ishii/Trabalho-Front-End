function Header({ texto, imagem, preco }) {
  return (
    <>
      <h1>{texto}</h1>
      <img src={imagem} width="600" />
      <h2>{preco}</h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default Header;
