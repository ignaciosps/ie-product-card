# IE-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Ignacio Esposto

## Ejemplo

```
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons
} from 'ie-product-card';
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 3,
    // maxCount: 6,
  }}
>
  {() => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
