import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import MainLayout from "../../components/MainLayout/MainLayout";
import { statServer } from "../../config";
import { Col, Row, Table } from "./Styled";

const socket = io(statServer);

const NowPage = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    socket.emit("getAnimeList");

    socket.on("sendAnimeList", (data) => {
      setAnimeList(
        data.sort((a, b) => (b.viewers.length > a.viewers.length ? 1 : -1))
      );
    });
  }, []);

  return (
    <div>
      <MainLayout title="Сейчас смотрят">
        <Table>
          <Row>
            <Col width="80%" bold>
              Тайтл
            </Col>
            <Col width="20%" bold>
              Онлайн
            </Col>
          </Row>

          {animeList?.length > 0 &&
            animeList?.map((anime, index) => (
              <Row key={index}>
                <Col width="80%">{anime?.name}</Col>
                <Col width="20%">{anime?.viewers?.length}</Col>
              </Row>
            ))}
        </Table>
      </MainLayout>
    </div>
  );
};

export default NowPage;
