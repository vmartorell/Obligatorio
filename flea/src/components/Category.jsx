import React, { Component } from 'react';

function Category(props) {
  return (
      <ul>
        <li>
          <b>NAMES: </b>{props.names}
        </li>
        <li>
          <b>ANIMALS: </b>{props.animals}
        </li>
        <li>
          <b>FOOD: </b>{props.food}
        </li>
        <li>
          <b>COUNTRY: </b>{props.country}
        </li>
      </ul>
  );
}

export default Category;
