import { Card, Popover, Button, Image } from "antd";
import {
  LikeTwoTone,
  DeleteTwoTone,
  ClockCircleTwoTone,
  DownOutlined,
  UserOutlined,
  MenuOutlined,
  SettingFilled,
  EditTwoTone,
} from "@ant-design/icons";
import React, { useState, setCurrentId } from "react";
import moment from "moment";
import "antd/dist/antd.css";
import "./style.css";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";
// const handleButtonClick = (e) => {
//   message.info("Click on left button.");
//   console.log("click left button", e);
// };

// const handleMenuClick = (e) => {
//   message.info("Click on menu item.");
//   console.log("click", e);
// };

const { Meta } = Card;
const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <div>
      <Card hoverable style={{ width: 240 }} cover={<img />}>
        <div className="imageparent">
          <div>
            <Image
              preview={false}
              alt="Picture of Memory"
              src={post.selectedFile}
            />
            <Popover
              className="imageicon"
              content={
                <div>
                  <a
                    size="small"
                    color="primary"
                    onClick={() => setCurrentId(post._id)}
                  >
                    <EditTwoTone fontSize="small" />
                    Edit
                  </a>
                  <br />
                  <a
                    size="small"
                    color="primary"
                    onClick={() => dispatch(deletePost(post._id))}
                  >
                    <DeleteTwoTone fontSize="small" />
                    Delete
                  </a>
                  <a onClick={hide}>Close</a>
                </div>
              }
              title=<a onClick={hide}>Close</a>
              trigger="click"
              open={open}
              onOpenChange={handleOpenChange}
            >
              <SettingFilled />
            </Popover>
          </div>
        </div>

        <Meta title={post.title} description={post.creator} />

        <p>{post.message}</p>
        <span>
          {post.tags.map((tag) => `#${tag} `)}
          <br /> <ClockCircleTwoTone /> : {moment(post.createdAt).fromNow()}
        </span>

        <div>
          <button
            size="small"
            type=" "
            color="primary"
            onClick={() => dispatch(likePost(post._id, post.likeCount))}
          >
            [{post.likeCount}
            ]<LikeTwoTone fontSize="small" />
          </button>
        </div>
      </Card>
      <br />
    </div>
  );
};

export default Post;
