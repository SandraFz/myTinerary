import { createAction } from "@reduxjs/toolkit";

const loginUser = createAction('login_user', (obj) => {
    return {
        payload:obj
    }
})

export default {loginUser}
