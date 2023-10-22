import { handleOpenEditModal } from "@/redux/features/products-slice";
import { useAppDispatch } from "@/redux/hooks";
import { Button, PaginationProps, Space, Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { data } from "autoprefixer";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

interface IProduct {
  id: string;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export default function ProductsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const dispatch = useAppDispatch();

  const { data } = useQuery("products", async (): Promise<IProduct[]> => {
    const response: AxiosResponse<any, any> = await axios({
      method: "get",
      url: "https://dummyjson.com/products"
    });

    return response.data.products;
  });

  const columns: ColumnsType<IProduct> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Product name",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock"
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: string) => `$${Number(price).toFixed(2)}`
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (_, record: IProduct) => {
        let color: string = "";
        switch (record.category) {
          case "smartphones":
            color = "volcano";
            break;
          case "laptops":
            color = "blue";
            break;
          case "home-decoration":
            color = "geekblue";
            break;
          default:
            color = "green";
            break;
        }

        return (
          <Tag color={color} key={record.category}>
            {record.category.toUpperCase()}
          </Tag>
        );
      }
    },
    {
      title: "Action",
      dataIndex: "",
      key: "action",
      render: () => {
        return (
          <Space size="middle">
            <Button type="link" onClick={showModal}>
              Edit
            </Button>
            <Button type="link" danger>
              Delete
            </Button>
          </Space>
        );
      }
    }
  ];

  const showModal = (): void => {
    dispatch(handleOpenEditModal());
  };

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current: number,
    pageSize: number
  ) => {
    setCurrentPage(current);
    setPageSize(pageSize);
  };
  return (
    <>
      <Table
        dataSource={data}
        columns={columns}
        pagination={{
          simple: true,
          current: currentPage,
          pageSize: pageSize,
          total: data?.length ?? 0,
          onChange: onShowSizeChange,
          showSizeChanger: true,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`
        }}
      />
    </>
  );
}
