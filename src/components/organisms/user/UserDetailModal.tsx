import { memo,  VFC } from "react";
import {  FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack,  } from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose} = props;
  return (
    <Modal 
        isOpen={isOpen} 
        onClose={onClose} 
        autoFocus={false}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent pb={6}>
            <ModalHeader>ユーザー詳細</ModalHeader>
            <ModalCloseButton />
            <ModalBody mx={4}> 
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>フルネーム</FormLabel>
                  <Input value="じゃけぇ" isReadOnly/>
                </FormControl>
                <FormControl>
                  <FormLabel>名前</FormLabel>
                  <Input value="takumi okada" isReadOnly/>
                </FormControl>
                <FormControl>
                  <FormLabel>Mail</FormLabel>
                  <Input value="aaaa.mail" isReadOnly/>
                </FormControl>
                <FormControl>
                  <FormLabel>電話番号</FormLabel>
                  <Input value="0000000000" isReadOnly/>
                </FormControl>
              </Stack>
            </ModalBody>
        </ModalContent>
      </Modal>
   );
  });
