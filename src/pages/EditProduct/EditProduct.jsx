import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function EditProductPage(props) {

  const [productToUpdate, setProductToUpdate] = useState(null);
  const { id } = useParams();

  console.log({ productToUpdate });

  useEffect(() => {
    if (props.products && id) {
      const matchingProduct = props.products.find(
        (product) => Number(product.id) == Number(id)
      );
      setProductToUpdate(matchingProduct);
    }
  }, [props.products, id])
  /** TODO: Write code to set the `productToUpdate` state with the product data
   *  based on the ID that we get from the URL path parameter.
   *  You will need to use: `props`, `useParams`, and `useEffect` to achieve this.
   */

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setProductToUpdate({ ...productToUpdate, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onProductUpdate(productToUpdate); // Callback to update the product in parent component
  }

  if (!productToUpdate) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Product Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={productToUpdate.name}
      />
      <button type="submit">Edit</button>
    </form>
  );
}

export default EditProductPage;
