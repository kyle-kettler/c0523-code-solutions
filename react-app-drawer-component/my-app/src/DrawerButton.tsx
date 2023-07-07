import { FiMenu } from 'react-icons/fi';

type MenuButtonProps = {
  onDrawerOpen: Function;
};

export default function DrawerButton({ onDrawerOpen }: MenuButtonProps) {
  return <FiMenu style={{ fontSize: '2rem' }} onClick={() => onDrawerOpen()} />;
}
