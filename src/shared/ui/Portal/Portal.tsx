import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
    children: ReactNode;
    // container where children will be in the DOM
    element?: HTMLElement;
}

/**
 Portal wrap components that should be existed outside the DOM
 exp: Modal, tooltip, overlay
 @param children - elements such as modals, tooltips that we provide inside portal
 @param element - container where children will be in the DOM, should have default value `document.body`
 */
export const Portal = ({ children, element = document.body }: Props) => createPortal(children, element);
