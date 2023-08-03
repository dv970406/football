import { ActivityComponentType } from "@stackflow/react";
import { useFlow, useStepFlow } from "../../stackflow/stackflow";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useActivityPreloadRef } from "@stackflow/plugin-preload";

interface IArticle {
  title: string;
}
const Article: ActivityComponentType<IArticle> = ({ params: { title } }) => {
  const { push } = useFlow();
  const onClick = () => {
    push("Main", {
      title: "Hello",
    });
  };

  // 타입 안정성을 위해 현재 액티비티의 이름을 넣어줘요
  const { stepPush, stepPop, pending } = useStepFlow("Article");

  const onNextClick = () => {
    // `stepPush()`을 호출하면 params.title이 변경돼요.
    stepPush({
      title: "Team",
    });
  };
  const onPrevClick = () => {
    // `stepPop()`을 호출하면 이전 params.title로 돌아가요
    stepPop();
  };

  return (
    <AppScreen appBar={{ title: "My Article" }}>
      <div>My Article</div>
      <button onClick={onClick}>Go to home page</button>
      <button onClick={onNextClick}>next</button>{" "}
      <button onClick={onPrevClick}>prev</button>
    </AppScreen>
  );
};

export default Article;
