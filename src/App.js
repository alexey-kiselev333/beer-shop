import './App.scss';
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Drawer from "./Components/Drawer";
import * as React from "react";
import axios from "axios";
import ManyFilters from "./Components/Filters/ManyFilters";
import useDebounce from "./hooks/useDebounce";
import SearchBlock from "./Components/SearchBlock/SearchBlock";
import Pagination from "./Components/Pagination/Pagination";


function App() {

    const [cartOpened, setCartOpened] = React.useState(false);
    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])

    const [paginationSize, setPaginationSize] = React.useState("8");
    const [currentPage, setCurrentPage] = React.useState(1);

    const [searchValue, setSearchValue] = React.useState("")
    const debouncedSearchTerm = useDebounce(searchValue, 1000);


    const paginationHandler = (e) => {
        setPaginationSize(e.target.value);
    };

    const currentPageHandler = (page) => {
        setCurrentPage(page);
    };

    console.log(items)

    const onAddToCart = (obj) => {
        setCartItems(prev => [...prev, obj])
    }

    const [queryParams, setQueryParams] = React.useState({});

    const handleChange = (e) => {
        const inputName = e.target.name;
        let inputValue = e.target.value;
        if (e.target.type === "date") {
            inputValue = e.target.value.split('-')[1] + "/" + e.target.value.split('-')[0]
        }

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
        axios(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${paginationSize}${searchValue}`).then(res => setItems(res.data))
    }, [debouncedSearchTerm])

    React.useEffect(() => {
        axios(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${paginationSize}${searchValue}`).then(res => setItems(res.data))
    }, [currentPage, paginationSize, debouncedSearchTerm])


    const sendRequest = () => {
        axios(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${paginationSize}${filteres}${searchValue}`).then(res => setItems(res.data))
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
                        <Card title={item.name} abv={item.abv} ebc={item.ebc}  price={item.price} image_url={item.image_url}
                              ph={item.ph} description={item.description}
                              onFavorite={() => console.log('Добавили в закладки')}
                              onPlus={(obj) => onAddToCart(obj)}/>
                    ))}
                </div>
                <Pagination
                    paginationHandler={paginationHandler}
                    currentPageHandler={currentPageHandler}
                    lastPage={items.length < paginationSize}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
}

export default App;