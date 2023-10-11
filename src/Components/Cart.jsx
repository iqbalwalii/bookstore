import { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../redux/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [quantities, setQuantities] = useState(cartItems.map(() => 1));
  console.log(cartItems, "aa", cartItems.length);
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item, index) => total + item.price * quantities[index],
      0
    );
  };

  const decrementQuantity = (index) => {
    const updatedQuantities = [...quantities];
    if (updatedQuantities[index] > 1) {
      updatedQuantities[index] -= 1;
      setQuantities(updatedQuantities);
    }
  };
  const handleRemoveItem = (itemId) => {
    // Dispatch the removeItemFromCart action with the book's ID
    dispatch(removeItemFromCart(itemId));
  };
  const incrementQuantity = (index) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] += 1;
    setQuantities(updatedQuantities);
  };
  if (cartItems.length === 0) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="">
          <p>It&apos;s all empty</p>
        </div>
      </Container>
    );
  }
  return (
    <Container className="my-5">
      <h2>Your Shopping Cart</h2>
      <Table striped bordered hover>
        <thead>{/* ... (Same as before) */}</thead>
        <tbody>
          {cartItems.map((item, index) => {
            return (
              <tr key={item.id}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{item.title}</td>
                <td className="text-center">${item.price.toFixed(2)}</td>
                <td className="text-center">
                  <span
                    className="px-2 "
                    onClick={() => decrementQuantity(index)}
                  >
                    -
                  </span>
                  {quantities[index]}
                  <span
                    className="px-2 "
                    onClick={() => incrementQuantity(index)}
                  >
                    +
                  </span>
                </td>
                <td className="text-center">
                  ${(item.price * quantities[index]).toFixed(2)}
                </td>
                <td className="text-center">
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="text-right">
        <h4>Total: ${calculateTotal().toFixed(2)}</h4>
        <Button variant="primary" size="lg">
          Checkout
        </Button>
      </div>
    </Container>
  );
};

export default CartPage;
