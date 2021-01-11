import react from 'react';
import './button.css';
import {Link} from 'react-router-dom';

const STYLE = ['btn--primary' , 'btn--outline']
const SIZE =['btn--medium' , 'btn--large'];

export const Button = ({children,type,onClick,buttonStyle,buttonSize}) => {         
    const checkButtonStyle =  STYLE.includes(buttonStyle) ? buttonStyle :STYLE[0] 
  return (
    <Link to ='/sign-up' className ='btn-mobile'>
        <button 
        className = {'btn ${checkButtonStyle} ${checkButtonSize}'} onClick = {onclick} type ={type}
        >
            {children}
        </button>
        
    </Link>
    )
};
