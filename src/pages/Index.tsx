
import { Navigate } from "react-router-dom";

// Redirect to the Registration page which is now our main page
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
