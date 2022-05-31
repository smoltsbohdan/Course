import React, { FC } from "react";
import { useSelector } from "react-redux";
import { catalogSelectors } from "./selectors";


const Catalog: FC = (): JSX.Element => {
  const catalog = useSelector(catalogSelectors.getCatalog);

  return (
    <div>
      MAIN PAGE
    </div>
  );
}

export default Catalog;
