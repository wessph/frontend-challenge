import { AppRoutes } from './Routes';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';

const AppContent = styled.div`
    min-height: 100vh;
    background-image: linear-gradient(to right bottom, #ac92ec, #a78ce8, #a186e4, #9c80e0, #967adc);
  `

function App() {
  return (
    <AppContent>
      <AppRoutes />
    </AppContent>
  )
}

export default App;
