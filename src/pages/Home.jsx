import React from "react";
import {
  LineChartOutlined,
  ProfileOutlined,
  TeamOutlined,
  ReadOutlined,
  IdcardOutlined,
} from "@ant-design/icons";

import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import dayLocaleData from "dayjs/plugin/localeData";
import { Calendar, Col, Radio, Row, Select, Typography, theme } from "antd";
dayjs.extend(dayLocaleData);

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  return (
    <div className="w-full h-full flex">
      {/* Kiri */}
      <div className="p-5 w-[70%]">
        <div className="w-full flex  justify-between mb-5 cursor-pointer ">
          {/* Card Pendapatan */}
          <div
            className="h-[68px] w-[225px] bg-white rounded-md px-5 py-3 flex hover:bg-slate-50"
            onClick={() => {
              navigate("/laporan");
              localStorage.setItem("activeMenu", "Laporan");
            }}
          >
            <div className="w-[80%]">
              <p className="font-bold">Rp 3.000.000</p>
              <p className="text-[13px] text-gray-500">Total Pendapatan</p>
            </div>
            <div className="w-[20%] flex justify-end items-center">
              <div className="w-9 h-9 bg-[#C2F5E9] rounded-md flex justify-center items-center">
                <LineChartOutlined className="text-[23px] text-[#06A09B]" />
              </div>
            </div>
          </div>

          {/* Card Orderan */}
          <div
            className="h-[68px] w-[225px] bg-white rounded-md px-5 py-3 flex hover:bg-slate-50"
            onClick={() => {
              navigate("/order");
              localStorage.setItem("activeMenu", "Orderan");
            }}
          >
            <div className="w-[80%]">
              <p className="font-bold">300</p>
              <p className="text-[13px] text-gray-500">Total Orderan</p>
            </div>
            <div className="w-[20%] flex justify-end items-center">
              <div className="w-9 h-9 bg-[#FFDAF6] rounded-md flex justify-center items-center">
                <IdcardOutlined className="text-[23px] text-[#E929BA]" />
              </div>
            </div>
          </div>

          {/* Card Menu */}
          <div
            className="h-[68px] w-[225px] bg-white rounded-md px-5 py-3 flex hover:bg-slate-50"
            onClick={() => {
              navigate("/menu");
              localStorage.setItem("activeMenu", "Menu");
            }}
          >
            <div className="w-[80%]">
              <p className="font-bold">38</p>
              <p className="text-[13px] text-gray-500">Total Menu</p>
            </div>
            <div className="w-[20%] flex justify-end items-center">
              <div className="w-9 h-9 bg-[#EDE3FE] rounded-md flex justify-center items-center">
                <ReadOutlined className="text-[23px] text-[#6B1CB0]" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full h-[430px] bg-white rounded-md"></div>
        </div>
      </div>

      {/* Kanan */}
      <div className="w-[30%] h-full border-l-[1px] bg-white border-slate-100 p-5">
        <div className="border-[2px] border-slate-500 rounded-lg ">
          <Calendar
            fullscreen={false}
            headerRender={({ value, type, onChange, onTypeChange }) => {
              const start = 0;
              const end = 12;
              const monthOptions = [];
              let current = value.clone();
              const localeData = value.localeData();
              const months = [];
              for (let i = 0; i < 12; i++) {
                current = current.month(i);
                months.push(localeData.monthsShort(current));
              }
              for (let i = start; i < end; i++) {
                monthOptions.push(
                  <Select.Option key={i} value={i} className="month-item">
                    {months[i]}
                  </Select.Option>
                );
              }
              const year = value.year();
              const month = value.month();
              const options = [];
              for (let i = year - 10; i < year + 10; i += 1) {
                options.push(
                  <Select.Option key={i} value={i} className="year-item">
                    {i}
                  </Select.Option>
                );
              }
              return (
                <div
                  style={{
                    padding: 8,
                  }}
                >
                  <Row gutter={10}>
                    <Col>
                      <Radio.Group
                        size="small"
                        onChange={(e) => onTypeChange(e.target.value)}
                        value={type}
                      >
                        {/* <Radio.Button value="month">Tanggal</Radio.Button>
                        <Radio.Button value="year">Bulan</Radio.Button> */}
                      </Radio.Group>
                    </Col>
                    <Col>
                      <Select
                        size="small"
                        dropdownMatchSelectWidth={false}
                        className="my-year-select"
                        value={year}
                        onChange={(newYear) => {
                          const now = value.clone().year(newYear);
                          onChange(now);
                        }}
                      >
                        {options}
                      </Select>
                    </Col>
                    <Col>
                      <Select
                        size="small"
                        dropdownMatchSelectWidth={false}
                        value={month}
                        onChange={(newMonth) => {
                          const now = value.clone().month(newMonth);
                          onChange(now);
                        }}
                      >
                        {monthOptions}
                      </Select>
                    </Col>
                  </Row>
                </div>
              );
            }}
            onPanelChange={onPanelChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
