import classNames from "classnames";

export const Main = () => {
  return (
    <>
      <main className="main">
        <section className={classNames(
          'section',
          'models'
        )}>
          <div className="models__container">
            <div className="models__paginaton">
              <h2 className="models__brand">
                Brand new models
              </h2>

              <button>
                &lt;
              </button>

              <button>
                &gt;
              </button>
            </div>

            <div className="models__list">
              Phone Cards
            </div>
          </div>
        </section>

        <section className={classNames(
          'section',
          'categories'
        )}>
          <h2 className="categories__title">
            Shop by category
          </h2>

          <div className="categories__list">
            Photos of category
          </div>
        </section>

        <section className={classNames(
          'section',
          'prices'
        )}>
          <div className="prices__title">
            <h2 className="title">
              Hot prices
            </h2>

            <button>
              &lt;
            </button>

            <button>
              &gt;
            </button>
          </div>

          <div className="prices__list">
            Here Phone cards
          </div>
        </section>
      </main>
    </>
  );
};
