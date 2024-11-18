import { useState, useEffect } from 'react';
import getAllProducts from '../../services/getAllProducts';
import CardList from '../../components/CardList/CardList';
import Navbar from '../../components/Navbar/Navbar';

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  useEffect(() => {
    const allProducts = getAllProducts();
    setProducts(allProducts);
    setFilteredProducts(allProducts);
  }, []);

  // Handle Filter
  const handleFilterChange = (category) => {
    setFilterCategory(category);
    applyFilters(category, searchTerm);
  };

  // Handle Search
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    applyFilters(filterCategory, term);
  };

  // Filter and Search Logic
  const applyFilters = (category, term) => {
    let filtered = products;

    if (category !== 'all') {
      filtered = filtered.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (term) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  // Updated Filter Options
  const RadioButtonOpts = [
    { label: 'All', value: 'all' },
    { label: 'Glove', value: 'Glove' },
    { label: 'Sepatu', value: 'Sepatu' },
    { label: 'Handwrap', value: 'Handwrap' },
  ];
  
  return (
    <>
      <Navbar />
      <div className="flex gap-2 flex-wrap">
  {RadioButtonOpts.map((option, index) => (
    <label key={index} className="inline-flex items-center gap-2">
      <input
        type="radio"
        name="filter"
        value={option.value}
        defaultChecked={filterCategory === option.value}
        onChange={(e) => handleFilterChange(e.target.value)}
      />
      {option.icon && (
        <img src={option.icon} alt={option.label} className="w-6 h-6" />
      )}
      {option.label}
    </label>
  ))}
</div>
      <div className="px-24 py-4 gap-4 mt-4 flex-wrap">
        <h3 className="font-medium">Filter</h3>
        <div className="flex gap-2 flex-wrap">
          {RadioButtonOpts.map((option, index) => (
            <label key={index} className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="filter"
                value={option.value}
                defaultChecked={filterCategory === option.value}
                onChange={(e) => handleFilterChange(e.target.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-300 p-2 rounded"
          />
        </div>
      </div>
      <section className="container px-24 py-4">
        <main className="grid grid-cols-4 gap-4">
          <CardList products={filteredProducts} />
        </main>
      </section>
    </>
  );
}
