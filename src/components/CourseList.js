import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector , useDispatch} from "react-redux";
import CourseItem from "./CourseItem";
import Button from "react-bootstrap/Button";
import { clearCart } from "../control/cartSlice";

function CourseList() {
    const dispatch = useDispatch();
  const { cartItems, quantity, total } = useSelector((store) => store.cart);
  return (
    <>
      {quantity < 1 ? (
        <Container>
          <Row>
            <div className="col-12">
              <h2 style={{ margin: `5rem 0`, textAlign: `center` }}>
                SEPETİNİZ :BOŞ
              </h2>
            </div>
          </Row>
        </Container>
      ) : (
        <>
          <Container>
            <Row>
              <div className="col-12">
                <h2 style={{ margin: `5rem 0`, textAlign: `center` }}>
                  SEPETİNİZ :
                </h2>
              </div>
              {cartItems.map((item) => {
                return <CourseItem {...item} />;
              })}
            </Row>
          </Container>
          <footer>
            <hr />
            <h2 style={{ margin: `5rem 0`, textAlign: `center` }}>
              Toplam Tutar : {total} ₺
            </h2>
            <hr />
            <div className="col-12 text-center">
                <Button size="lg" onClick={()=>dispatch(clearCart())} style={{ margin: `2rem 0`, textAlign: `center` }}>
                  Sepeti Boşalt
                </Button>
              </div>
          </footer>
        </>
      )}
    </>
  );
}

export default CourseList;
