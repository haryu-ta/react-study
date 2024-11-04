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
  - レンダーを跨いで情報を保存できます
  - dom操作したい時に利用
  - https://ja.react.dev/reference/react/useRef

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

## useOptimistic

- 用等
  - UIを楽観的に更新するためのHook
  - https://ja.react.dev/reference/react/useOptimistic
  
**注意**
特定VerのReactでないと動かない

```ksh
# useOptimisticを使うために必要
npm i --legacy-peer-deps react-dom@18.3.0-canary-6db7f4209-20231021
npm i  react@18.3.0-canary-6db7f4209-20231021
```

```javascript
type Message = {
  id : number,
  message : string,
  isLoadin: boolean
}

const Form = () => {

  // 楽観更新対象のstateを定義
  const [ messages,setMessages ] = useState<Message>({id:1,message:"Hello",isLoading:false});

  // submit処理
  const handler = aync (formData:Formdata) => {
      const sendMessage = formData.get("message") as string;
      // 楽観更新実施
      addOptimistic(sendMessage);
      // 遅い処理
      const responseMessage:Promise<string> = awai delayOperate(sendMessage);
      // 最終更新処理
      setMessage((prev) => {
        [
          ...prev,
          {id:prev.length + 1,text: responseMessage,isLoading:false}
        ]
      });
  }

  // 楽観更新のための処理(第一引数：楽観更新対象のstate,第二引数:更新関数)
  // 第二引数の関数内でcurrentStateにoptimisticValueを反映した結果を返却する
  // optimisticValue : addOptimisticの引数に渡した値が格納される
  const [optimisticState,addOptimistic] = useOptimitic(messages,(currentState:Message[],optimisticValue:string) => {
    return (
      // 楽観更新の結果を返却 → optimisticStateに格納される
      [
        ...currentState,
        {id:currentState.length + 1,text: optimisticValue,isLoading:true}
      ]
    )
  })

  returm (
    <div>
      <form action={handle}>
      <input type="text" name="message"/>
      <button type="submit">送信</button>
    </div>
    <hr/>
    // 楽観更新結果を表示
    {optimisticState.map((message:Message) => {
      return (
        <div key={message.id}>
          {message.text}{message.isLoading ?? "(Loading...)"}
        </div>
      )
    })}
  )
}
```

## useTrasition

- 用途
  - UIをブロックせずにstateを更新するためのHook
    - 連続で押下された場合に、途中の押下の操作をキャンセルし最後の操作のみを有効にする
    - ページネーションの連続押しなどに有効
    - https://ja.react.dev/reference/react/useTransition

```javascript
const Top = () => {
  const [tab,setTab] = useState("1");
  const [isLoading,startTrasition] = useTrasition();

  const handler = (tabName: string) {
    // トラジションをマーク
    startTrasition(() => {
      setTab(tabName)
    })

    return (
      <>
        <div>
          <input type="button" value="1" onClick={() => handler("1")}/>
          <input type="button" value="2" onClick={() => handler("2")}/>
          <input type="button" value="3" onClick={() => handler("3")}/>
        </div>
        <hr/>
        {tab === "1" && <First/>}
        {tab === "2" && <Second/>}
        {tab === "3" && <Third/>}
      </>
    )
  }
}
```

## useDefferedValue

- 用途
  - UIの一部の更新を遅延させる
    - 指定したstateのコピーを保持し、こちらのstateは連続入力時に更新を遅延させることで
    レンダー回数を減少させることでUX改善やパフォーマンス向上に繋げる
    - https://ja.react.dev/reference/react/useDeferredValue

```javascript
const SearchPage = () => {
  const [word,setWord] = useState("");
  const deferredValue = useDeferredValue(word);  

  return (
    <div>
      <label>
        検索
        <input 
          type="text" 
          value={word} 
          onClick={(e) => setWord(e.target.value) } 
          style={word !== deferredValue ? {"backgroundColor":"gray"} : {"backgroundColor":"white"} }
        />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Result query={deferredValue}/>
        </Suspense>
      </label>
    </div>
  )
}
```

## useId

- 用途
  - アクセシビリティ属性に渡すことができる一意の ID を生成するためのフック
  - key属性のidとして使用してはいけない
  - https://ja.react.dev/reference/react/useId#usage

```javascript
const Page = () => {
  return (
    <>
      <FormField name="Firstname" />
      <FormField name="LastName" />
    </>
  )
}

const FormField = ({name:string}) => {
  const itemid = useId();
    return (
      <div>
        <label htmlFor={itemid}>{name}</label>
        <input type="text" id={itemid} />
      </div>
  )
}
```

## useImperativeHandle

- 用途
  - ref として公開されるハンドルをカスタマイズするための React フックです。
  - https://ja.react.dev/reference/react/useImperativeHandle

```javascript
type handlerRef = {
    focus(): void
    scrollLast():void
    scrollTop():void
}

const TestPage = () => {
    // 子コンポーネントから参照を受け取るRef
    const ref = useRef<handlerRef>(null);

    const clickFocus = () => {
      // 子コンポーネントで定義したイベントを実行
      ref.current?.focus();
    }

    const clickScroll = () => {
      // 子コンポーネントで定義したイベントを実行
      ref.current?.scrollTop();
    }

    const clickScrollBottm = () => {
      // 子コンポーネントで定義したイベントを実行
      ref.current?.scrollLast();
      ref.current?.focus();
    }
    
    return (
        <>
            <SecondPage ref={secondRef}/>
            <hr/>
            <input type="button" value="focus" onClick={clickFocus}/>
            <br/>
            <input type="button" value="scrollTop" onClick={clickScroll}/>
            <br/>
            <input type="button" value="scrollBottom" onClick={clickScrollBottm}/>
        </>
    )
}

// prposは使わなくても定義が必要
const SecondPage = forwardRef<handlerRef>((props,ref) => {

    const textRef = useRef<HTMLTextAreaElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // 親から受け取ったrefに対してイベントを定義
    useImperativeHandle(ref,() => ({
        focus: () => {
            inputRef.current!.focus();
        },
        scrollLast: () => {
            const node = textRef.current;
            node!.scrollTop = node!.scrollHeight; 
        },
        scrollTop : () => {
            const node = textRef.current;
            node!.scrollTop = 0;
        }
    }),[]);

    return (
        <>
            <textarea rows={4} cols={50} value={inputText()} ref={textRef}/>
            <br/>
            <input type="text" ref={inputRef}/>
        </>
    )
});
```

## useForm

- 用途
  - Formの入力チェックなどの処理が簡単に実装可能
  - [react-hook-formを使用](https://react-hook-form.com/docs/useform)
  - [参照](https://reffect.co.jp/react/react-hook-form)
  - [参照2](https://qiita.com/Nozomuts/items/60d15d97eeef71993f06)

## useReducer

- 用途
  - stateの管理と更新処理を一体にして管理する

```javascript

const reduce = (prev: number,action: {type: "increment"|"decrement"|"reset"}):number => {
  switch(action.type){
    case "increment":
      return ++prev;
    case "decrement":
      return --prev;
    case "reset":
      return 0;
  }
}

const Page:React.FC = () => {
  const [ count,dispatch ] = useReducer(reducer,0);
  return (
    <div>
      <p>{count}</p>
      <input type="button" value="+" onClick={() => dispatch({type:"increment"});}/>
      <input type="button" value="-" onClick={() => dispatch({type:"decrement"});}/>
    </div>
  )
}
```

## useSyncExternalStore
## useLayoutEffect