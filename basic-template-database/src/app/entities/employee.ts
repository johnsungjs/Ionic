import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export const TABLE_NAME = 'employee';

@Entity(TABLE_NAME)
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  position: string;
}
