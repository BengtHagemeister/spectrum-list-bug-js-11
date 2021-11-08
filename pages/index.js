import { ListView, Item } from "@react-spectrum/list";
import React from "react";
import { SSRProvider } from "@react-aria/ssr";
import { Provider, defaultTheme } from "@adobe/react-spectrum";

export default function Home() {
  const [something, setSomething] = React.useState("Hello");

  // React.useEffect(() => {
  //   setSomething("test");
  // }, []);

  const items = [{ key: 1 }, { key: 2 }];

  return (
    <React.StrictMode>
      <SSRProvider>
        <Provider theme={defaultTheme}>
          <ListView width="250px" items={items}>
            {(item) => <Item textValue="row 1">{item.key}</Item>}
          </ListView>
        </Provider>
      </SSRProvider>
    </React.StrictMode>
  );
}
