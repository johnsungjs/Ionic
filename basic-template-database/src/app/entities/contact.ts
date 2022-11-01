import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export const TABLE_NAME = 'contact';

@Entity(TABLE_NAME)
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
}
