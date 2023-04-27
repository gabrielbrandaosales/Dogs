import React from 'react';
import { PHOTO_DELETE } from '../../../Api/index.js';
import useFetch from '../../../Hooks/useFetch';
import { Fragment } from './styles';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();
  const handleClick = async () => {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  };
  return (
    <Fragment>
      {loading ? (
        <button disabled className="delete">
          Deletando...
        </button>
      ) : (
        <button onClick={handleClick} className="delete">
          Deletar
        </button>
      )}
    </Fragment>
  );
};

export default PhotoDelete;
