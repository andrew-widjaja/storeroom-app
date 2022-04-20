import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import styled from 'styled-components';
import StyledCard from './StyledCard.jsx';
import DeleteModal from './DeleteModal.jsx';

import { useGetConsumablesQuery } from '../../services/items.js';

const StyledSpin = styled(Spin)`
  margin: 2rem;
`;

const ConsumablesList = (props) => {
  const display = useSelector((state) => state.display.display);

  const { data, error, isLoading, isSuccess, isError } =
    useGetConsumablesQuery();

  return (
    <div
      className="site-card-border-less-wrapper"
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {isLoading && <StyledSpin></StyledSpin>}
      {isError && error.message}
      {isSuccess &&
        data &&
        data.map((item) => (
          <StyledCard
            key={item._id}
            hoverable
            // title={item.name}
            bordered={false}>
            <h3>{item.name}</h3>
            <p>
              <b>Supplier:</b> {item.supplier}
            </p>
            <p>
              <b>Catalog No.:</b> {item.catalog}
            </p>
            <p>
              <b>Description:</b> {item.description}
            </p>
            <p>
              <b>Qty:</b> {item.quantity}
            </p>
            <DeleteModal
              name={item.name}
              id={item._id}
              category="consumables"></DeleteModal>
          </StyledCard>
        ))}
    </div>
  );
};

export default ConsumablesList;
