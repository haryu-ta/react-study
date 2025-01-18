import { postType } from "./Type";
import { db } from "../firebase";

import { deleteDoc, doc } from 'firebase/firestore'

const Card = ({ data, refeshFn, isAuth,authUser }: { data: postType & { id: string }, refeshFn: () => void, isAuth: boolean ,authUser: string | null}) => {

  const deleteItem = async () => {
    if (window.confirm("削除しますか？")) {
      await deleteDoc(doc(db, "posts", data.id));
      refeshFn();
    }
  }

  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>{data.title}</h1>
        </div>
        <div className="postTextContainer">
          {data.content}
        </div>
        <div className="nameAndDeleteButton">
          <h3>{data.author.username}</h3>
          <button onClick={deleteItem} disabled={!isAuth || authUser !== data.author.username }>削除</button>
        </div>
      </div>
    </div>
  )
}

export default Card