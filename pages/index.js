import Awesome from '../components/Awesome.jsx';
import { useState } from 'react';

export default function Index() {
  const [wow, setWow] = useState(false);
  return (
    <div>
      <button onClick={() => setWow(!wow)}>Click for some WOW!</button>
      Heyo I am wow? {wow === true ? 'YES!' : 'No ....'} <Awesome />
    </div>
  );
}
