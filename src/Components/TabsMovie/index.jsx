import React, { useEffect, useState } from "react";
import { https } from "../../Services/config";
import { Tabs } from "antd";
import moment from "moment";
const onChange = (key) => {
  console.log(key);
};

export default function TabsMovie() {
  const [heThongRap, setHeThongRap] = useState([]);
  useEffect(() => {
    https
      .get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP08")
      .then((res) => {
        console.log(res);
        setHeThongRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let renderDsPhim = (danhSachPhim) => {
    return danhSachPhim.map((phim) => {
      return (
        <div className="p-5 flex space-x-5">
          <img
            src={phim.hinhAnh}
            className="w-32 h-40 object-cover block flex-shrink-0"
            alt=""
          />
          <div className="grid grid-cols-4 w-full gap-5">
            {phim.lstLichChieuTheoPhim.slice(0, 8).map((lichChieu) => {
              // moment js
              return (
                <div className="bg-red-500 text-white rounded h-10 leading-10 text-center">
                  {moment(lichChieu.ngayChieuGioChieu).format(
                    "DD/MM/YYYY - hh:mm"
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };
  let renderHeThongRap = () => {
    return heThongRap.map((heThong, index) => {
      return {
        key: index,
        label: <img className="w-20" src={heThong.logo} alt="" />,
        children: (
          <Tabs
            tabPosition="left"
            defaultActiveKey="1"
            items={heThong.lstCumRap.map((cumRap) => {
              return {
                key: cumRap.maCumRap,
                label: (
                  <div className="text-left w-80 whitespace-normal ">
                    <p className="text-green-600 font-bold ">
                      {cumRap.tenCumRap}
                    </p>
                    <p className="truncate">{cumRap.diaChi}</p>
                  </div>
                ),
                children: renderDsPhim(cumRap.danhSachPhim),
              };
            })}
          />
        ),
      };
    });
  };
  return (
    <div className="container">
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        items={renderHeThongRap()}
        onChange={onChange}
      />
    </div>
  );
}
