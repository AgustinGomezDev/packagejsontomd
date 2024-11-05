import React from 'react';

interface TextareaProps {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({ onChange }) => {
  return (
    <textarea 
      className="resize-none h-[40rem] rounded-lg bg-black/30 text-white p-6 active:outline-none focus:outline-none shadow-lg"
      placeholder="Paste your package.json here"
      onChange={onChange}
    />
  );
};

export default Textarea;
