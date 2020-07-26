# MobX 연동

# Knex

DB 마이그레이션

- 마이그레이션 파일 추가 yarn knex migrate:make -x ts [마이그레이션명]
- 마이그레이션 실행 yarn knex migrate:latest
- 마이그레이션 조작 yarn knex migrate:up, yarn knex migrate:down

DB 시드

- yarn knex seed:run (이때 시드 파일 순서로 시드가 넣어짐)

DB 초기화

- yarn knex migrate:latest 및 yarn knex seed:run
