import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store';

// Use this hook instead of the plain `useDispatch` hook
export const useAppDispatch = () => useDispatch<AppDispatch>();