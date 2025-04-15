import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { increment, decrement } from './redux/counterSlice'
import UserList from './UserList';

function App() {
  const { value } = useSelector((store) => store.counter); //Redux store'daki state'i okumamıza (yani veriyi çekmemize) olanak tanır.
  console.log(value)
  const dispatch = useDispatch();//dispatch, bir olay (örneğin: butona tıklama) gerçekleştiğinde Redux store’daki state'i değiştiren fonksiyonu tetikler.
  return (
    <div>
      <div>{value}</div>
      <div><button onClick={() => dispatch(increment())}>Arttır</button></div>
      <div><button onClick={() => dispatch(decrement())}>Azalt</button></div>
      <UserList />
    </div>


  )
}

export default App
