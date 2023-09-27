import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsPlusLg, BsFillTrash3Fill } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import {  useDispatch} from "react-redux";
import { removeItem , increase, decrease } from "../control/cartSlice";

function CourseItem({ id, title, price, img, quantity }) {
    const dispatch = useDispatch();
  return (
    <div className="col-12 col-lg-4">
      <Card style={{ margin: `2rem 0` }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="mt-2"  style={{ textAlign: `center` }}>
            {title} 
          </Card.Title>
          <Card.Text className="mt-4" style={{ textAlign: `center` }}>
            <Button onClick={()=>{dispatch(decrease(id))}} variant="light">
              <AiOutlineMinus />
            </Button>
      <span> &nbsp; {quantity} &nbsp; </span>      
            <Button onClick={()=>{dispatch(increase(id))}} variant="light">
              <BsPlusLg />
            </Button>
            <br />
            <Button
              className="mt-4"
              style={{ textAlign: `center` }}
              variant="danger"
onClick={()=>{dispatch(removeItem(id))}}
            >
              <BsFillTrash3Fill />
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CourseItem;
