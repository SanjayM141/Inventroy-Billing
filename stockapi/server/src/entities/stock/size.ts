//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('size')
export class size {
  @PrimaryGeneratedColumn({ name: 'size_id' })
  size_id: number;
  @Column({ name: 'size_name', nullable: false, type: 'text', primary: false })
  size_name: string;
}
