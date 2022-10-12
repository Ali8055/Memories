import "antd/dist/antd.css";
import "./App.css";
import React, { useEffect, useState } from "react";
import { Layout, Menu, Typography, Image, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Posts from "./Component/Posts/Posts";
import Forms from "./Component/Form/Forms";
import memories from "./images/memories.png";
import { getRenderPropValue } from "antd/lib/_util/getRenderPropValue";

const { Header, Content, Footer, Sider } = Layout;

const { Title } = Typography;

function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Layout
      className="layout"
      style={{
        // backgroundColor: "green",
        backgroundImage: "C:memories_projectclientsrcimages\background.png",
      }}
    >
      <Header>
        <Menu mode="horizontal" theme="dark">
          <Title style={{ textAlign: "center" }} level={2} type="danger">
            Memories
          </Title>
          <Image src={memories} alt="memories" height="40px" />
        </Menu>
      </Header>
      <Content className="container-fluid" orientation="left">
        <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={16}>
            <Posts setCurrentId={setCurrentId} />
          </Col>
          <Col className="gutter-row" span={8}>
            <Forms currentId={currentId} setCurrentId={setCurrentId} />
          </Col>
        </Row>
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
