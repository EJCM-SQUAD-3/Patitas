// import React, { useState } from 'react';

// const Colaborador = () => {
//   const [imagem, setImagem] = useState('');

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImagem(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className='colaborador'>
//       <div className='cabecalho'>
//         <input type="file" onChange={handleImageChange} />
//         <img src={imagem} alt='Foto do Colaborador' />
//       </div>
//       <div className='rodape'>
//         <h4>Nome do Colaborador</h4>
//         <h5>Cargo do Colaborador</h5>
//       </div>
//     </div>
//   );
// };

// export default Colaborador;

// WebImageUploader.js
// 
// import React, { useState } from 'react';

// function App() {
//   const [image, setImage] = useState('');

//   const handleImageChange = function (event) {
//       setImage(URL.createObjectURL(event.target.files[0]));
//   }

//   return (
//     <div className="App">
//       <input type="file" onChange={handleImageChange} />
//       <img src={image} alt="Imagem selecionada" />
//     </div>
//   );
// }

// export default App;