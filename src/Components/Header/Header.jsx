

function Header(props){
    return <header>
        <div className="headerLeft">
            <img className="beer"  src="/img/beer.jpg" alt="Logo"/>
            <div className="headerInfo">
                <h3 className="text-up">Пиво</h3>
                <p className="opacity">Магазин вкуснейшего пива</p>
            </div>
        </div>
        <ul className="headerRight">
            <li className="distance cu-p" onClick={props.onClickCart}>
                <img width={18} height={18} src="/img/cart.svg" alt="Cart"/>
                <span>0 руб</span>
            </li>
            <li>
                <img width={18} height={18} src="/img/user.svg" alt="user"/>
            </li>
        </ul>
    </header>
}

export default Header