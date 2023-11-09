import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('Debe de mostrar el componente correctamente la imagen personalizada', () => {
    const wraper = renderer.create(
      <ProductImage img={product2.img} className="custom-class" />
    );
    expect(wraper.toJSON()).toMatchSnapshot();
  });
  test('Debe de mostrar el componente con la imagen del producto', () => {
    const wraper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wraper.toJSON()).toMatchSnapshot();
  });
});
