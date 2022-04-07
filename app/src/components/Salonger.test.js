import React from 'react';
import { render, screen } from '@testing-library/react';
import data from '../data/salonger.json';
import Salonger, { getMinAndMaxPrice } from './Salonger';

it("renders title of company", () => {
  const { container } = render(<Salonger data={data} />);
  expect(screen.getByText("Sax & Fön")).toBeInTheDocument();
  const allListItems = container.querySelector("li");
  expect(allListItems.length === 5);
});

it("calculates correct min and max price for all companies", () => {
  console.log("before call");
  const result = getMinAndMaxPrice([
    { price: 100 },
    { price: 200 },
    { price: 320 },
  ]);
  expect(result.max === 320);
  expect(result.min === 100);
});
