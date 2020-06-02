import React from 'react';

const Row = () => {
    return (  
        <tr>
        <td>
          <img
            width="70"
            height="70"
            src={process.env.PUBLIC_URL + `/assets/0/citron.png`}
            alt='citron'
          />
        </td>
        <td>REF</td>
        <td>€0</td>
        <td>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-secondary"
              >
              -
            </button>
            <span className="btn btn-light">1</span>
            <button
              type="button"
              className="btn btn-secondary"
              >
              +
            </button>
          </div>
        </td>
        <td>€0</td>
        <td>
          <button
            type="button"
            className="btn btn-danger remove"
             >
            X
          </button>
        </td>
      </tr>
    );
}
 
export default Row;