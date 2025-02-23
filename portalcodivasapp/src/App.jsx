

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faPaperPlane,
  faBell,
  faUserAlt,
  faBars,

} from "@fortawesome/free-solid-svg-icons";

import Routes from './routes'
import "./Assets/Sass/index.scss";
import styled from 'styled-components'
import './fonts/SpaceGrotesk-Regular.ttf'

import { AuthProvider } from './context/AuthProvider'

function App() {
  library.add([faSearch, faPaperPlane, faBell, faUserAlt, faBars]);
  dom.watch();
  // Links get added to mobile and normal nav

  return (
    <AuthProvider>
      <Body>
        <Routes />
      </Body>
    </AuthProvider>
  );
}

const Body = styled.div`
  font-family: 'Space Grotesk', sans-serif;
`

export default App;
