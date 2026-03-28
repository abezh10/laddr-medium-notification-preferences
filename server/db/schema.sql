CREATE TABLE IF NOT EXISTS notification_preferences (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  mentions_enabled BOOLEAN NOT NULL DEFAULT TRUE,
  task_updates_enabled BOOLEAN NOT NULL DEFAULT TRUE
);
