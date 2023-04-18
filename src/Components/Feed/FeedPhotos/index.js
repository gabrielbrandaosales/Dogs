import { useEffect } from 'react';
import FeedPhotoItem from './FeedPhotoItem';
import useFetch from '../../../Hooks/useFetch';
import { PHOTOS_GET } from '../../../Api';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';
import { Feed } from './styles';

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();
  useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
      console.log(json);
    };
    fetchPhotos();
  }, [request]);

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