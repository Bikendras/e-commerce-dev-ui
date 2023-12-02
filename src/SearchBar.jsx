import React from 'react';
import {Input} from 'antd';

const { Search } = Input;
const onSearch = (value) => console.log(value);
export default function SearchBar({ onSearchChange }) {
  return (
    <div>
        <Search type='text' placeholder="Search products..." onChange={(e)=>onSearchChange(e.target.value)} onSearch={onSearch}enterButton />
    </div>
  )
}
