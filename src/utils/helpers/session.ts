// import {withIronSessionApiRoute, withIronSessionSsr} from 'iron-session/next'
// import {GetServerSidePropsContext, GetServerSidePropsResult, NextApiHandler} from 'next'


// const sessionOptions = {
// 	password: process.env.NEXT_SECRET_COOKIE_PASSWORD || 'THIS_IS_A_VERY_LONG_COMPLEX_PASSWORD',
// 	cookieName: process.env.NEXT_COOKIE_NAME || 'SESSION_COOKIE_NAME',
// 	cookieOptions: {
// 		secure: process.env.NODE_ENV === 'production'
// 	}
// }

// export const withSessionRoute = (handler: NextApiHandler) => {
// 	return withIronSessionApiRoute(handler, sessionOptions)
// }

// export const withSessionSsr = <P extends {[key: string]: unknown} = {[key: string]: unknown}>(
// 	handler: (context: GetServerSidePropsContext) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>
// ) => withIronSessionSsr(handler, sessionOptions)

// export const withSession = withSessionSsr(async ({req}) => {
// 	const {user} = req.session

// 	if (!user) {
// 		return {
// 			redirect: {
// 				destination: '/login',
// 				permanent: false
// 			}
// 		}
// 	}

// 	return {
// 		props: {user}
// 	}
// })
