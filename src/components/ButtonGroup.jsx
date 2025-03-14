import { useItemsStor } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const makeAllAsComplete = useItemsStor((state) => state.makeAllAsComplete);
  const makeAllAsInComplete = useItemsStor((state) => state.makeAllAsInComplete);
  const resetToInitiale = useItemsStor((state) => state.resetToInitiale);
  const removeAllItems = useItemsStor((state) => state.removeAllItems);

  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: makeAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: makeAllAsInComplete,
    },
    {
      text: "Reset to initial",
      onClick: resetToInitiale,
    },
    {
      text: "Remove all items",
      onClick: removeAllItems,
    },
  ];
  return (
    <section className="button-group">
      {secondaryButtons.map((button) => (
        
        <Button
          key={button.text + button.onClick.toString()}
          buttonType="secondary"
          onClick={button.onClick}
        >
          {button.text}
        </Button>
      ))}
    </section>
  );
}
