import parse from 'html-react-parser';
import PropTypes from 'prop-types';

const ShowPost = ({ content = '' }) => {
  return (
    <div className='tiptap m-4 bg-zinc-500 p-3'>
      <div>{parse(content)}</div>
    </div>
  );
};

ShowPost.propTypes = {
  content: PropTypes.string,
};

export default ShowPost;
