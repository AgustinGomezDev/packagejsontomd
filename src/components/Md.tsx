import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'

interface MdProps {
  markdown: string;
}

const Md: React.FC<MdProps> = ({ markdown }) => {
  let parsedData;
  let markdownOutput = ""
  try {
    parsedData = JSON.parse(markdown);
    markdownOutput = ``;
  } catch (e) {
    console.error('Error parsing JSON:', e);
  }
  return (
    <Markdown className="prose h-[40rem] rounded-lg bg-black/30 p-6 overflow-auto markdown shadow-lg" rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
      {markdownOutput}
    </Markdown>
  );
};

export default Md;