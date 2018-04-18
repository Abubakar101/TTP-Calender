import db from "../db/config";

const Event = {
  findAll() {
    return db.query(`SELECT * FROM events ORDER BY id desc`);
  },

  create(event) {
    return db.one(
      `INSERT INTO events (startTime, endTime, description, dayId) VALUES ($1, $2, $3, $4) RETURNING *`,
      [event.startTime, event.endTime, event.description, event.dayId]
    );
  },

  destroy(id) {
    db.none(`DELETE FROM events WHERE id = $1`, id);
  }
};

export default Event;
