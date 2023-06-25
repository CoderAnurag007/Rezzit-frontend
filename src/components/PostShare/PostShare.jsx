import React, { useContext, useEffect } from "react";
import "./PostShare.css";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilScenery } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPost } from "../../Actions/uploadAction";
import { RezzitContext } from "../../context/RezzitProvider";
import axios from "axios";

const PostShare = (props) => {
  const { update, prevalue, postid, setmodalOpen } = props;
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const imageRef = useRef();
  const { uploading } = useSelector((state) => state.PostReducer);
  const desc = useRef();
  const { user } = useSelector((state) => state.AuthReducer.authData);
  const server = process.env.REACT_APP_PUBLIC_FOLDER;
  // console.log(user);
  const [descval, setdescval] = useState("");
  const { updated, setupdated } = useContext(RezzitContext);
  const handleUpdate = async (postid, data) => {
    const res = await axios({
      url: `https://rezzit-backend.onrender.com/post/${postid}/updatepost`,
      method: "put",
      data: data,
    });

    setupdated(!updated);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setdescval(e.target.value);
  };

  const reset = () => {
    setImage(null);
    setdescval("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (descval == "") {
      alert("Please enter description");
      return false;
    }
    const newPost = {
      userId: user._id,
      desc: descval,
    };
    if (update) {
      setmodalOpen(false);
      handleUpdate(postid, newPost);
      reset();
      return;
    } else {
      dispatch(uploadPost(newPost));
      reset();
    }
  };

  useEffect(() => {
    if (update) {
      setdescval(prevalue);
    }
    console.log(props.postid, update, prevalue, "heheh");
  }, []);
  return (
    <div className="PostShare">
      <img
        src={
          user.profilepicture
            ? server + user.profilepicture
            : server + "defaultProfile.png"
        }
        alt=""
      />
      <div>
        <input
          type="text"
          // ref={desc}
          onChange={(e) => handleChange(e)}
          value={descval}
          required
          placeholder="What's happening"
        />

        <div className="Postshare_option">
          <button
            className="button ps-btn"
            onClick={handleSubmit}
            disabled={uploading}
          >
            {uploading
              ? "Uploading..."
              : update
              ? "Update Thought"
              : "Share Thought"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(PostShare);
