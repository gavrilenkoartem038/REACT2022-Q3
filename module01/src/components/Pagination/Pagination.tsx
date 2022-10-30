import React, { useContext } from 'react';
import { Context } from 'store/store';
import { ActionTypes } from 'store/types';

import './Pagination.css';

function Pagination() {
  const { state, dispatch } = useContext(Context);
  const { searchData } = state.mainPage;

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
                dispatch({
                  type: ActionTypes.ChangeSearchData,
                  payload: { ...searchData, page: `${el}` },
                });
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
