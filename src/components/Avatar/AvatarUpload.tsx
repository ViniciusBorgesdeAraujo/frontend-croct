import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './AvatarUpload.css';

interface AvatarUploadProps {
  onImageUpload: (image: File) => void;
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({ onImageUpload }) => {
  const [image, setImage] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const navigate = useNavigate();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedImage = event.target.files && event.target.files[0];

    if (uploadedImage) {
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result as string);
      };

      reader.readAsDataURL(uploadedImage);
      onImageUpload(uploadedImage);
    }
  };

  const handleImageCrop = () => {};

  const handleZoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const zoomValue = parseFloat(event.target.value);
    setZoomLevel(zoomValue);
  };

  const handleSave = () => {};

  const handleReset = () => {
    setImage(null);
    setCroppedImage(null);
    setZoomLevel(1);
  };

  const handleGoToHome = () => {
    navigate('/');
  };

  return (
    <div className="button-container">
      {!image && !croppedImage && (
        <div className="upload-container">
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <p>Drop the image here or click to browse.</p>
        </div>
      )}
      {image && !croppedImage && (
        <div>
          <img src={image} alt="Imagem para recortar" />
          <div className="button-wrapper">
            <button className="styled-button" onClick={handleImageCrop}>
              Recortar
            </button>
            <button className="styled-button" onClick={handleReset}>
              Cancelar
            </button>
          </div>
        </div>
      )}

      {croppedImage && (
        <div>
          <img src={croppedImage} alt="Imagem recortada" />
          <button onClick={handleSave}>Salvar</button>
          <button onClick={handleReset}>Reiniciar</button>
        </div>
      )}

      {croppedImage && (
        <div>
          <p>Ajustar zoom:</p>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={zoomLevel}
            onChange={handleZoomChange}
          />
        </div>
      )}

      <div className="top-right">
      <button onClick={handleGoToHome} className="home-button">Ir para Home</button>
      </div>
    </div>
  );
};

export default AvatarUpload;
