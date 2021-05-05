import {  Center,  Spinner,  useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";

import { UserCard} from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/userLoginUser";


export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose} = useDisclosure();
  const { getUsers, users, loading}  = useAllUsers();
  const {onSlectUser,selectedUser} = useSelectUser();
  const {loginUser} = useLoginUser();

  useEffect(() => getUsers(), [getUsers]);

  const onClickUser = useCallback((id: number) => {
    onSlectUser({ id, users, onOpen});
  },[ users, onSlectUser, onOpen]);

  return (
    <>
      {loading ? (
      <Center h="100vh">
        <Spinner />
      </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10}}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard 
              id={user.id}
              imageUrl="https://source.unsplash.com/random"
              userName={user.username}
              fullName={user.name}
              onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} isAdmin={loginUser?.isAdmin}/>
    </>
  );
});
