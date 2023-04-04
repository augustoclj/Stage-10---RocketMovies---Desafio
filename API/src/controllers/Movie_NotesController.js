const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class Movie_NotesController{
  async create(request, response){
    const { title, description, rating, movie_tags } = request.body;
    const user_id  = request.user.id;

    const checkRating = (rating >=1 && rating <=5)

    if(!checkRating){
      throw new AppError("O campo rating deve ser preenchido com valores entre 1 e 5")
    }

    const note_id = await knex("movie_notes").insert({
      title,
      description,
      rating, 
      user_id
    });

    const tagInsert = movie_tags.map(tag => {
      return {
        note_id,
        name: tag,
        user_id
      }
    });

    await knex("movie_tags").insert(tagInsert);

    response.json();
  }

  async show(request, response){
    const { id } = request.params;

    const movie_note = await knex("movie_notes").where({ id }).first();
    const movie_tags = await knex("movie_tags").where({note_id: id}).orderBy("name");



    return response.json({
      ...movie_note,
      movie_tags
    });
  }

  async delete(request, response){
    const { id } = request.params;
    await knex("movie_notes").where({ id }).delete();

    return response.json();
  }

  async index(request, response){
    const { tags, title } = request.query;
    const user_id = request.user.id;
    
    let movie_notes

    if(tags){
      const filterTags = tags.split(',').map(tag => tag.trim())

      movie_notes = await knex("movie_tags")
      .select([
        "movie_notes.id",
        "movie_notes.title",
        "movie_notes.rating",
        "movie_tags.name"
      ])
      .where("movie_notes.user_id", user_id)
      .whereLike("movie_notes.title", `%${title}%`)
      .whereIn("name", filterTags)
      .innerJoin("movie_notes", "movie_notes.id", "movie_tags.note_id")
      .orderBy("movie_notes.title")


    }else{
      movie_notes = await knex("movie_notes")
      .where({ user_id })
      .whereLike("title", `%${title}%`)
      .orderBy("title")
    }

    return response.json(movie_notes);

  }
}

module.exports = Movie_NotesController;