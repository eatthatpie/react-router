import { createContext } from 'react';
import Router from '@/Router';

const context = createContext(new Router());

export default context;
