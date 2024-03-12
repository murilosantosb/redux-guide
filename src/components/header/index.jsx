import { useState , useMemo} from "react";
import {useDispatch, useSelector} from 'react-redux'


// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import {login, logoutUser} from "../../redux/user/action";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer)
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer)
  const dispatch = useDispatch()

  const productsCount = useMemo(() => {
    return products.reduce((acc, curr) => acc + curr.quantify, 0)
  }, [products])

  console.log({currentUser})


  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(login({ name: "Murilo", email: "murilosantos@gmail.com"}))
  }

  const handleLogoutClick = () => {
    dispatch(logoutUser(null))
  }
  
  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
