function Drawer({onClose,items = []}){
    return <div className="overlay">
        <div className="drawer">
        <div className="mb-30">
            <h2 className="justify-between d-flex" >Корзина <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove"/></h2></div>
        <div className="items">
            {
                items.map(obj => (
                    <div className="cartItem d-flex align-center mb-20">
                    <div style={{backgroundImage: `url(${obj.image_url})`}} className="cartItemImg">

                    </div>

                    <div className="mr-20 flex">
                        <p className="mb-5 ">{obj.title}</p>

                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                </div>
                ))
            }
            </div>
        <div className="cartTotalBlock">
            <ul>
                <li ><span>Итого:</span>
                    <div></div>
                    <b>0 руб.</b></li>
                <li ><span>Налог 5%</span>
                    <div></div>
                    <b>0 руб.</b></li>
            </ul>

            <button className="greenButton" >Оформить заказ <img src="/img/arrow.svg" alt="arrow"/></button>

        </div>
        </div></div>
}

export default Drawer