import React, { useState, useEffect } from 'react';
import EditorJs from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import SimpleImage from "@editorjs/simple-image";
import LinkTool from '@editorjs/link';
import RawTool from '@editorjs/raw';
import Embed from '@editorjs/embed';

const TextEditor = () => {
    const [editorInstance, setEditorInstance] = useState(null);

    useEffect(() => {
        // Initialize the Editor.js instance
        const editor = new EditorJs({
          autofocus: true,
            holder: 'editor',
            tools: {
                header: {
                    class: Header,
                    inlineToolbar: true,
                    config: {
                      placeholder: 'Enter a header',
                      levels: [2, 3, 4],
                      defaultLevel: 3
                    }
                },
                list: {
                    class: List,
                    inlineToolbar: true
                },
                quote: {
                    class: Quote,
                    inlineToolbar: true
                },
                linkTool: {
                  class: LinkTool,
                  
                },
                image: {
            
                  class: SimpleImage,
                },
                raw: {
            
                  class: RawTool,
                },
                embed: {
            
                  class: Embed,
                  config: {
                    services: {
                      youtube: true,
                      coub: true
                    }
                  }
                },
                
            }
        });

        // Set the Editor.js instance in state
        setEditorInstance(editor);

        
    }, []);

    return (
        <div id="editor" className='text-2xl font-bold pl-10 py-5 text-center'>Write Your Article</div>
    );
};

export default TextEditor;
