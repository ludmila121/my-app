//ДВА різних счетчика -- працюють по-різно

// import {useState} from 'react';


//   return (
//     <div>
//       <h1> Counter that update separately</h1>
//       <MyButton />
//       <MyButton />
//     </div>
//   );
// }

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleclick() {
//     setCount(count +1);
//   }

//   return (
//     <button onClick = {handleclick}>
//       Clicked {count} times
//     </button>
//   );
// }



//Два счетчика змінюються разом
import {useState} from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count +1);
  }
  return (
    <div>
      <h1> Counter that update separately</h1>
      <MyButton count={count}onClick={handleClick} />
      <MyButton count={count} onClick={handleClick}  />
    </div>
  );
}
function MyButton({count, onClick}) {
   return (
    <button onClick = {onClick}>
      Clicked {count} times
    </button>
  );
}