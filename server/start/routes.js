'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
// Route.get('/', 'ProductController.index')

Route.group(() => {

	//songs
	Route.get('songs', 'SongController.index').middleware(['auth'])
	Route.get('song/:id', 'SongController.byId')
	Route.post('song', 'SongController.input')

	//auth
	Route.post('auth/register', 'AuthController.register').middleware(['guest'])
	Route.post('auth/login', 'AuthController.login').middleware(['guest'])
	Route.post('auth/logout', 'AuthController.revokeUserToken').middleware(['auth'])

}).prefix('api/teramu/v1')
