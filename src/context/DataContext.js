import { createContext, useState, useEffect, useReducer } from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch';
import { CartReducer } from '../hooks/useReducer';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const[items, setItems] = useState([]);
    const[searchResult, setSearchResult] = useState([]);
    const[selectedFilter, setSelectedFilter] = useState(null);
    const { data, fetchError, isLoading } = useAxiosFetch('https://items-bvkm.onrender.com/items');

    //setting data to items
    useEffect(() => {
        setItems(data);
    },[data]);

    const [state, dispatch] = useReducer(CartReducer, {
        cart : [],
    });

    // input filter
    const[search, setSearch] = useState('');

    //radio filter
    const handleChange =(e) =>{
        setSelectedFilter(e.target.value);
    }

    //button filter
    const handleClick =(e) =>{
        e.preventDefault();
        setSelectedFilter(e.target.value);
    }

    //Search and Advanced Filters
    useEffect(()=>{
      const filteredProducts= items.filter(item => (item.title.toLowerCase().includes(search.toLowerCase()))) ;
    
      const filteredFilter = items.filter(item => 
        ((item.category) === selectedFilter) ||
        ((item.color) === selectedFilter) ||
        ((item.company) === selectedFilter) ||
        ((item.newPrice) === selectedFilter) ||
        ((item.title) === selectedFilter))
     
        if(search){
         setSearchResult(filteredProducts);
        } else
        if(selectedFilter){
         setSearchResult(filteredFilter);
        }else {
         setSearchResult(filteredProducts);
        }
     
    },[items, search, selectedFilter]);


    return (
        <DataContext.Provider value={{
          state, dispatch, search, setSearch, handleClick, handleChange, fetchError, isLoading, searchResult
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;