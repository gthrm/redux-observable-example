import React, { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUser } from './actions'

export function App() {
  const dispatch = useDispatch();
  const pingAction = useMemo(() => bindActionCreators(fetchUser, dispatch), [dispatch])
  const isPinging = useSelector(({ isPinging }) => (isPinging))

  return (
    <div>
      <h1>Is Pinging: {isPinging.toString()}</h1>
      <button onClick={() => pingAction('torvalds')}>Start PING</button>
    </div>
  );
}
