import "./itemListContainer.css";
export const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list">
      <h1 className="greeting">{greeting}</h1>
    </div>
  );
};
