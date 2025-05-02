import { useState } from 'react'
import './App.css'
import explorer from './data/folderData'
import Folder from './components/Folder'
import useTraverseTree from './hooks/use-traverse-tree'

function App() {
  const [explorerData, setExplorerData] = useState(explorer)
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folder, item, isFolder) => {
    const finalTree = insertNode(explorerData, folder, item, isFolder)

    setExplorerData(finalTree)
  }
  return (
    <div className='app'>
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  )
}

export default App
