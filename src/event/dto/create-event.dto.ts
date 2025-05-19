export class CreateEventDto {
  name: string;
  photo: string;
  start_date: Date;
  end_date: Date;
  start_time: string;
  finish_time: string;
  info: string;
  event_type_id: string;
  human_category_id: string;
  venue_id: string;
  lang_id: string;
  release_date: Date;
}
