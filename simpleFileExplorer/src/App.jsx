
import './App.css'
import Explorer from './Explorer';

function App() {
const explorerData = {
  name: 'root',
  isFolder: true,
  items: [
    {
      name: 'public',
      isFolder: true,
      items: [
        { name: 'index.html', isFolder: false }
      ]
    },
    {
      name: 'src',
      isFolder: true,
      items: [
        { name: 'App.js', isFolder: false },
        {
          name: 'components',
          isFolder: true,
          items: [
            { name: 'Explorer.js', isFolder: false }
          ]
        }
      ]
    },
    { name: 'package.json', isFolder: false }
  ]
};

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h2>📂 File Explorer</h2>
      <Explorer data={explorerData} />
    </div>
  );
}

export default App
