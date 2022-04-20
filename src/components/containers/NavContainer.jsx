import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDisplay } from './displaySlice';
import { setLogin } from '../../loginSlice';
import { Menu, Avatar, Affix, Button } from 'antd';
import {
  ExperimentOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  UserOutlined,
  ToolOutlined,
  DatabaseOutlined,
  DeploymentUnitOutlined,
  PaperClipOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';

const { SubMenu } = Menu;

const StyledMenu = styled(Menu)`
  width: 20vw;
  height: 150vh;
  position: sticky;
`;

const Title = styled.h1`
  color: white;
  margin: 2rem 1.5rem;
  font-family: 'MuseoModerno', cursive;
  font-weight: 600;
  /* text-align: center; */
  letter-spacing: 0.2rem;
`;

const NavContainer = (props) => {
  const dispatch = useDispatch();

  // Set state for current selection highlighting
  const [current, setCurrent] = useState(1);

  // Change display state depending on category button click
  const handleClick = (e) => {
    setCurrent(e.key);
    dispatch(setDisplay(e.key));
  };

  return (
    <>
      <Affix offsetTop={0}>
        <StyledMenu
          theme={'dark'}
          onClick={handleClick}
          // style={{ width: '20vw', height: '100vh', position: 'sticky' }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[current]}
          mode="inline">
          <Title>storeroom</Title>
          <SubMenu key="sub1" icon={<DatabaseOutlined />} title="Inventory">
            <Menu.Item key="consumables" icon={<PaperClipOutlined />}>
              Consumables
            </Menu.Item>
            <Menu.Item key="reagents" icon={<ExperimentOutlined />}>
              Reagents
            </Menu.Item>
            <Menu.Item key="cells" icon={<DeploymentUnitOutlined />}>
              Cell Lines
            </Menu.Item>
            <Menu.Item key="equipment" icon={<ToolOutlined />}>
              Equipment
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<ShoppingCartOutlined />} title="Order">
            <Menu.Item key="5">VWR</Menu.Item>
            <Menu.Item key="6">ThermoFisher</Menu.Item>
            {/* <SubMenu key="sub3" title="Submenu"> */}
            <Menu.Item key="7">Barker Hall</Menu.Item>
            {/* <Menu.Item key="8">Option 8</Menu.Item> */}
            {/* </SubMenu> */}
          </SubMenu>
          <SubMenu
            key="sub4"
            icon={<SettingOutlined />}
            title="Navigation Three">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
          <Button
            danger
            onClick={() => {
              dispatch(setLogin(false));
            }}>
            Sign out
          </Button>
        </StyledMenu>
      </Affix>
    </>
  );
};

export default NavContainer;
