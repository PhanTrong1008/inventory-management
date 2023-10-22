"use client";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined
} from "@ant-design/icons";
import {
  Button,
  Dropdown,
  Layout,
  MenuProps,
  Select,
  Space,
  theme
} from "antd";
import styles from "./styles.module.scss";
import Link from "next-intl/link";
import { use, useEffect, useState } from "react";

const { Header } = Layout;
const { Option } = Select;

export interface ILanguageOption {
  value: string;
  label: string;
  locale: string;
}

export default function LayoutHeader({
  collapsed,
  handleSidebarCollapse
}: {
  collapsed: boolean;
  handleSidebarCollapse: () => void;
}) {
  const [selectedLang, setSelectedLang] = useState<string>('English');

  const {
    token: { colorBgContainer }
  } = theme.useToken();

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    localStorage.setItem('language', e.key);
  };

  useEffect(() => {
    setSelectedLang(localStorage.getItem('language') === 'en-US' ? 'English' : 'Tiếng Việt');
  }, []);

  const items: MenuProps["items"] = [
    {
      label: (
        <Link href="/" locale="en">
          English
        </Link>
      ),
      key: "en-US"
    },
    {
      label: (
        <Link href="/" locale="vi">
          Tiếng Việt
        </Link>
      ),
      key: "vi-VN"
    }
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <>
      <Header
        style={{ background: colorBgContainer }}
        className={styles.header}
      >
        <div className={styles.buttons}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={handleSidebarCollapse}
            className={styles.collapseButton}
          />

          <Dropdown menu={menuProps} trigger={["click"]}>
            <Button>
              <Space>
                {selectedLang}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
      </Header>
    </>
  );
}
