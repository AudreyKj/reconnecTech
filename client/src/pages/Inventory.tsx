import React, { useState } from 'react';
import { inventoryData } from '../inventory';
import '../App.css';


function Inventory() {
  const [data, setData] = useState(inventoryData);

  const handleSelect = (e: React.FormEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;

    if (target.value === 'all-devices') {
      setData(inventoryData);
      return
    }

    if (target.value === 'all-locations') {
      setData(inventoryData);
      return
    }

    if (target.value === 'smartphones') {
      setData(inventoryData.filter(item => item.device_type === 'smartphone'));
      return
    }

    if (target.value === 'tablets') {
      setData(inventoryData.filter(item => item.device_type === 'tablet'));
      return
    }

    if (target.value === 'computers') {
      setData(inventoryData.filter(item => (item.device_type === 'laptop' || item.device_type === 'desktop')));
      return
    }

    //location
    setData(inventoryData.filter(item => item.location === target.value));
  }

  const addToCart = (device_type: string, id: number) => {

    if (localStorage.getItem('cartNum')) {
      let cartNumber = parseInt(localStorage.getItem('cartNum') as 'string');
      if (cartNumber) {
        const updatedNum = cartNumber + 1;
        localStorage.setItem('cartNum', updatedNum.toString())
      }
    } else {
      const num = 1;
      localStorage.setItem('cartNum', num.toString())
    }

    if (localStorage.getItem('cartItems')) {
      const prevItems = JSON.parse(localStorage.getItem('cartItems') as string);
      localStorage.setItem('cartItems', JSON.stringify([...prevItems, { device_type: device_type, id: id }]))
    } else {
      const item = [{ device_type: device_type, id: id }]
      localStorage.setItem('cartItems', JSON.stringify(item))
    }

  }

  return (
    <>
      <section className="inventory-filtering">
        <select name="type-sorting" className="sorting-options" onChange={handleSelect}>
          <option value="all-devices">All devices</option>
          <option value="smartphones">Only smartphones</option>
          <option value="tablets">Only tablets</option>
          <option value="computers">Only computers</option>
        </select>
        <select name="location-sorting" className="sorting-options" onChange={handleSelect}>
          <option value="all-locations">All locations</option>
          <option value="London">Devices in London</option>
          <option value="Bristol">Devices in Bristol</option>
          <option value="Leeds">Devices in Leeds</option>
          <option value="Liverpool">Devices in Liverpool</option>
          <option value="Manchester">Devices in Manchester</option>
        </select>
      </section>

      <ul className="inventory-list">
        {data.map(item => {
          console.log('ID', item.id)
          return (
            <>
              <li className="inventory-item" key={item.id}>
                <img src={item.image_url} alt="available digital device" />
                <span>{item.device_type} in {item.location}</span>
                <button onClick={() => addToCart(item.device_type, item.id)}> add to cart</button>
              </li>
            </>
          )
        })}
      </ul>

    </>
  );
}

export default Inventory;