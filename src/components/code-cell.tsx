import { useEffect, useState } from 'react';
import { CodeEditor } from '../components/code-editor';
import { Preview } from '../components/preview';
import { bundle } from '../bundler';
import { Resizable } from './resizable';

export const CodeCell = () => {
  const [code, setCode] = useState('');
  const [err, setErr] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output.code);
      setErr(output.err);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction="vertical">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction="horizontal">
          <CodeEditor initialValue="const a = 1;" onChange={(value) => setInput(value)} />
        </Resizable>
        <Preview code={code} err={err} />
      </div>
    </Resizable>
  );
};
