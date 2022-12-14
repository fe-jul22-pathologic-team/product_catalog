import classNames from 'classnames'

import { getNumbers } from '../helpers/getNumbers';
import './Pagination.scss';

type Props = {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(total / perPage);

  const handlePageItemClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const nextPage = +(event.currentTarget.dataset.page || 0);

    if (
      nextPage === currentPage || nextPage < 1 || nextPage > totalPages
    ) {
      return;
    }

    onPageChange(nextPage);
  };

  return (
    <ul className="pagination">
      <li
        className={classNames(
          'page-item',
          {
            disabled: currentPage === 1,
          },
        )}

      >
        <a
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          aria-disabled={currentPage === 1}
          data-page={currentPage - 1}
          onClick={handlePageItemClick}
        >
          &lt;	
        </a>
      </li>
      {
        getNumbers(1, totalPages)
          .map(page => (
            <li
              key={page}
              className={classNames(
                'page-item',
                {
                  active: page === currentPage,
                },
              )}
            >
              <a
                data-cy="pageLink"
                className="page-link"
                href={`#${page}`}
                data-page={page}
                onClick={handlePageItemClick}
              >
                {page}
              </a>
            </li>
          ))
      }
      <li
        className={classNames(
          'page-item',
          {
            disabled: currentPage === totalPages,
          },
        )}
      >
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled={currentPage === totalPages}
          data-page={currentPage + 1}
          onClick={handlePageItemClick}
        >
          &gt;
        </a>
      </li>
    </ul>
  );
};
