import axios from 'axios';
import { FETCH_USERS } from './types';

export default function fetchUsers() {
  const request = axios.get('https://jsonplaceholder.typicode.com/users');

  return {
    type: FETCH_USERS,
    payload: [
      { name: 'Jane' },
      { name: 'Jeff' },
      { name: 'Josh' },
      { name: 'John' },
      { name: 'Jill' },
      { name: 'Jack' }
    ]
  };
}
