import React, { useState } from "react";
import Search from "antd/es/input/Search";
import CardMenus from "../components/utils/CardMenus";

import { Image, Button, Input, InputNumber } from "antd";
import { DownloadOutlined, PlusCircleOutlined } from "@ant-design/icons";
import CardMenus2 from "../components/utils/CardMenus2";

const onSearch = (value) => console.log(value);

const dataMenu = [
  {
    nama: "Nasi Goreng",
    stok: 10,
    harga: 10000,
  },
  {
    nama: "Mie Goreng",
    stok: 10,
    harga: 10000,
  },
  {
    nama: "Soto Medan",
    stok: 10,
    harga: 10000,
  },
  {
    nama: "Bakso Urat",
    stok: 10,
    harga: 10000,
  },
  {
    nama: "Ayam Penyet",
    stok: 10,
    harga: 10000,
  },
  {
    nama: "Ayam Bakar Madura",
    stok: 10,
    harga: 10000,
  },
  {
    nama: "Ketoprak",
    stok: 10,
    harga: 10000,
  },
  {
    nama: "Bubur Ayam",
    stok: 10,
    harga: 10000,
  },
  {
    nama: "Mie Ayam",
    stok: 10,
    harga: 10000,
  },
  {
    nama: "Mie Kwetiau",
    stok: 10,
    harga: 10000,
  },
  {
    nama: "Coto Makasar",
    stok: 10,
    harga: 10000,
  },
  {
    nama: "Lontong Sayur",
    stok: 10,
    harga: 10000,
  },
  {
    nama: "Ayam Krispi",
    stok: 10,
    harga: 10000,
  },
  {
    nama: "Ayam Geprek",
    stok: 10,
    harga: 10000,
  },
];

const Menu = () => {
  const [orders, setOrders] = useState([]);

  const [total, setTotal] = useState(0);

  const handleOrderClick = (nama, harga, jumlah, img) => {
    setTotal(total + harga * jumlah);
    const newOrder = { nama, harga, jumlah, img };
    setOrders([...orders, newOrder]);
  };

  return (
    <div className="w-full h-full  flex ">
      <div className="w-[70%]  ">
        <div className=" w-full px-10 py-5 ">
          <Search
            size="large"
            placeholder="Search Menu"
            onSearch={onSearch}
            style={{
              width: 400,
            }}
          />
        </div>
        <div className="w-full h-[85%]  overflow-y-auto scrollbar-thin scrollbar-thumb-rounded">
          <div className="flex flex-wrap  px-5 gap-x-7  gap-y-3 ">
            {dataMenu &&
              dataMenu.map((item, index) => {
                return (
                  <CardMenus
                    key={index}
                    harga={item.harga}
                    nama={item.nama}
                    stok={item.stok}
                    onOrderClick={handleOrderClick}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <div className="w-[30%] bg-white min-h-full border-l-2 border-slate-200 px-10">
        <div className=" w-full  py-5 ">
          <Input placeholder="Nama Customer" size="large" />
        </div>
        {/* Menut */}
        <div className="w-full h-[65%]  overflow-y-auto scrollbar-thin scrollbar-thumb-rounded">
          <div className="flex flex-wrap   gap-x-7  gap-y-3 justify-center ">
            {orders &&
              orders.map((item, index) => {
                return (
                  <CardMenus2
                    key={index}
                    harga={item.harga}
                    nama={item.nama}
                    img={item.img}
                    total={item.jumlah}
                    onOrderClick={handleOrderClick}
                  />
                );
              })}
          </div>
        </div>
        <div className="justify-start mt-3 ">
          <p className=" text-[13px] font-semibold">
            Total Pesanan : {orders.length}{" "}
          </p>
          <p className=" text-[13px] font-semibold">
            Total Pembayaran: Rp.{total}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
