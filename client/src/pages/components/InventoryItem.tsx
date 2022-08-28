import React, { useState } from 'react';
import { InventoryListItem } from '../../inventory';
import '../../App.css';

interface InventoryItemProps {
    item: InventoryListItem;
    addToCart: (deviceType: string, id: number) => void;
}

export const InventoryItem = (props: InventoryItemProps) => {
    const { item, addToCart } = props;
    const [isItemSelected, setIsItemSelected] = useState(false);

    return (
        <li className="inventory-item" key={item.id}>
            <img src={item.image_url} alt="available digital device" />
            <span>{item.device_type} in {item.location}</span>

            <button className={isItemSelected ? 'inventory-item-selected' : 'inventory-item-available'} onClick={() => {
                setIsItemSelected(true);
                addToCart(item.device_type, item.id)
            }}> {isItemSelected ? '☑️' : 'add to cart'}</button>
        </li>
    );
};