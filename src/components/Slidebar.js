import {NavLink} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'





const Slidebar =()=>{
    return(
        <div className="slide bg-light">
            <ul>
                <li><NavLink to="/" exact className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName="active"><FaIcons.FaHome/> inicio</NavLink> </li>
                <li><NavLink to="/Sales" exact className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName="active"><FaIcons.FaBullseye/> Registrar Producto</NavLink> </li>
                <li><NavLink to="/Clientes" exact className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName="active"><FaIcons.FaUserFriends/> Ver Producto</NavLink> </li>
                <li><NavLink to="/ventas" exact className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName="active"><FaIcons.FaUserTie/> ventas</NavLink></li>
                <li><NavLink to="/reportes" exact className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName="active"><FaIcons.FaChartBar/> Reportes</NavLink></li>
                
            </ul>
     
        </div>
    )

}
export default Slidebar