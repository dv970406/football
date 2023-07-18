import { css } from "@emotion/react";
import { Stack } from "./stackflow/stackflow";
function App() {
  return (
    <>
      <div
        css={css`
          background-color: red;
          border-radius: 15px;
        `}
      >
        <Stack />
      </div>
    </>
  );
}

export default App;
