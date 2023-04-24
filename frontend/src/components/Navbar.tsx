import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'


const Navbar: FC = () => {
    const [isopen, setISOPEN] = useState(true);

    return <div className='fixed top-o right-0 left-0 navbar'>
        <div className=''>
            intershalaWork || FADHILI Josue
        </div>
        <div className='navleft'>
            <NavLink className='navlinks' to={'/table1'}>Table One</NavLink>
            <NavLink className='navlinks' to={'/table2'}>Table Two</NavLink>
            <NavLink className='navlinks' to={'/table3'}>Table Three</NavLink>
            <NavLink className='navlinks' to={'/table4'}>Table Four</NavLink>
            <NavLink className='navlinks' to={'/table5'}>Table five</NavLink>
        </div>
        {isopen &&
            <div className="sideNav" onClick={()=>setISOPEN(false)}>
                <button>X</button>
                <NavLink className='navlinks' to={'/table1'}>Table One</NavLink>
                <NavLink className='navlinks' to={'/table2'}>Table Two</NavLink>
                <NavLink className='navlinks' to={'/table3'}>Table Three</NavLink>
                <NavLink className='navlinks' to={'/table4'}>Table Four</NavLink>
                <NavLink className='navlinks' to={'/table5'}>Table five</NavLink>
            </div>
        }
        <div className="menu" onClick={()=>setISOPEN(true)}>menu</div>
    </div>
}

export default Navbar