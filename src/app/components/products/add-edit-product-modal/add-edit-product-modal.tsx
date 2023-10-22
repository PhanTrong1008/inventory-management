import React, { Dispatch, SetStateAction, useState } from 'react';
import { Modal } from 'antd';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { handleCloseEditModal } from '@/redux/features/products-slice';

export default function AddEditProductModal() {
  const isEditProduct = useAppSelector((state) => state.productsReducer.isEditProduct);
  const dispatch = useAppDispatch();

  const handleCancel = (): void => {
    dispatch(handleCloseEditModal());
  }

  return (
    <>
      <Modal title="Edit Product" open={isEditProduct} onCancel={handleCancel} closable={false} centered>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}