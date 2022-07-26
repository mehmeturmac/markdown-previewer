import { useDispatch } from 'react-redux';
import { setDefaultText } from '../redux/markdown/markdownSlice';

function Header() {
  const dispatch = useDispatch();

  return (
    <header>
      <h1 className="app-title">Markdown Previewer</h1>
      <div className="help-button false" onClick={() => dispatch(setDefaultText())}>
        <i className="fa fa-question" aria-hidden="true">
          ?
        </i>
      </div>
    </header>
  );
}

export default Header;
