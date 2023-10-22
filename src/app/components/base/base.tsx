"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FundOutlined,
  SettingOutlined,
  ShopOutlined,
  UnorderedListOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";
import LayoutHeader from "../layout/header/header";

const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: string,
  key: string,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "dashboard", <FundOutlined />),
  getItem("Users", "users", <UserOutlined />),
  getItem("Products", "products", <UnorderedListOutlined />),
  getItem("Stores", "stores", <ShopOutlined />),
  getItem("Setting", "setting", <SettingOutlined />)
];

export default function Base({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [collapsed, setCollapsed] = useState(false);

  const onClick: MenuProps["onClick"] = e => {
    router.push(`/${e.key}`);
  };

  const handleSidebarCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          onClick={onClick}
          defaultSelectedKeys={["dashboard"]}
          theme="dark"
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <LayoutHeader
          collapsed={collapsed}
          handleSidebarCollapse={handleSidebarCollapse}
        />

        <Content style={{ margin: "24px 16px" }}>
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          pndtr_108 ©2023 Created by Trong Phan
        </Footer>
      </Layout>
    </Layout>
  );
}
