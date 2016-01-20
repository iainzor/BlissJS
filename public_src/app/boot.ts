import {bootstrap} from "angular2/platform/browser"
import {HTTP_PROVIDERS} from "angular2/http"
import {BlissApp} from "../bliss/bliss-app"
import {MyApp} from "./my-app"

bootstrap(MyApp, [BlissApp, HTTP_PROVIDERS]);