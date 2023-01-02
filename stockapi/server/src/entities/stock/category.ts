//append_imports_start

import {
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Entity,
  Column,
} from 'typeorm'; //_splitter_
import { size } from './size'; //_splitter_
//append_imports_end
@Entity('category')
export class category {
  @PrimaryGeneratedColumn({ name: 'category_id' })
  category_id: number;
  @Column({ name: 'brand_name', nullable: false, type: 'text', primary: false })
  brand_name: string;
  @OneToOne(() => size, (size) => size.size_id, {
    cascade: true,
    eager: true,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    nullable: false,
  })
  @JoinColumn({ name: 'size_id', referencedColumnName: 'size_id' })
  size_id;
}
