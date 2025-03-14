import Counter from "./Counter";
import Logo from "./Logo";
import { useItemsStor } from "../stores/itemsStore";

export default function Header() {
  const items = useItemsStor((state) => state.items);
  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={items.filter((item) => item.packed).length}
        totalNumberOfItems={items.length}
      />
    </header>
  );
}
