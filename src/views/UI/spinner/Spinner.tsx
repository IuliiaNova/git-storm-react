import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useAuth0 } from '@auth0/auth0-react';

const Spinner = () => {
  const {isLoading} = useAuth0()
  
  return (
    <>
    <ClimbingBoxLoader 
    color="#FFE53B" 
    loading={isLoading} />
    </>
  )
}

export default Spinner