import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';

function Previewer() {
  const markdownText = useSelector((state) => state.markdown.markdownText);

  return (
    <div className="text-panel-right">
      <ReactMarkdown children={markdownText} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeKatex]} />
    </div>
  );
}

export default Previewer;
