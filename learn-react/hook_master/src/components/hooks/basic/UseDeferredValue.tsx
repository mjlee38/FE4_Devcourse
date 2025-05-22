// useDeferredValue 훅
// React 18에서 도입된 useDeferredValue 훅은 상태 업데이트를 지연시켜 UI의 반응성을 높이는 데 사용됩니다.
// 값의 변경 사항에 대한 우선 순위를 낮춰주기 위해서 사용하는 훅입니다.
// 우선 순위를 낮춤으로써 연산 비용이 높은 작업을 백그라운드에서 처리할 수 있게 해주기 때문에 상대적으로 부드러운 UI를 구현할 수 있습니다.
// 단, 절대적으로 부드럽게 해주는 것은 아니며, 상대적인 부드러움을 제공합니다.

import { useDeferredValue, useState } from "react";
const generateItems = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
    description: `Description for Item ${i}`,
  }));
};
const items = generateItems(50000);

export default function UseDeferredValue() {
  // 1
  // 11
  // 111
  // 1111
  const [input, setInput] = useState("");

  // 1
  // 11
  // 1111
  const deferredValue = useDeferredValue(input); // 1111 ->(111) -> 11 -> 1

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(deferredValue.toLowerCase())
  );
  return (
    <>
      <h1>UseDeferredValue</h1>
      <input type="text" value={input} onChange={onChange} />
      <ul>
        {filteredItems.map((d) => (
          <li key={d.id}>
            {d.name} - {d.description}
          </li>
        ))}
      </ul>
    </>
  );
}
