import React, { useState } from "react";
import Textarea from "./Textarea";
import Md from "./Md";

const Workspace: React.FC = () => {
    const [markdownContent, setMarkdownContent] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMarkdownContent(event.currentTarget.value);
    };

    return (
        <div className="container mx-auto grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-10 my-5 md:mt-10 px-4">
            <Textarea onChange={handleInputChange} />
            <Md markdown={markdownContent} />
        </div>
    );
}

export default Workspace;
