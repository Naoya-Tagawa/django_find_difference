import React, { useState } from "react";
import { Button,Typography } from "@mui/material";
import axios from "axios";
const Formimageupload = () =>{
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageurl, setImageurl] = useState(null);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", selectedFile);
    try {
      const response = axios.post("http://", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setImageurl(response.data.url);


    }catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col">
      <Typography variant="h4" color={"#7656fe"} gutterBottom>
        画像をアップロード
      </Typography>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ marginBottom: "1rem" }}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleUpload}
        disabled={!selectedFile}
        className="flex justify-center"
      >
        アップロード
      </Button>
      {selectedFile && (
        <Typography variant="body1" style={{ marginTop: "1rem" }} color={"#7656fe"}>
          選択したファイル: {selectedFile.name}
        </Typography>
        
      )}
      {imageurl && (<img src={imageurl} alt="uploaded" />)}
    </div>
  );
}

export default Formimageupload;
