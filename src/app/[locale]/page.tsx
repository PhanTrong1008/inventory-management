"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Typography } from "antd";

const { Title } = Typography;

export default function Home() {
  const t = useTranslations("Index");
  console.log(t);
  return (
    <div>
      <Title level={1}>
        {t("signIn")}
      </Title>
    </div>
  );
}
