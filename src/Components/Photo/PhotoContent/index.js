import React from 'react';
import { Photo } from './styles';
import { Link } from 'react-router-dom';
import PhotoComments from '../PhotoComments';

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  return (
    <Photo>
      <div className="img">
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className="details">
        <div>
          <p className="author">
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className="visualizacao">{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className="attributes">
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </Photo>
  );
};

export default PhotoContent;
