'use strict'

const Song = use('App/Models/Song')

class SongController {
	
	async index(){
		const songs = await Song.all()
		return songs
	}

	async byId({ params }){
		const {id} = params
		const song = await Song.find(id)
		return song
	}

	async input({ request }){
		await Song.create(request.post())
	}
}

module.exports = SongController
