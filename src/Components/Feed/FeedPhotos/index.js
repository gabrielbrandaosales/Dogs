import { useEffect } from 'react';
import FeedPhotoItem from './FeedPhotoItem';
import useFetch from '../../../Hooks/useFetch';
import { PHOTOS_GET } from '../../../Api.js';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';
import { Feed } from './styles';

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();
  useEffect(() => {
    const fetchPhotos = async () => {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    };
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <Feed className="container animeLeft">
        {data.map((photo) => (
          <FeedPhotoItem
            photo={photo}
            key={photo.id}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </Feed>
    );
  else return null;
};

export default FeedPhotos;
