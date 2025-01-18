import { useEffect, useState } from "react"
import Card from "./Card"
import { db } from "../firebase"
import "./Home.css"

import { collection,getDocs } from 'firebase/firestore'
import { postType } from "./Type"

const Home = ({authInfo} : {authInfo:{isAuth:boolean,username:string|null}}) => {

  const [posts,setPosts] = useState<(postType & {id: string})[]>([]);

  // データ取得ロジック
  const getData = async () => {
    const postsData : (postType & {id: string})[] = [];
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      const data : postType = doc.data() as postType;;
      postsData.push({...data,id: doc.id});
    });
    setPosts(postsData);
  }

  // 初期表示ロジック
  useEffect(() => {
    const fetchData = async () => {
      await getData();
    }
    fetchData();
  },[]);

  return (
    <>
      {posts.map( (post) => {
        return (
          <Card key={post.id} data={post} refeshFn={getData} isAuth={authInfo.isAuth} authUser={authInfo.username}/>
        )
      })}
    </>
  )
}

export default Home