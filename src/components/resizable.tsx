import { ResizableBox, ResizableBoxProps } from 'react-resizable';
import './resizable.css';

type ResizableProps = {
  direction: 'horizontal' | 'vertical';
  children: React.ReactNode;
};

export const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  let resizableProps: ResizableBoxProps;

  if (direction === 'horizontal') {
    resizableProps = {
      className: 'resize-horizontal',
      minConstraints: [window.innerWidth * 0.2, Infinity],
      maxConstraints: [window.innerWidth * 0.85, Infinity],
      width: 700,
      height: Infinity,
      resizeHandles: ['e'],
    };
  } else {
    resizableProps = {
      minConstraints: [Infinity, 50],
      maxConstraints: [Infinity, window.innerHeight * 0.9],
      width: Infinity,
      height: 300,
      resizeHandles: ['s'],
    };
  }
  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};
