const React = require('react');
const menuData = require('../../config/topmenu.json');
const styled = require('styletron-react').styled;

const Menu = styled('div', {
  display: 'flex',
  flexFlow: 'row nowrap',
  backgroundColor: '#0E4EB6',
});

const MenuItem = styled('a', {
  display: 'block',
  flex: '1 1 auto',
  color: 'white',
  fontFamily: 'arial',
  textDecoration: 'none',
  padding: '12px',
});

const TopMenu = () => {
  const menuItems = menuData.map((item, i) => {
    const key = `topmenuitem${i}`;
    return <MenuItem href={item.url} key={key}>{item.text}</MenuItem>;
  });

  return (
    <Menu>
      {menuItems}
    </Menu>
  );
};

module.exports = TopMenu;
