#!/usr/bin/env sh

set -e

echo '>>Waiting for database...'
until nc -z "db.local" 3306; do
  sleep 1
done
echo '<< Database is ready'

#executes command which is run in the Dockerfile start
exec "$@"
