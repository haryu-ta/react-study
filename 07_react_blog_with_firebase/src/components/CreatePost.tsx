import { useEffect, useState } from "react";
import "./CreatePost.css"
import { auth, db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const delay = async (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const CreatePost = ({isAuth} : {isAuth:boolean}) => {

  const navi = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if(!isAuth){
      navi("/login");
    }
  })

  const click = async () => {
    setLoading(true);
    await delay(2000);
    await addDoc(collection(db, "posts"), {
      title: title,
      content: content,
      author: {
        username: auth.currentUser?.email,
        id: auth.currentUser?.uid
      }
    });
    setLoading(false);
    navi("/");
  }

  return (
    <>

        <div className="createPostPage">
          {isLoading ?
            <span className="loader"></span>
          :
            <div className="postContainer">
              <h1>記事を投稿する</h1>
              <div className="inputPost">
                <div>タイトル</div>
                <input type="text" placeholder="タイトルを記入" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="inputPost">
                <div>投稿内容</div>
                <textarea placeholder="記事を記入" cols={30} rows={10} value={content} onChange={(e) => setContent(e.target.value)} />
              </div>
              <button className="postButton" onClick={click}>投稿</button>
            </div>
          }
        </div>
    </>
  )
}

export default CreatePost