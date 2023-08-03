import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import "@stackflow/plugin-basic-ui/index.css";
import Article from "../components/activities/Article";
import Main from "../components/activities/Main";
import { preloadPlugin } from "@stackflow/plugin-preload";

export const {
  Stack,
  useFlow,
  useStepFlow,
  actions,
  activities,
  addActivity,
  addPlugin,
} = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
    preloadPlugin({
      loaders: {
        Main() {
          const getData = async () => {
            const response = await fetch(
              import.meta.env.VITE_API_SERVER_URL + "/status",
              {
                headers: {
                  "x-apisports-key": import.meta.env.VITE_API_KEY,
                },
              }
            );
            // 액티비티 이름과 파라미터를 통해 해당 액티비티에 필요한 데이터를 가져와요.
            // 해당 데이터에 접근 할 수 있는 reference 값을 반환하면,
            // 해당 reference 값을 `useActivityPreloadRef` 훅을 통해 가져올 수 있어요.

            const data = await response.json();
            return data;
          };

          return getData();
        },
      },
    }),
  ],
  activities: {
    Main,
    Article,
  },
  initialActivity: () => "Main",
});
