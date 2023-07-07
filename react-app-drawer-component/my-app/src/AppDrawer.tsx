import './AppDrawer.css';

export type MenuItem = {
  title: string;
};

type AppDrawerProps = {
  menuItems: MenuItem[];
  heading: string;
  drawerState: boolean;
  onMenuItemClicked: (item: string) => void;
  onShadeClicked: () => void;
};

type MenuItemProps = {
  menuTitle: MenuItem;
  onMenuItemClicked: (item: string) => void;
};

export default function AppDrawer({
  heading,
  menuItems,
  onMenuItemClicked,
  drawerState,
  onShadeClicked,
}: AppDrawerProps) {
  const openClass = drawerState ? 'open' : '';

  return (
    <div className="app-drawer-wrap">
      <div
        className={`shade ${openClass}`}
        onClick={() => onShadeClicked()}></div>
      <div className={`app-drawer ${openClass}`}>
        <div className="heading-wrap">
          <h3>{heading}</h3>
        </div>
        <div className="menu-wrap">
          {menuItems.map((item, index) => (
            <MenuLink
              menuTitle={item}
              onMenuItemClicked={() => onMenuItemClicked(item.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MenuLink({ menuTitle, onMenuItemClicked }: MenuItemProps) {
  return (
    <div
      className="menu-link"
      onClick={() => onMenuItemClicked(menuTitle.title)}>
      {menuTitle.title}
    </div>
  );
}
