//append_imports_start

import {
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Entity,
  Column,
} from 'typeorm'; //_splitter_
import { category } from './category'; //_splitter_
//append_imports_end
@Entity('addstock')
export class addstock {
  @PrimaryGeneratedColumn({ name: 'stock_id' })
  stock_id: number;
  @Column({ name: 'stock_name', nullable: false, type: 'text', primary: false })
  stock_name: string;
  @OneToOne(() => category, (category) => category.category_id, {
    cascade: true,
    eager: true,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    nullable: false,
  })
  @JoinColumn({ name: 'category_id', referencedColumnName: 'category_id' })
  category_id;
  @Column({
    name: 'date',
    nullable: false,
    type: 'timestamp with time zone',
    primary: false,
  })
  date: Date;
}
