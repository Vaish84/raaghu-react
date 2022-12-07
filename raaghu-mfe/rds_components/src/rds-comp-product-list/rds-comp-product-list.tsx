import React from "react";
import RdsCompProductImage, {
  Item,
} from "../rds-comp-product-image/rds-comp-product-image";
import "./rds-comp-product-list.scss";
export interface RdsCompProductListProps {
  items: Item[];
  type?: string;

}
const RdsCompProductList = (props: RdsCompProductListProps) => {
  return (
    <div>
      {props.items.map((item: any, index: any) => (
        <div className="mb-5 d-inline-block">
          <RdsCompProductImage
            item={item}
            
          />
        </div>
      ))}
    </div>
  );
};

export default RdsCompProductList;
