import React from "react";

const ProductFilterBox = ({ filterItem, setFilterItem }) => {
  const onChangeHandler = ({ target }) => setFilterItem(target.id);

  return (
    <div className="product-filter">
      <div className="form-group">
        <input
          type="radio"
          name="filter"
          id="all"
          value={filterItem}
          onChange={onChangeHandler}
        />
        <label htmlFor="all">الكل</label>
      </div>

      <div className="form-group">
        <input
          type="radio"
          name="filter"
          id="laptop"
          value={filterItem}
          onChange={onChangeHandler}
        />
        <label htmlFor="laptop">لاب توب</label>
      </div>

      <div className="form-group">
        <input
          type="radio"
          name="filter"
          id="mobile"
          value={filterItem}
          onChange={onChangeHandler}
        />
        <label htmlFor="mobile">هاتف</label>
      </div>
    </div>
  );
};

export default ProductFilterBox;
