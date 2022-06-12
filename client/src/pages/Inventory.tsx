import React, {useState, useEffect} from 'react';
import '../App.css';
import { inventoryData } from '../inventory';

function Inventory() {
  const [data, setData] = useState(inventoryData);

  const handleSelect = (e: React.FormEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;

    if(target.value === 'all-devices'){
      setData(inventoryData);
      return
    }

    if(target.value === 'all-locations'){
      setData(inventoryData);
      return
    }

    if(target.value === 'smartphones'){
      setData(inventoryData.filter(item => item.device_type === 'smartphone'));
      return
    }

    if(target.value === 'tablets'){
      setData(inventoryData.filter(item => item.device_type === 'tablet'));
      return
    }

    if(target.value === 'computers'){
      setData(inventoryData.filter(item => (item.device_type === 'laptop' || item.device_type === 'desktop')));
      return
    }

   
    //location
    setData(inventoryData.filter(item => item.location === target.value));

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
          return (
            <li className="inventory-item" key={item.id}>
              <img src={item.image_url} alt="available digital device" />
              <span>{item.device_type} in {item.location}</span>
              <button> order </button>
            </li>
          )
        })}

      </ul>
    </>
  );
}

export default Inventory;