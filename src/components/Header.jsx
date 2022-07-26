import { useDispatch } from 'react-redux';
import { setDefaultText } from '../redux/markdown/markdownSlice';

function Header() {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <h1 class="app-title">Markdown Previewer</h1>
      <div class="help-button false" onClick={() => dispatch(setDefaultText())}>
        <i class="fa fa-question" aria-hidden="true">
          ?
        </i>
      </div>
    </header>
  );
}

export default Header;
