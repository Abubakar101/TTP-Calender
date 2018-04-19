\c calendar_dev

drop table if exists events;

CREATE TABLE events (
  id BIGSERIAL PRIMARY KEY,
  start_time VARCHAR(255),
  end_time VARCHAR(255),
  description TEXT,
  day_id INTEGER
);
