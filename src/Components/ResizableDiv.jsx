import React from 'react';

function ResizableDiv(props) {
    const { srcDoc } = props;




    return (
        <div style={{ height: 300 }} className='pane_bottom'>
            <iframe
                srcDoc={srcDoc}
                title='output'
                sandbox='allow-scripts'
                width='100%'
                height='100%'
                style={{ border: 'none' }}


            />
        </div>
    );
}

export default ResizableDiv;
