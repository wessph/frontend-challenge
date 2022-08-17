import { AppRoutes } from './Routes';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';

const AppContent = styled.div`
    min-height: 100vh;
    background-color: #2c3338;
  `

function App() {
  return (
    <AppContent>
      <AppRoutes />
    </AppContent>
  )
}

export default App;
