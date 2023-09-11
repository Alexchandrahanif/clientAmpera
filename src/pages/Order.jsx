import { Button } from "antd";
import React, { useState } from "react";
import {
  HomeOutlined,
  PieChartOutlined,
  UserSwitchOutlined,
  BookOutlined,
  FunnelPlotOutlined,
  TeamOutlined,
  IdcardOutlined,
  ProfileOutlined,
  LogoutOutlined,
  ReadOutlined,
} from "@ant-design/icons";

import { PoweroffOutlined } from "@ant-design/icons";
import ButtonGroup from "../components/antd/ButtonGroup";
const Order = () => {
  const [valueBlock, setValueBlock] = useState(false);

  return (
    <div className="w-full h-full">
      <div>
        <ButtonGroup />
      </div>
    </div>
  );
};

export default Order;
