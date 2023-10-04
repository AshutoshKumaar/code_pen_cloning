import React, { useState } from 'react'
import CodeEditor from "@monaco-editor/react";
import { BiSolidShow, BiSolidHide } from 'react-icons/bi'



function Editor(props) {
    const [open, setOpen] = useState(true)
    const {
        languages,
        displayName,
        onChange,
        value
    } = props


    function handleChanges(e) {
        onChange(e)
    }
    return (
        <div className={`Editor_Container ${open ? '' : 'collapsedEditor'}`}>
            <div className='Editor_title'>
                <p> {displayName}</p>
                <button type='button' name='btn' id='btn' onClick={() => { setOpen(prevOpen => !prevOpen) }}>
                    {open ? <BiSolidHide className='icons' /> : <BiSolidShow className='icons' />}
                </button>

            </div>
            <CodeEditor
                onChange={(e) => { handleChanges(e) }}
                defaultLanguage={languages}
                theme='vs-dark'
                value={value}
                options={{
                    inlineSuggest: true,
                    fontSize: '16px',
                    formatOnType: true,
                    autoClosingBrackets: true,
                    minimap: { scale: 5 }
                }}

            />




        </div>
    )
}

export default Editor
