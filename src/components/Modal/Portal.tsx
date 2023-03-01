import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortal {
  children: ReactNode;
}

const Portal = ({ children }: IPortal) => createPortal(children, document.body);

export default Portal;
