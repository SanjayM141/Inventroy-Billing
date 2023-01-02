//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('register')
export class register {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'email_id', nullable: false, type: 'text', primary: false })
  email_id: string;
  @Column({ name: 'username', nullable: false, type: 'text', primary: false })
  username: string;
  @Column({ name: 'password', nullable: false, type: 'text', primary: false })
  password: string;
}
