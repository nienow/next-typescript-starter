import {useState} from 'react';
import {useAddLog} from '../providers/DebugProvider';

export default function useCounter() {
  const {addLog} = useAddLog();
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
    addLog('Increment Counter to ' + (count + 1));
  };

  return {add, count};
}
