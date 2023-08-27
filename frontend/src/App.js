import React, { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import bgp from './assets/image/background.svg';
import Formupload from './components/formimageupload';
function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // ここでファイルのアップロード処理を行う
      console.log("Selected File:", selectedFile);
    }
  };

  return (
    <>
    <head>
      <title>fd</title>
    </head>
    <body className='capitalize font-bold  'style={{backgroundImage:`url(${bgp})`}}>
    <div className="flex flex-col mx-auto min-h-screen">
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <img src = './logo_fd.png'/>
        <Typography variant="body1" color={"#7656fe"} style={{ marginTop: "1rem" }}>
        間違い探しをといてみせます
      </Typography>

      </div>







    </div>
    <div className="h-screen w-screen flex justify-center items-center">
        <Formupload/>


      </div>





    </body>
    </>
  );
}

export default App;
