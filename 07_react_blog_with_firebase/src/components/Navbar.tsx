import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faPen,faLockOpen,faLock} from '@fortawesome/free-solid-svg-icons';

import './Navbar.css'

const Navbar = ({isAuth} : { isAuth : boolean}) => {
  return (
    <nav className='navbar'>
        <Link to="/"><FontAwesomeIcon icon={faHouse}/>ホーム</Link>
        {isAuth ?
          <Link to="/post"><FontAwesomeIcon icon={faPen}/>記事投稿</Link>
          :
          null
        }
        {!isAuth ? 
          <Link to="/login"><FontAwesomeIcon icon={faLockOpen}/>ログイン</Link>
          :
          <Link to="/logout"><FontAwesomeIcon icon={faLock}/>ログアウト</Link>
        }
    </nav>
  )
}

export default Navbar