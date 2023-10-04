import { useState, useEffect } from 'react'
import Editor from './Editor.jsx'
import useLocalStorage from './hooks/useLocalStorage.jsx'
import ResizableDiv from './ResizableDiv.jsx'
// import '../index.css'


function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [javascripts, SetJavascripts] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `<html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${javascripts}</script>
          </html>`
      )
    }, 250)
    // This line of code Clear the Time out after complete the code with one calling
    return () => clearTimeout(timeOut)

  }, [html, css, javascripts])




  return (
    <div className='code-pen'>
      <div className='top_bar'>
        <h3>CodePen cloning</h3>
      </div>
      <div className='pane top_pane'>
        <Editor
          languages='html'
          displayName='HTML'
          value={html}
          onChange={setHtml}
        />
        <Editor
          languages='css'
          displayName='Css'
          value={css}
          onChange={setCss}
        />
        <Editor
          languages='javascript'
          displayName='Js'
          value={javascripts}
          onChange={SetJavascripts}
        />



      </div>
      <ResizableDiv srcDoc={srcDoc} />

    </div>
  )
}

export default App;
