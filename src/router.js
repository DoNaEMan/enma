import TestA from './TestA';
import TestB from './TestB';

export default [
  {
    path: '/a',
    exact: true,
    component: TestA
  },
  {
    path: '/b',
    exact: true,
    component: TestB
  }
];