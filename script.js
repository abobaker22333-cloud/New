body {
  font-family: Tahoma, sans-serif;
  background: #111;
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 0;
}

h1 {
  margin: 20px;
}

#uploadBox {
  margin: 20px;
}

#gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  padding: 20px;
}

#gallery div {
  background: #222;
  padding: 10px;
  border-radius: 10px;
}

#gallery img {
  max-width: 100%;
  border-radius: 10px;
}

footer {
  margin-top: 30px;
  padding: 10px;
  background: #000;
}
