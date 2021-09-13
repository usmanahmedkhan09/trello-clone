export default function ({ store, route, redirect })
{

    if (route.path !== '/auth/login')
    {

        if (!store.state.auth)
        {
            return redirect({ path: '/auth/login' })
        }
    } else if (route.path === '/auth/login')
    {
        if (store.state.auth)
        {
            return redirect({ path: '/' })
        }
    }

}