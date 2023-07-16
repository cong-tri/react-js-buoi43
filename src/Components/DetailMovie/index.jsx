import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { https } from "../../Services/config";
import Progress from "antd/es/progress/progress";
import { Card } from "antd";
const { Meta } = Card;
function DetailMovie() {
  let { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    console.log(id);
    https
      .get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      .then((res) => {
        console.log(res);
        setMovie(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container flex items-center justify-center space-x-5">
      <Card
        className="shadow"
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <img
            className="h-60 object-cover"
            alt="example"
            src={movie.hinhAnh}
          />
        }
      >
        <Meta
          title="Europe Street beat"
          description={
            <div>
              <p>{movie.tenPhim}</p>
            </div>
          }
        />
      </Card>
      <Progress
        type="circle"
        percent={movie.danhGia}
        format={(percent) => `${percent / 10} Điểm`}
      />
    </div>
  );
}

export default DetailMovie;
