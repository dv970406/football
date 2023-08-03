import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "../../stackflow/stackflow";
import { useActivityPreloadRef } from "@stackflow/plugin-preload";

const Main: ActivityComponentType = () => {
  const { push } = useFlow();
  const onClick = () => {
    push("Article", {
      title: "Hello",
    });
  };

  const data = useActivityPreloadRef<Promise<any>>();

  return (
    <AppScreen appBar={{ title: "My Activity" }}>
      <div>My Activity</div>
      <button onClick={onClick}>Go to article page</button>
    </AppScreen>
  );
};

export default Main;
