# MobX 연동

## Knex

DB구조 수정
일단 yarn knex migrate:make -x ts [마이그레이션명] 실행하면 api/db/migrations/[날짜시각]\_[마이그레이션명].ts 생성됨
생성된 ts파일의 up(), down() 작성하여 필히 up->down->up테스트 후 나머지 코드와 함께 커밋
작업자 및 협업자는 yarn knex migrate:list로 상태확인 후, yarn knex migrate:latest로 DB에 해당 마이그레이션 적용
필요한 경우, api/db/seeds 안의 초기데이터 삽입코드도 수정하여 커밋에 포함
DB 전체 새로 붓기
방법 1: DB를 새로 생성 후 yarn knex migrate:latest 및 yarn knex seed:run
방법 2: yarn knex migrate:rollback --all하여 DB 초기화 후 yarn knex migrate:latest 및 yarn knex seed:run
