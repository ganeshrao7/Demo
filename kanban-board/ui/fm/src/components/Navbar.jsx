import { MenuData  } from './MenuData';
import { BsClipboardPlus } from 'react-icons/bs';
import './NavbarStyle.css'
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const Navbar = () => {

        const [state,setState] = useState(false)
        const handleClick =()=>{
            setState(!state)
        }
        const navigate = useNavigate();
        const navigateTask = () => {
        
            navigate('/task');
          };

 
    return ( 
        <div className='div'>
        <nav className="nav">
        <h1 className="kanban" onClick={navigateTask}><span>K</span>anban <span>B</span>oard <BsClipboardPlus className='clip'/></h1> 
            <div className='menu-icons' onClick={handleClick}>
                <i className={state ? "fas fa-times":'fas fa-bars'}></i>
            </div>
            <ul className={state ? 'nav-menu active': 'nav-menu'}>
            {MenuData.map((item,index)=>{
                  return(
                    <li key={index}>
                        <a href={item.url} className={item.cName}>
                            <i className={item.icon} >
                                </i>{item.title}</a>
                        
    
                    </li>
                )
            }
          
            )}
         
        </ul>
        </nav>
        </div>
        
     );
}
 
export default Navbar;