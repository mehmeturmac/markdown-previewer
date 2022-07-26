import { useSelector, useDispatch } from 'react-redux';
import { setMarkdownText } from '../redux/markdown/markdownSlice';

function InputArea() {
  const dispatch = useDispatch();
  const markdownText = useSelector((state) => state.markdown.markdownText);

  return <textarea className="text-panel-left" placeholder="# Title" value={markdownText} onChange={(e) => dispatch(setMarkdownText(e.target.value))} />;
}

export default InputArea;
