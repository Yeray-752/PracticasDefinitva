// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [filterText, setFilterText] = useState('');
    const [onlyInStock, setOnlyInStock] = useState(false);


    return (
        <div className='cuerpo'>
            <h1>IronStore</h1>
            <SearchBar filterText={filterText}
                onFilterTextChange={setFilterText}
                onlyInStockChange={setOnlyInStock}
            />
            <ProductTable products={products} filterText={filterText}
                onlyInStock={onlyInStock}
            />
        </div>
    )
}

function SearchBar({filterText, onFilterTextChange, onlyInStock,   onlyInStockChange}) {


    return (
        <>
            <div>
                <p>Searh</p>
                <input type='text'
                 size={100}
                 value={filterText}
                 onChange={(e) => onFilterTextChange(e.target.value)}
                 ></input><br></br><br></br>
                <label>
                    <input type='checkbox'
                        checked={onlyInStock}
                    onChange={(e) => onlyInStockChange(e.target.checked) } /> Only show products in stock
                </label>

            </div><br></br>
        </>
    )
}
    
function ProductTable({ products, filterText }) {

    const filterProducto = products.filter(products => {
       const matchesName = products.name.toLowerCase().startsWith(filterText.toLowerCase());
        const matchesStock= !onlyInStock || products.inStock;
        return matchesName && matchesStock;
});

    return (
        <table cellSpacing={15} className='tabla'>
            <tr>
                <td className='fila1'>Stock</td>
                <td className='fila1'>Name</td>
                <td className='fila1'>Price</td>
            </tr>
            {filterProducto.map((products, index) => (
          <ProductRow producto={products} />
        ))}
        </table>
    )
}
function ProductRow({ producto }) {
    return (
        <tr>
            <td className={producto.inStock ? '' : 'stock-no'}>{producto.inStock ? 'Si' : 'No'}</td>
            <td>{producto.name}</td>
            <td>{producto.price}</td>
        </tr>
    );
}



export default ProductsPage;