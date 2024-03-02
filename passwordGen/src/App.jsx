import { useState, useCallback,useEffect,useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numb, setNumb] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");
  const [buttonText,setButtonText] = useState('copy') ;

  const passwordRef = useRef(null) ;

  const copyPassword2ClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password) ;
    setButtonText('copied') ;
  },[password])

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numb) str += "0123456789";
    if (char) str += "!@#$%^&*-_+=[]{}`~";

    for (let i = 1; i <= length; i++) {
      let character = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(character);
    }
    setPassword(pass);
    setButtonText('copy');
  }, [length, numb, char, setPassword,]);


  useEffect(()=>{
    passGenerator();
  },[length,char,numb,passGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPassword2ClipBoard}
          >{buttonText}</button>
        </div>

        
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numb}
              id="numberInput"
              onChange={() => {
                setNumb((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
