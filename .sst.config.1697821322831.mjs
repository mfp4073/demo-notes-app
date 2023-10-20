import { createRequire as topLevelCreateRequire } from 'module';const require = topLevelCreateRequire(import.meta.url);
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// stacks/MyStack.ts
import { Api } from "sst/constructs";
function API({ stack }) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler"
    }
  });
  stack.addOutputs({
    ApiEndpoint: api.url
  });
}
__name(API, "API");

// sst.config.ts
var sst_config_default = {
  config(_input) {
    return {
      name: "notes",
      region: "us-east-1"
    };
  },
  stacks(app) {
    app.stack(API);
  }
};
export {
  sst_config_default as default
};
