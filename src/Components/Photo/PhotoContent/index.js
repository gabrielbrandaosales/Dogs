import React, { useContext } from 'react';
import { Photo } from './styles';
import { Link } from 'react-router-dom';
import PhotoComments from '../PhotoComments';
import { UserContext } from '../../../UserContext';
import PhotoDelete from '../PhotoDelete';
import Image from '../../Helper/Image';

const PhotoContent = ({ data }) => {
  const user = useContext(UserContext);
  const { photo, comments } = data;
  return (
    <Photo>
      <div className="img">
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className="details">
        <div>
          <p className="author">
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

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
