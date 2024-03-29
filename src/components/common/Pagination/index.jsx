import React from 'react';
import isEqual from 'lodash/isEqual';
import { Pagination } from 'react-bootstrap';
import styles from './index.module.scss';

const CommonPagination = (props) => {
  const next = () => {
    props.setPage(Math.min(props.currentPage + 1, props.max));
  }

  const prev = () => {
    props.setPage(Math.max(props.currentPage - 1, 1));
  }

  const jump = (page) => {
    const pageNumber = Math.max(1, page)
    props.setPage(Math.min(pageNumber, props.max));
  }

  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));
  let numberArray = range(1, props.max, 1);

  return (
    <Pagination size="sm" className={styles.pagination__Pagination}>
      <Pagination.Prev className={styles.pagination__Pagination_ArrowItem} onClick={() => { prev() }} />
      {
        numberArray.map(num => {
          return (
            <Pagination.Item className={styles.pagination__Pagination_Item} onClick={() => { jump(num) }} key={num} active={isEqual(num, props.currentPage)}>
              {num}
            </Pagination.Item>
          )
        })
      }
      <Pagination.Next className={styles.pagination__Pagination_ArrowItem} onClick={() => { next() }} />
    </Pagination>
  )
}

export default CommonPagination;