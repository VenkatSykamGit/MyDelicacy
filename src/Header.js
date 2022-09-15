import React from 'react'
import "./Header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
        <Link to="/" style={{textDecoration: 'none'}}>
            <div className="header__left">MyDelicacy</div>
        </Link>
        <div className="header__nav">
            <Link to="/login">
                <div className="header__option">
                    <span className="header__optionLineOne">Welcome</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
            </Link>

            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Orders</span>
            </div>

            <Link to="/checkout" style={{textDecoration: 'none'}}>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}
                    </span>
                </div>
            </Link>
        </div>  
    </div>
  )
}

export default Header