import logo from './logo.svg';
import './App.css';
import {
  atom,
  RecoilRoot,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const textState = atom({
  key: 'textState',
  default: '',
});

const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

function CharacterCounter() {
  const count = useRecoilValue(charCountState);

  return <> Character Count : {count}</>;
}

function CharacterCount() {
  return (
    <div>
      <TextInput></TextInput>
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);
  const onChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={onChange}></input>
      <br />
      {text.length}
    </div>
  );
}

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter></CharacterCounter>
      <CharacterCount></CharacterCount>
    </RecoilRoot>
  );
}

export default App;
