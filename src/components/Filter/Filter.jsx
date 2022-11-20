import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact, getFilter } from 'redux/filterSlice';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => dispatch(filterContact(e.target.value));

  return (
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={changeFilter}
          placeholder="Enter search name"
        />
      </Label>
   );
};

