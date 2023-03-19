import {useAuth0} from "@auth0/auth0-vue";
import {Ref} from "vue";

export default (isAuthenticated: Ref<boolean>) => {
    console.log(isAuthenticated.value)
}
