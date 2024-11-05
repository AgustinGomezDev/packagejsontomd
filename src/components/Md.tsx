import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import dataFilter from './dataFilter';
import { useState } from 'react';

interface MdProps {
  markdown: string;
}

const Md: React.FC<MdProps> = ({ markdown }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const handleClick = () => {
    if(!output) return ;
    navigator.clipboard.writeText(output);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  let output = ''
  try {
    output = dataFilter(markdown)
  } catch (e) {
  }

  return (
    <div className='relative h-[40rem] rounded-lg bg-black/30 p-6 overflow-auto shadow-lg'>
      <button className='absolute w-20 top-0 right-0 m-5 text-white bg-gray-700 px-2 py-1 rounded-md hover:bg-gray-800 transition-all active:scale-95' onClick={() => { handleClick() }}>{isCopied ? 'Copied' : 'Copy'}</button>
    <Markdown className="prose markdown" rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
      {output}
    </Markdown>
    </div>
  );
};

export default Md;
