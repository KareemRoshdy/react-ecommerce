import React from "react";

const ProductSortBox = ({ sortItem, setSortItem }) => {
  const onChangeHandler = ({ target }) => {
    setSortItem(target.id);
  };

  return (
    <div className="product-sort-box">
      <div className="form-group">
        <input
          type="radio"
          name="sort"
          id="noSort"
          onChange={onChangeHandler}
          value={sortItem}
        />
        <label htmlFor="noSort">بدون ترتيب</label>
      </div>

      <div className="form-group">
        <input
          type="radio"
          name="sort"
          id="low"
          value={sortItem}
          onChange={onChangeHandler}
        />
        <label htmlFor="low">من الاقل الي الاعلي</label>
      </div>

      <div className="form-group">
        <input
          type="radio"
          name="sort"
          id="high"
          value={sortItem}
          onChange={onChangeHandler}
        />
        <label htmlFor="high">من الاعلي الي الاقل</label>
      </div>
    </div>
  );
};

export default ProductSortBox;
