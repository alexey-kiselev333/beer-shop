import './App.scss';
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Drawer from "./Components/Drawer";
import * as React from "react";
import axios from "axios";
import ManyFilters from "./Components/Filters/ManyFilters";
import useDebounce from "./hooks/useDebounce";
import SearchBlock from "./Components/SearchBlock/SearchBlock";


function App() {

    const [cartOpened, setCartOpened] = React.useState(false);
    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [searchValue, setSearchValue] = React.useState("")

    // const debouncedSearchTerm = useDebounce(searchValue, 500);
    React.useEffect(() => {
        axios('https://api.punkapi.com/v2/beers')

            .then(res => setItems(res.data))
    }, [])

    console.log(items)


    const onAddToCart = (obj) => {
        setCartItems(prev => [...prev, obj])
    }

    // const filterBeers = items.filter((item => item.name.toLowerCase().includes(value.toLowerCase())))

    const [queryParams, setQueryParams] = React.useState({});


    const handleChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setQueryParams({...queryParams, [inputName]: inputValue});
    };

    console.log(queryParams)

    const filteres = React.useMemo(() => {
        let url = ``
        Object.entries(queryParams).map(([key, value]) => {
            if (value) {
                url += '&' + key + '=' + value
            }
        })
        return url;
    }, [queryParams])



    React.useEffect(() => {
        axios(`https://api.punkapi.com/v2/beers?page=1&per_page=10${searchValue}`).then(res => setItems(res.data))
    }, [searchValue])

    // React.useEffect(() => {
    //     axios(`https://api.punkapi.com/v2/beers?page=1&per_page=10&beer_name=comet`).then(res => setItems(res.data))
    // }, [])

    const sendRequest = () => {

            axios(`https://api.punkapi.com/v2/beers?page=1&per_page=10${filteres}${searchValue}`).then(res => setItems(res.data))

    }


    return (
        <div className="wrapper clear">

            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}

            <Header onClickCart={() => setCartOpened(true)}/>
            <div className="content distance-pad">
                <div className="d-flex align-center mb-40 justify-between ">
                    <h1>Лучшее пиво</h1>
                <SearchBlock setSearchValue={setSearchValue}/>
                </div>
                <div className="justify-between">
                    <ManyFilters handleChange={handleChange} sendRequest={sendRequest}/>
                </div>
                <div className="d-flex flex-wrap">
                    {items.map((item) => (
                        <Card title={item.name} price={item.price} image_url={item.image_url}
                              onFavorite={() => console.log('Добавили в закладки')}
                              onPlus={(obj) => onAddToCart(obj)}/>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;