"use client";

import { Typography, Button, Space } from "antd";
import AddEditProductModal from "../../components/products/add-edit-product-modal/add-edit-product-modal";
import ProductsTable from "../../components/products/products-table/product-table";
import { PlusOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

const { Title } = Typography;

export default function Products() {
  return (
    <div>
      <div className={styles.headerSection}>
        <Title level={2}>Manage Products</Title>

        <div>
          <Space size="middle">
            <Button type="default" size="large">
              Export to excel
            </Button>

            <Button type="default" size="large" icon={<PlusOutlined />}>
              New Product
            </Button>
          </Space>
        </div>
      </div>
      <ProductsTable />
      <AddEditProductModal />
    </div>
  );
}
