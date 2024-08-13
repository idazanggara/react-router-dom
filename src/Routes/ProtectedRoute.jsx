/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom"


const ProtectedRoute = (props) => {
  // ini nanti untuk check ada token atau enggak di local storage
  const fakeAuth = false

  if (!fakeAuth) {
    return <Navigate to="/login" />
  }

  // selain itu kita akan return ke children
  return props.children
}

export default ProtectedRoute
