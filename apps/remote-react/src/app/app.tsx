// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import ReactDOM from 'react-dom';

export function App() {
  return (
    <>
      <NxWelcome title="remote-react" />
      <div />
    </>
  );
}

export class Mfe4React extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />, this);
  }
}

export default App;
