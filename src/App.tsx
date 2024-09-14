import { useState } from 'react';

import './App.css';
import { css } from '@emotion/react';

import theme from '@/styles/theme';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div css={styleV1}>
        <h1>hello</h1>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

const styleV1 = css`
  color: ${theme.colors.primary};
`;

export default App;
