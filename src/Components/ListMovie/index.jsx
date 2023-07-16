import React, { useEffect, useState } from "react";
import { https } from "../../Services/config";
import { Card } from "antd";
import { NavLink } from "react-router-dom";
const { Meta } = Card;
function ListMovie() {
  const [movieArr, setMovieArr] = useState([]);
  useEffect(() => {
    https
      .get("/api/QuanLyPhim/LayDanhSachPhim/?maNhom=GP03")
      .then((res) => {
        console.log(res);
        setMovieArr(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderMovieList = () => {
    return movieArr.map((item) => {
      return (
        <Card
          key={item.maPhim}
          className="shadow"
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              className="h-60 object-cover"
              alt="example"
              src={item.hinhAnh}
            />
          }
        >
          <Meta
            title="Europe Street beat"
            description={
              <div>
                <p>{item.tenPhim}</p>
              </div>
            }
          />
          <NavLink
            className="w-full inline-block text-center rounded-lg bg-red-500 mt-3 transition text-white py-3 hover:scale-75 cursor-pointer duration-500"
            to={`/detail/${item.maPhim}`}
          >
            Xem chi tiết
          </NavLink>
        </Card>
      );
    });
  };
  return (
    <div>
      <h1 className="text-center text-6xl pb-5">List Movie</h1>
      <div className="container grid grid-cols-4 gap-5">
        {renderMovieList()}
      </div>
    </div>
  );
}

export default ListMovie;
