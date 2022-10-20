import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../Actions/uploadAction";
import { UpdateUser } from "../../Actions/userAction";

function ProfileModal({ modalOpened, setmodalOpen, data }) {
  const theme = useMantineTheme();
  const { password, ...other } = data;
  const [formdata, setformdata] = useState(other);
  const [profileimage, setprofileimage] = useState(null);
  const [coverimage, setcoverimage] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();
  const { user } = useSelector((state) => state.AuthReducer.authData);

  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      e.target.name === "profilepicture"
        ? setprofileimage(img)
        : setcoverimage(img);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = formdata;
    if (profileimage) {
      const data = new FormData();
      const filename = Date.now() + profileimage.name;
      data.append("name", filename);
      data.append("file", profileimage);
      data.append("password", user.password);
      UserData.profilepicture = filename;

      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    if (coverimage) {
      const data = new FormData();
      const filename = Date.now() + coverimage.name;
      data.append("name", filename);
      data.append("file", coverimage);
      data.append("password", user.password);
      UserData.coverpicture = filename;

      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    UserData.password = user.password;
    console.log(user);
    dispatch(UpdateUser(params.id, UserData));
    setmodalOpen(false);
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size={"55%"}
      opened={modalOpened}
      onClose={() => {
        console.log("Hell");
        setmodalOpen(false);
      }}
    >
      {/* Modal content */}
      <form action="" className="infoForm">
        <h3>Profile Info</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="firstname"
            placeholder="First Name"
            onChange={handleChange}
            value={formdata.firstname}
          />
          <input
            type="text"
            className="infoInput"
            name="lastname"
            placeholder="Last Name"
            onChange={handleChange}
            value={formdata.lastname}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="workat"
            placeholder="Works At"
            onChange={handleChange}
            value={formdata.workat}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="livesin"
            placeholder="Lives In"
            onChange={handleChange}
            value={formdata.livesin}
          />
          <input
            type="text"
            className="infoInput"
            name="country"
            placeholder="Country"
            onChange={handleChange}
            value={formdata.country}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="relationship"
            onChange={handleChange}
            placeholder="Realationship Status"
            value={formdata.relationship}
          />
        </div>
        <div>
          Profile Image
          <input type="file" name="profilepicture" onChange={onImageChange} />
          Cover Image
          <input type="file" name="coverpicture" onChange={onImageChange} />
        </div>
        <button className="button infoButton" onClick={handleSubmit}>
          Update
        </button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
