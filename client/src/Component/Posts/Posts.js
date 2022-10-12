import React from "react";
import { Col, Row, Spin, Space } from "antd";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return !posts.length ? (
    <Space size="middle" align="center">
      <Spin size="large" />
    </Space>
  ) : (
    <div className="block">
      <div className="container-fluid" orientation="left">
        <br />
        <Row justify="center" align="middle" gutter={[16, 16]}>
          {posts.map((post) => (
            <Col key={post._id} className="gutter-row" span={7}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Posts;
