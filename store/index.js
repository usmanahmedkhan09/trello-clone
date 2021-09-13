
export const state = () => ({
    auth: false,
    user: []

})

export const mutations = {
    SET_USER(state, payload)
    {
        state.user = payload
    },

    SET_AUTH(state, payload)
    {
        state.auth = payload
    }
}

export const getters = {
    GET_USER()
    {
        return state.user
    }
}

export const actions = {
    onAuthStateChangedAction(ctx, payload)
    {
        if (payload)
        {
            const { email, uid } = payload.user
            ctx.commit('SET_USER', {
                email: email,
                userId: uid
            })
            console.log(payload)
            ctx.commit('SET_AUTH', true)
            this.$cookiz.set('auth', true)
            this.$router.push({ path: '/' })
        }
    },
    nuxtServerInit(ctx)
    {
        if (this.$cookiz.get('auth'))
        {
            ctx.commit('SET_AUTH', true)
        }
    }
}
