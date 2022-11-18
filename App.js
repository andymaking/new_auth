import Navigation from "./src/Component/Navigation";
import {AuthProvider} from "./src/context/AuthContext";

const App = () => {
  return (
      <AuthProvider>
        <Navigation/>
      </AuthProvider>
  );
}

export  default  App