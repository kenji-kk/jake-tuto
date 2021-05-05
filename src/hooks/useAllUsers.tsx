import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";


export const useAllUsers = () => {
  const { showMessage } = useMessage()
  const [loading, setloading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<User>>([]);


  const getUsers = useCallback(() => {
    setloading(true)
    axios
    .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
    .then((res) => setUsers(res.data))
    .catch(() => { 
      showMessage({title: "ユーザー取得に失敗しました", status: "error"})
    }).finally(() => {
      setloading(false)
    });
  }, [ showMessage])
  return { getUsers, loading, users }
}
