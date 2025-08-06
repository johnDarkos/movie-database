import { handleChangeRoute, initRoute } from "./router/router.js"

const app = () => {
   initRoute();
   handleChangeRoute();
}

app();