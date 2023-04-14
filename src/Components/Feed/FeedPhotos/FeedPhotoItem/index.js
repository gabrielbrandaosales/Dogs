import { Photo } from './styles';

const FeedPhotoItem = ({ photo }) => {
  return (
    <Photo>
      <img src={photo.src} alt={photo.title} />
      <span className="visualizacao">{photo.acessos}</span>
    </Photo>
  );
};

export default FeedPhotoItem;
