import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import axios from 'axios';

export default function MyOrder() {

  const [name, setName]=useState("")
  const [data, setData]=useState([])
  const email = localStorage.getItem('email');

  // const productData = [
  //   {
  //     id: 1,
  //     name: "Mobile",
  //     image: "Phone1.webp",
  //     price: "15000",
  //     Discount: "15%",
  //     Description: ["6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
  //       "22.1 cm (8.7 inch) HD Display",
  //       "8 MP Primary Camera | 5 MP Front",
  //       "Android 11 | Battery: 6400 mAh Lithium Ion",
  //       " Voice Call (Dual Sim, GSM|WCDMA|LTE FDD|TD-LTE)",
  //       "Processor: ARM A75, Unisoc T616"],
  //     Reviews: ["very good thanks flipakrts", "good camera Quelity", "nice Prodect", "battery service is not good"]
  //   },
  //   {
  //     id: 2,
  //     name: "Desktop",
  //     image: "Desktop.webp",
  //     price: "5000",
  //     Discount: "8%",
  //     Description: ["Lenovo G Series 23.8 inch Full HD LED Backlit IPS Panel Gaming Monitor (G24-20)",
  //       "Panel Type: IPS Panel",
  //       "Screen Resolution Type: Full HD",
  //       "Brightness: 350 nits",
  //       "Response Time: 0.5 ms | Refresh Rate: 144 Hz",
  //       "HDMI Ports - 2"],
  //     Reviews: ["very good thanks flipakrts", "Good quality product", "Highly recommended", "Fabulous!", "Mind-blowing purchase"]
  //   },
  //   {
  //     id: 3,
  //     name: "Bags",
  //     image: "Bags.webp",
  //     price: "900",
  //     Discount: "10%",
  //     Description: ["Capacity: 49 L",
  //       "Color: Blue",
  //       " Weight: 2.5 kg",
  //       "External Width: 38 cm",
  //       "External Height: 55 cm",
  //       "External Depth: 23 cm",
  //       "Warranty Summary: 3 Years",
  //       "Domestic Warranty: 3 Year",
  //       "International Warranty: 3 Year"],
  //     Reviews: ["Best product with best service", "good product", "Fantastic trolley bag", "Good product Really awesome"]
  //   },
  //   {
  //     id: 4,
  //     name: "Refrigreter",
  //     image: "frezz.jpg",
  //     price: "40000",
  //     Discount: "17%",
  //     Description: ["LG 242 L Frost Free Double Door 3 Star Refrigerator with Smart Inverter",
  //       "Smart Diagnosis",
  //       "Auto Smart Connect Technology",
  //       "Moist ‘N’ Fresh Fruit and Vegetable Storage",
  //       "Toughened Glass Shelves",
  //       "Large Bottle Storage",
  //       "Double Twist Ice Tray",
  //       "Antibacterial Gasket"],
  //     Reviews: ["very good thanks flipakrts", "Great product", "Absolute rubbish!", "Terrific purchase"]
  //   },
  //   {
  //     id: 5,
  //     name: "Laptop",
  //     image: "Laptop1.webp",
  //     price: "54000",
  //     Discount: "9%",
  //     Description: ["HP 15s (2023) Intel Core i5 1155G7 11th Gen",
  //       "16 GB/512 GB SSD",
  //       "15.6 Inch, Natural Silver, 1.69 Kg, With MS Office",
  //       "64 bit Windows 11 Operating System",
  //       "39.62 cm (15.6 inch) display"],
  //     Reviews: ["Nice product", "good camera Quelity", "Terrific purchase", "battery service is good", "Mind-blowing purchase"]
  //   },
  //   {
  //     id: 6,
  //     name: "Watch",
  //     image: "Watch1.webp",
  //     price: "4000",
  //     Discount: "11%"
  //   },
  //   {
  //     id: 7,
  //     name: "PowerBank",
  //     image: "Power_Bank.webp",
  //     price: "1000",
  //     Discount: "9%"
  //   },
  //   {
  //     id: 8,
  //     name: "SmartWatch",
  //     image: "Watch2.webp",
  //     price: "84000",
  //     Discount: "11%"
  //   },
  //   {
  //     id: 9,
  //     name: "Camera",
  //     image: "Camera.webp",
  //     price: "17000",
  //     Discount: "9%"
  //   },
  //   {
  //     id: 10,
  //     name: "Printer",
  //     image: "Printer.webp",
  //     price: "7000",
  //     Discount: "12%"
  //   },
  //   {
  //     id: 11,
  //     name: "Shoes",
  //     image: "Shoes.webp",
  //     price: "3500",
  //     Discount: "9%"
  //   },
  //   {
  //     id: 12,
  //     name: "T shirt",
  //     image: "T_shirt3.jpg",
  //     price: "1190",
  //     Discount: "9%"
  //   },
  // ]
  const dataSource= data.map((element,index)=>{
    return{
      key: index+1,
      name: element.name,
      address: element.address,
      status: element.status,
      price: `Rs.${element.price}.00`,
      payment: element.Payment_mode,
      date: element.Delivery_date
    };
  });
  const columns = [
    {
      title: 'Sr no.',
      dataIndex: 'key',
      key: "key",
      width: '5%',
    },
    {
      title: 'Product name',
      dataIndex: 'name',
      key: "name",
      filters: [
        {
          text: 'Refrigreter',
          value: 'Refrigreter',
        },
        {
          text: 'Category 1',
          value: 'Category 1',
          children: [
            {
              text: 'Watch',
              value: "Watch",
            },
            {
              text: "Laptop",
              value: "Laptop",
            },
          ],
        },
        {
          text: 'Category 2',
          value: 'Category 2',
          children: [
            {
              text: "Mobile",
              value: 'Green',
            },
            {
              text: "Desktop",
              value: "Desktop",
            },
          ],
        },
      ],

      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value),
      width: '14%',
    },
    {
      title: 'Product price',
      dataIndex: 'price',
      key: 'price',
      width: '14%',
    },
    {
      title: 'Payment mode',
      dataIndex: 'payment',
      key: "payment",
      width: '14%',
    },
    {
      title: 'Delivery date',
      dataIndex: 'date',
      key: "date",
      width: '14%',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: '20%',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: '10%',
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const getOrderData = () => {
    axios.get(`http://localhost:8000/user/${email}/orderDetail`)
      .then((res) => {
        console.log("Backend order details Successful Response", res);
        if (res.data.status == 1) {
          setData(res?.data?.orderDetail)
        }
      }).catch((error) => {
        console.log("Backend order details Error", error);
      });
  }
  useEffect(()=>{
    getOrderData();
  },[]);



  return (
    <div>
      <Table dataSource={dataSource} columns={columns} onChange={onChange} />;

    </div>
  )
}


