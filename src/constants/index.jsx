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

export const dataSidebar = [
  {
    name: "Dasboard",
    icon: <PieChartOutlined />,
    link: "/",
  },
  {
    name: "Orderan",
    icon: <ProfileOutlined />,
    link: "/order",
  },
  {
    name: "Menu",
    icon: <ReadOutlined />,
    link: "/menu",
  },
  {
    name: "Staff",
    icon: <IdcardOutlined />,
    link: "/staff",
  },
  {
    name: "Laporan",
    icon: <BookOutlined />,
    link: "/laporan",
  },
  {
    name: "Customer",
    icon: <TeamOutlined />,
    link: "/customer",
  },
  {
    name: "Meja",
    icon: <FunnelPlotOutlined />,
    link: "/meja",
  },

  {
    name: "Keluar",
    icon: <LogoutOutlined />,
    link: "/",
  },
];
