/*
메일 모달
@author 조혜안
@since 2023.11.25
*/
import { Box, Modal, Typography } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { atomIsMailModal } from "recoil/atomIsMailModal";
import { atomSelectedCsmr } from "recoil/atomSelectedCsmr";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function MailModal() {
  const csmrMgmtNo = useRecoilValue(atomSelectedCsmr);
  const [isMailModal, setIsMailModal] = useRecoilState(atomIsMailModal);

  return (
    <Modal
      open={isMailModal}
      onClose={() => setIsMailModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          asdfasdf
        </Typography>
      </Box>
    </Modal>
  );
}
