import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import dataFilter from './dataFilter';

interface MdProps {
  markdown: string;
}

const Md: React.FC<MdProps> = ({ markdown }) => {
  let output = ''
  try {
    output = dataFilter(markdown)
  } catch (e) {
  }

  return (
    <div className='relative h-[40rem] rounded-lg bg-black/30 p-6 overflow-auto shadow-lg'>
      <button className='absolute top-0 right-0 m-5 text-white' onClick={() => { navigator.clipboard.writeText(output) }}>Copy</button>
    <Markdown className="prose markdown" rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
      {output}
    </Markdown>
    </div>
  );
};

export default Md;
