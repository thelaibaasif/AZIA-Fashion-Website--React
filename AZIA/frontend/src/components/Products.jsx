
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard';
import ShimmerCard from './ShimmerCard';
import Categories from './Categories';
import { IoSearchOutline } from 'react-icons/io5';

const Products = () => {
  const [val,setVal] = useState("")
  const [filter,setFilter] = useState([])
    const products = useSelector((store) => store?.product?.products);
    const filterData = useSelector((store) => store?.product?.filterData);
    useEffect(()=>{
      if(filterData)
        setFilter(filterData)
    },[filterData])
    const onSearch=()=> {
      const data = filterData.filter((res)=>res.title.toLowerCase().includes(val.toLowerCase()))
      setFilter(data)
      console.log(data);
    }
    console.log(filterData);
    if(products === null) return <ShimmerCard/>;
  return (
    <div className=' bg-skin-light  mt-[-2%] mr-2 p-2 ml-2 mx-auto flex justify-between flex-col w-full flex-wrap absolute'>
         <Categories />
         <div>
                    <div className='ml-2 mr-2 pt-3 pr-1 pb-3 pl-1'>
                        <form onSubmit={(e) => e.preventDefault()}
                            className='ml-16 flex w-[500px] h-[60px] items-center'>
                            <input
                                className='w-8/12 h-[38px] pl-3 p-2 rounded-lg outline-none font-sans'
                                type="text"
                                value={val}
                                placeholder={"Search Products"}
                                onChange={(e) => { setVal(e.target.value) }}
                            />
                            <button onClick={()=>onSearch()}>
                                <IoSearchOutline
                                    className='w-8 p-1 h-[38px] ml-[2px] rounded-lg bg-skin-dark hover:bg-skin-soft' />
                            </button>
                        </form>
                    </div>
                </div>
        <div className='flex flex-row justify-even flex-wrap'>

        {filter && filter?.length && filter?.map((product) => (  
            <ProductCard key={product.id}  product={product} />
        ))}
        </div>
    </div>
  )
}

export default Products
