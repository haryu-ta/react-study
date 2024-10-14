# React Hooks
## useState
- 用途
  - stateの管理

```javascript
const [value,setValue] = useState("");
```

## useEffect
- 用途
  - 副作用処理を記載する

```javascript
useEffect(() => {
  
  // 副作用処理

  return () => {

    //クリーンアップ処理 (発火条件：componentアンマウントor依存配列変更時)
    
  }
},[依存配列])
```

## useRef
- 用途
  - レンダー時に不要な値を参照する
  - dom操作したい時に利用

```javascript
const refElement = useRef<HTMLUListElement>(null);

const handler = (index:number) => {
  const ulElm = refElement.current;
  const imgElm = listElm?.querySelectorAll("li > img")[index];
  // const imgElm = listElm?.getElementsByTagName("li")[index].getElementsByTagName("img")[0];
}

return(
  <>
    <ul ref={refElemnt}>
      <li>
        <img src="">
      </li>
        <img src="">
      <li>
        <img src="">
      </li>
    </ul>
  </li>
)
```

## forwardRef (with useRef)
- 用途
  - 親コンポーネントから子のコンポーネントの部品を操作したい時

```javascript
const inputRef = useRef(null);

const handler = () => {
  inputRef.current?.focus();
}

return (
  <div>
    <FormField ref={inputRef}>
    <input type="button" label="Enter your name:" onClick={handler} value="Edit"/>
  </div>
)
```

```javascript
const FormField = forwardRef<HTMLInputElement, inputForm>((props, ref) => {
    return (
        <>
            <label>
                {props.label}
                <input type="text" ref={ref}/>  // このインプットにフォーカスされる
            </label>
        </>
    )
});
```


## useContext
- 用途
  - 複数のコンポーネントでstateにアクセス可能
    - useStateだと子要素に渡すためにはpopsとして持ち回す必要がある
    - useContextにすることで一元管理可能
    - [参考](https://ja.react.dev/reference/react/useContext)

```javascript
type UserType = {
  username: string,
  password: string
}

type ContextType = {
  user: UserType,
  login: (userinfo:UserType) => void,
  logout: () => void
}

// Contextを作成
const ShredContext = createContext<ContextType | undefined>(undefined);

const ContextProvider = ({children}:{children:ReactNode}) => {

  // コンポーネント間で共有したいstate
  const [ user, setUser ] = useState<UserType>(null);

  // コンポーネント間で共有したい関数
  const login = (userInfo:UserType) => {
    // ログイン完了
    setUser(userInfo);
  }

  // コンポネート間で共有したい関数
  const logout = () => {
    setUser(null);
  }

  // 共有したいコンポーネントをまとめる
  const context: ContextType = {
    user,
    login,
    logout
  }

  // Providerの定義
  return (
    <ShredContext.Provider value={context}>
      {children}
    </SharedContext.Provider>
  )
}

export default ContextProvider;

export const useContexts = () => useContext(ShredContext);
```


main.jsx
```javascript
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
)
```

使用箇所
```javascript
const { user,login,logout } = useContexts()!; 
```

## useCallback/useMemo/React.memo

- 用途
  - メモ化して不要なレンダリングを防ぐ
    - React.memo
      - propsに引き渡される値に変更がないとレンダリングされない
    - useMemo
      - レンダーする際に計算結果をキャッシュする
      - 処理の再計算に条件をつける
    - useCallback
      - レンダーする際に関数定義をキャッシュする
      - 関数の再定義に条件をつける

---

**React.memo**

```javascript
const Parent = () => {
  const [ val,setVal ] = useState<number>(0);
  const [ count,setCount ] = useState<number>(0);

  return (
    <>
      <input type="button" value="+" onClick={() => setVal((prev) => ++prev);}/>
      <p>{val}</p>
      <Child />
      <Child2 count={count}/>
    </number>
  )
}

// 親のレンダリングで関係のない子コンポーネントのレンダリングを抑止
const Child = memo(() => {
  return (
    <div>
      <hr/>
      <p>子コンポーネント</p>
    </div>
  )
});

// 渡すpropsに変更がない限りはレンダリング抑止
const Child2 = memo(({count}:{count:number}) => {
    <div>
      <hr/>
      <p>{count}</p>
    </div>
})

```

**useMemo**

```javascript
const Parent = () => {
  const [ val,setVal ] = useState<number>(0);
  const [ name,setName ] = useState<string>("");

  // 重い処理がある関数
  const calc = () => {
    return val * 2
  }

  // nameが変更になる度に再計算されるためメモ化
  const doubleVal = useMemo(() => calc(),[val]);

  return (
    <div>
      <input type="text"  onClick={(e) => setName(e.target.value)}>
      <input type="button" value="calc" onClick={() => setVal((prev) => ++prev;)}>
      <p>{val}</p>
      <p>{doubleVal}</p>
    </div>
  )
}
```

**useCallback**

```javascript
const Parent = () => {
  const [ word,setWord ] = useState<string>("");
  const [ count,setCount ] = useState<number>(0);
  
  // 親コンポーネントレンダー時に毎回再作成されることを防ぐ
  const handle = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  },[]);

  <input type="button value="+" onClick={() => setCount((pre) => ++ prev);}>
  <Child handler={handle}/>
}

// props自体はの値は変更されないが、
// 関数が毎回作り直されて別物と判定されるためレンダリング対象となるため
// useCallbackで関数の再作成を抑止する
const Child = memo(({handler}:{handler:React.ChangeEvent<HTMLInputElement>} => void ) => {
  return (
    <>
      <input type="text" onChange={handler}>
    </>
  )
} 
```