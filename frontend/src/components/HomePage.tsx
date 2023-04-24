import { FC } from 'react'
import {Link} from 'react-router-dom'


const HomePage: FC = () => {
  return <div>
    FADHILI Josue || internshala work
    <Link to={'/table1'}>go to the first table</Link>
  </div>
}

export default HomePage