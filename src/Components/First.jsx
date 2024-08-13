import { useNavigate } from "react-router-dom"

const First = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>First</h1>
      <button onClick={() => navigate('/about')}>check About</button>
    </div>
  )
}

export default First
