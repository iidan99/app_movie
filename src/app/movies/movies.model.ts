export class MovieModel {
  constructor(public Title: string, public Year: string, public Runtime: string, public Genre: string, public Language: string,
    public imdbID: string,
    public Poster: string) {
    this.Title = Title;
    this.Year = Year;
    this.Runtime = Runtime;
    this.Genre = Genre;
    this.Language = Language;
    this.imdbID = imdbID;
    this.Poster = Poster;
  }
}