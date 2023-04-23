import { useState } from 'react';
import { Wrapper } from './styles';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);
  const handleLoad = ({ target }) => {
    setSkeleton(false);
    target.style.opacity = 1;
  };
  return (
    <Wrapper>
      {skeleton && <div className="skeleton"></div>}
      <img className="img" onLoad={handleLoad} alt={alt} {...props} />
    </Wrapper>
  );
};

export default Image;
