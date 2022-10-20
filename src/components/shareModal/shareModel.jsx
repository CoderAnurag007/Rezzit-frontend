import { Modal, useMantineTheme } from "@mantine/core";
import PostShare from "../PostShare/PostShare";

function ShareModel({ modalOpen, setmodalOpen }) {
  const theme = useMantineTheme();

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
      size={"55%"}
      onClose={() => {
        setmodalOpen(false);
      }}
    >
      {/* Modal content */}
      <PostShare />
    </Modal>
  );
}

export default ShareModel;
