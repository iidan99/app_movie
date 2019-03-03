export class MovieModel {
  constructor(public title: string, public year: string, public runtime: string, public genre: string, public language: string,
    public id: string,
    public poster: string) {
    this.title = title;
    this.year = year;
    this.runtime = runtime;
    this.genre = genre;
    this.language = language;
    this.id = id;
    this.poster = poster;
  }
}