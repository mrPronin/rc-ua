import { useState } from 'react';

export default function useModal(): [boolean, () => void, () => void] {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  return [show, handleOpen, handleClose];
}
