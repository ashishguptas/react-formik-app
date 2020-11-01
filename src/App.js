import './App.css';
import EnrollmentForm from './components/EnrollmentForm';
import FormikContainer from './components/FormikContainer';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import { theme, ThemeProvider  } from '@chakra-ui/core'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/*      
          <RegistrationForm />
          <EnrollmentForm />
        */}
        <LoginForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
