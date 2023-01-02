//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('entity_1')
export class entity_1 {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
}
