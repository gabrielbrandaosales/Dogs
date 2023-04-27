import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../Api.js';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from './PhotoContent';
import Head from '../Helper/Head';

const Photo = () => {
  const { id } = useParams();
  const { data, error, request, loading } = useFetch();
  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);

    return () => {};
  }, [request, id]);
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent data={data} single={true} />
      </section>
    );
  return null;
};

export default Photo;
