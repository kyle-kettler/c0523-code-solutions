import './AppDrawer.css';

export type MenuItem = {
  title: string;
};

type AppDrawerProps = {
  menuItems: MenuItem[];
  heading: string;
};

type MenuItemProps = {
  menuTitle: MenuItem;
};

export default function AppDrawer({ heading, menuItems }: AppDrawerProps) {
  return (
    <div className="shade">
      <div className="app-drawer">
        <div className="heading-wrap">
          <h3>{heading}</h3>
        </div>
        <div className="menu-wrap">
          {menuItems.map((item, index) => (
            <MenuLink menuTitle={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MenuLink({ menuTitle }: MenuItemProps) {
  return <div className="menu-link">{menuTitle.title}</div>;
}
