import Image from '../../../Helper/Image';
import { Photo } from './styles';

const FeedPhotoItem = ({ photo, setModalPhoto }) => {
  const handleClick = () => {
    setModalPhoto(photo);
  };
  return (
    <Photo onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className="visualizacao">{photo.acessos}</span>
    </Photo>
  );
};

export default FeedPhotoItem;
