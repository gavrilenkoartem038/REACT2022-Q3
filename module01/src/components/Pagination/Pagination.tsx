import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSearchData } from 'store/mainPageSlice';
import { useAppSelector } from 'store/store';
import { ActionTypes } from 'store/types';

import './Pagination.css';

function Pagination() {
  const searchData = useAppSelector((state) => state.mainPage.searchData);
  const dispatch = useDispatch()

  return (
    <div>
      <div className="page-links">
        {Array.from({ length: +searchData.pages }, (v, i) => i + 1).map((el) => {
          return (
            <button
              type="button"
              className={searchData.page === `${el}` ? 'page-button active' : 'page-button'}
              key={el}
              onClick={() => {
                dispatch(changeSearchData({ ...searchData, page: `${el}` }));
              }}
            >
              {el}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Pagination;
