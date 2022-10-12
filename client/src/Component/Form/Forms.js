import React, { useState, useEffect } from "react";
import { Button, Form, Input, Card, Layout } from "antd";
import FileBase from "react-file-base64";

import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
// import { updatePost } from "../../../../server/controllers/post";
// import useStyles from "./styles.css";
// import { set } from "mongoose";
const { TextArea } = Input;
const { Header, Content, Footer, Sider } = Layout;

//get the current of post,

const Forms = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = () => {
    if (currentId) {
      console.log("CAR # 4");
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    console.log("CAR # 1");
    clear();
  };
  const onFinishFailed = (e) => {
    console.log("Failed Due to : ", e.errorInfo);
  };
  const clear = () => {
    console.log("All Clear");
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <Content>
      <Card
        title={currentId ? "Edit Selected Memory" : "Create a Memory"}
        style={{ width: 300 }}
      >
        <Form onFinish={handleSubmit} onFinishFailed={onFinishFailed}>
          <Form.Item label="">
            <Input
              placeholder="Creater"
              value={postData.creator}
              onChange={(e) =>
                setPostData({ ...postData, creator: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="">
            <Input
              placeholder="Title"
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="">
            <TextArea
              rows={4}
              value={postData.message}
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="">
            <Input
              placeholder="Tags"
              value={postData.tags}
              onChange={(e) =>
                setPostData({ ...postData, tags: e.target.value.split(",") })
              }
            />
          </Form.Item>
          <Form.Item>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="danger" onClick={clear}>
              All Clear
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Content>
  );
};

export default Forms;
