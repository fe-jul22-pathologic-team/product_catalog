import { CardItem } from "../../../Components/CardItem";
import { Loader } from "../../../Components/Loader";
import { Product } from "../../../types/Product";

type Props = {
  from: number;
  to: number;
  handleAdd: (phone: Product) => void;
  isLoading: boolean;
  sortedCatalog: Product[];
};

export const CatalogList: React.FC<Props> = ({
  from,
  to,
  isLoading,
  handleAdd,
  sortedCatalog,
}) => {

  return (
    <>
      {
        isLoading
          ? (
            <div className="catalog__list">
              {sortedCatalog.slice(from - 1, to).map((phone) => (
                <CardItem
                  phone={phone}
                  handleAdd={handleAdd}
                />
              ))}
            </div>
          ) : <Loader />
      }
    </>
  );
}
