import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  sku!: string;

  @Column()
  name!: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price!: number;

  @Column('text', { array: true, nullable: true })
  images!: string[];
}
