-- \c calendar_dev

drop table if exists events;

CREATE TABLE records (
  id VARCHAR(64) PRIMARY KEY,
  startTime VARCHAR(255),
  endTime VARCHAR(255),
  description TEXT,
  dayId INTEGER
);
