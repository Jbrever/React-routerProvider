import React from "react";
import { NavLink } from "react-router-dom";

function Header(){
    return (
        <>
          <nav>
            <ul>
            
              <li>
                <NavLink to='/' style={({isActive})=>({
                  color: isActive ? "red":'black',
                })}
                
                >Home</NavLink>
              </li>

              <li>
                <NavLink to='/about' style={({isActive})=>({
                  color : isActive?'red':'black',
                })}
                
                 >About</NavLink>
              </li>
              
              <li>
                <NavLink to='/contact' style={({isActive})=>({
                  color : isActive?'red':'black',
                })}
                
                
                >Contact-us</NavLink>
              </li>

              <li>
                <NavLink to='/github' style={({isActive})=>({
                  color : isActive?'red':'black',
                })}
                
                
                >Github</NavLink>
              </li>
            
            </ul>         
          </nav>
        </>
    )
}

export default Header