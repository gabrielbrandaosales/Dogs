import { useState } from 'react';
import { ReactComponent as Enviar } from '../../../Assets/enviar.svg';
import useFetch from '../../../Hooks/useFetch';
import { COMMENT_POST } from '../../../Api.js';
import Error from '../../Helper/Error';
import { FormContent } from './styles';
const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = useState('');
  const { request, error } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  };

  return (
    <FormContent single={single} onSubmit={handleSubmit}>
      <textarea
        className="textarea"
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}></textarea>
      <button className="button">
        <Enviar />
      </button>
      <Error error={error} />
    </FormContent>
  );
};

export default PhotoCommentsForm;
