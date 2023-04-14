import React, { useEffect } from 'react';
import { Modal } from './styles';
import useFetch from '../../../Hooks/useFetch';
import { PHOTO_GET } from '../../../Api';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';
import PhotoContent from '../../Photo/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);
  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) setModalPhoto(null);
  };
  return (
    <Modal onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </Modal>
  );
};

export default FeedModal;
