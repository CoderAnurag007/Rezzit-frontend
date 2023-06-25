import { Modal, useMantineTheme } from "@mantine/core";
import PostShare from "../PostShare/PostShare";
import { useContext, useEffect } from "react";
import { RezzitContext } from "../../context/RezzitProvider";

function ShareModel({
  modalOpen,
  setmodalOpen,
  handleUpdate,

  update,
  prevalue,
  postid,
}) {
  const theme = useMantineTheme();

  const { updated, setupdated } = useContext(RezzitContext);

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalOpen}
      // size={"55%"}
      onClose={() => {
        setmodalOpen(false);
      }}
    >
      {/* Modal content */}
      <PostShare
        update={update}
        prevalue={prevalue}
        postid={postid}
        setmodalOpen={setmodalOpen}
      />
    </Modal>
  );
}

export default ShareModel;
