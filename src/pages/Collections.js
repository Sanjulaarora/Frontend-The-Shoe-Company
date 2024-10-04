import React, { useState, useEffect, useCallback, Suspense } from 'react';
import Search from '../collections/Search';
import Recommended from '../collections/Recommended';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../features/productSlice';

const Products = React.lazy(() => import('../collections/Products'));

const Collections = () => {
  const dispatch = useDispatch();

  const {data} = useSelector((state) => state.products);
  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [finalProduct, setFinalProduct] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  //radio filter
  const handleChange = useCallback((e) =>{
    setSelectedFilter(e.target.value);
  }, []);

  //button filter
  const handleClick = useCallback((e) =>{
    e.preventDefault();
    setSelectedFilter(e.target.value);
  }, []);

  //Search and Advanced Filters
  useEffect(()=>{
    const filteredProducts= data.filter(item => (item.title.toLowerCase().includes(search.toLowerCase()))) ;

    const filteredFilter = data.filter(item => 
      ((item.category) === selectedFilter) ||
      ((item.color) === selectedFilter) ||
      ((item.company) === selectedFilter) ||
      ((item.newPrice) === selectedFilter) ||
      ((item.title) === selectedFilter))
  
      if(search){
      setFinalProduct(filteredProducts);
      } else
      if(selectedFilter){
      setFinalProduct(filteredFilter);
      }else {
      setFinalProduct(filteredProducts);
      }
  
  },[data, search, selectedFilter]);

  return (
    <section id="collections" className="grow">
      <Search search={search} setSearch={setSearch}/>
      <Recommended handleClick={handleClick}/>
      <Suspense fallback={<div>Loading...</div>}>
        <Products finalProduct={finalProduct} handleChange={handleChange}/>   
      </Suspense>
    </section>
  )
}

export default Collections;