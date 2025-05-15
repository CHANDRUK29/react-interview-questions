// Explorer.js
import React, { useState } from 'react';

function Explorer({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!data.isFolder) {
    return <div style={{ paddingLeft: '20px' }}>📄 {data.name}</div>;
  }

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
        📁 {data.name}
      </div>
      <div style={{ paddingLeft: '20px', display: isOpen ? 'block' : 'none' }}>
        {data.items.map((item, index) => (
          <Explorer key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Explorer;
