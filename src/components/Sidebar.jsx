import { useItemsStor } from "../stores/itemsStore";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidbar() {
  const addItem = useItemsStor((state) => state.addItem);
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup />
    </div>
  );
}
